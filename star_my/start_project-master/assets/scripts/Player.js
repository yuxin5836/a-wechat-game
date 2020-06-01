cc.Class({
    extends: cc.Component,

    properties: {
        // 主角跳跃高度
        jumpHeight: 0,

        // 主角跳跃持续时间
        jumpDuration: 0,

        // 最大移动速度
        maxMoveSpeed: 0,

        // 加速度
        accel: 0,

         // 跳跃音效资源
        jumpAudio: {
            default: null,
            url: cc.AudioClip
        },
    },


    onLoad: function () {

        console.log("player");
        // 初始化跳跃动作
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        // 加速度方向开关
        this.accLeft = false;
        this.accRight = false;
        // 主角当前水平方向速度
        this.xSpeed = 0;

        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },



    update: function (dt) {
        // 根据当前加速度方向每帧更新速度
        //this.xSpeed可为正可为负
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
    },

    setJumpAction: function () {
        // 跳跃上升

        //cc.p在2.0版本之后不再支持，改为cc.Vec
        //cc.MoveBy(duration, deltaPos, deltaY);

        //cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight))意思是在jumpDuration时间内移动到
        //相对于当前节点0,this.jumpHeight的位置

        //后半部分easing(cc.easeCubicActionOut())的作用是什么呢？easing是ActionInterval类下的一个方法，这个方法
        //可以让时间间隔动作呈现为一种缓动运动，传入的参数是一个缓动对象，返回一个ActionInterval类型对象，这里
        //使用easeCubicActionInOut方法构建的缓动对象，EaseCubicInOut是按三次函数缓动进入并退出的动作
        var jumpUp = cc.moveBy(this.jumpDuration, cc.Vec2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());

        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.Vec2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());

        // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
        var callback = cc.callFunc(this.playJumpSound, this);

        // 不断重复，而且每次完成落地动作后调用回调来播放声音
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },

    //按下a朝左加速,d朝右加速
    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
            default:
                break;
        }
    },

    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
            default:
                break;
        }
    },

    playJumpSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },
});
