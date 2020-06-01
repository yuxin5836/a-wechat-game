// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 这个属性引用了星星预制资源
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 星星产生后消失时间的随机范围
        maxStarDuration: 0,
        minStarDuration: 0,

        // 地面节点，用于确定星星生成的高度
        ground: {
            default: null,
            type: cc.Node
        },

        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        player: {
            default: null,
            type: cc.Node
        },

        scoreDisplay: {
            default: null,
            type: cc.Label
        },

        // 得分音效资源
        scoreAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    onLoad: function () {
        console.log("Game");
        // 获取地平面的 y 轴坐标
        this.groundY = this.ground.y + this.ground.height / 2;

        // 初始化计时器
        this.timer = 0;
        this.starDuration = 0;
        // 生成一个新的星星
        this.spawnNewStar();
        // 初始化计分
        this.score = 0;
    },

    update: function (dt) {
        // 每帧更新计时器，超过限度还没有生成新的星星
        // 就会调用游戏失败逻辑
        if (this.timer > this.starDuration)
        {
            this.gameOver();
            return;
        }
        this.timer += dt;
    },

    spawnNewStar: function () {
        // 使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab);

        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStar);

        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('Star').game = this;
        /*
         这里的重点在于，星星要随时可以获得主角节点的位置，才能判断它们之间的距离是否小于可收集距离，
         如何获得主角节点的引用呢？别忘了我们前面做过的两件事：
            Game 组件中有个名叫 player 的属性，保存了主角节点的引用。
            每个星星都是在 Game 脚本中动态生成的。
            所以我们只要在 Game 脚本生成 Star 节点实例时，将 Game 组件的实例传入星星并保存起来就好了，之后我们
            可以随时通过 game.player 来访问到主角节点。让我们打开 Game 脚本，在 spawnNewStar 方法最后面添加一句 newStar.getComponent('Star').game = this;


         newStar是一个节点（node），Star是一个附加到newStar节点上的组件
        newStar.getComponent("Star")就是获取到Star这个组件
        game是Star组件的一个属性，这里把this赋值给game这个属性，this代表当前组件
        
        所以这句代码的意思就是
        把当前组件保存到newStar节点下的Star组件里的game属性里
        以后你在任何地方调用
        newStar.getComponent("Star").game（newStar需要自己先获取，并不是直接调用newStar）
        获取到的就是当前组件
         */

        // 重置计时器，根据消失时间范围随机取一个值
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    },

    getNewStarPosition: function () {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
        console.log("1");
        const randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        console.log("2");
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.Vec2(randX, randY);
    },

    gainScore: function () {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    gameOver: function () {
        this.player.stopAllActions(); //停止 player 节点的跳跃动作
        cc.director.loadScene('game');
        /*
         * ，cc.director 是一个管理你的游戏的逻辑流程的单例对象。由于 cc.director 是一个单例，你不需要调用任何构造函数或创建函数，使用它的标准方法是通过调用cc.director.methodName() ，例如这里的cc.director.loadScene('game')就是重新加载游戏场景game，也就是游戏重新开始。
         */
    }
});
