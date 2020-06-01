require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Game":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dee32WsSYdAYI9kQtBcYv+b', 'Game');
// scripts\Game.js

cc.Class({
    'extends': cc.Component,

    properties: {
        starPrefab: {
            'default': null,
            type: cc.Prefab
        },
        scoreDisplay: {
            'default': null,
            type: cc.Label
        },
        maxStarTime: 0,
        minStarTime: 0,

        ground: {
            'default': null,
            type: cc.Node
        },

        player: {
            'default': null,
            type: cc.Node
        }
    },
    getNewStarPosition: function getNewStarPosition() {
        var randX = 0;
        var randY = this.groundY + cc.random0To1() * this.player.getComponent('Player').jumpHeight + 50;

        var maxX = this.node.width / 2;
        randX = cc.randomMinus1To1() * maxX;
        return cc.p(randX, randY);
    },
    spawnNewStar: function spawnNewStar() {
        var newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('Start').game = this;
    },
    // use this for initialization
    onLoad: function onLoad() {
        this.score = 0;

        this.groundY = this.ground.y + this.ground.height / 2;
        this.spawnNewStar();
    },
    gainScore: function gainScore() {
        this.score += 1;
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"Player":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0a2e5sNLsJPUpRoy0IPYeGG', 'Player');
// scripts\Player.js

cc.Class({
    "extends": cc.Component,

    properties: {
        jumpHeight: 0,
        jumpDuration: 0,
        maxMoveSpeed: 0,
        accel: 0
    },

    setJumpAction: function setJumpAction() {
        var jumpUP = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        return cc.repeatForever(cc.sequence(jumpUP, jumpDown));
    },
    setInputControl: function setInputControl() {
        var self = this;
        //添加键盘的监听事件
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
                        break;
                }
            },
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },
    onLoad: function onLoad() {
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        this.accLeft = false;
        this.accRight = false;

        this.xSpeed = 0;
        this.setInputControl();
    },
    update: function update(dt) {
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        this.node.x += this.xSpeed * dt;
        var mathWidth = this.node.parent.width / 2;
        if (this.node.x > mathWidth) {
            this.node.x = -mathWidth;
        } else if (this.node.x < -mathWidth) {
            this.node.x = mathWidth;
        }
    }
});

cc._RFpop();
},{}],"Start":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a18dfTxq6BCda26ubs1aNtm', 'Start');
// scripts\Start.js

cc.Class({
    "extends": cc.Component,

    properties: {
        Shoujifanwei: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},
    getPlayerDistance: function getPlayerDistance() {
        var playerPos = this.game.player.getPosition();
        var dist = cc.pDistance(this.node.getPosition(), playerPos);
        return dist;
    },
    onPicked: function onPicked() {
        this.game.spawnNewStar();
        this.node.destroy();
        this.game.gainScore();
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.getPlayerDistance() < this.Shoujifanwei) {
            this.onPicked();
            return;
        }
    }
});

cc._RFpop();
},{}]},{},["Player","Start","Game"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL01yLlN1bi9BcHBEYXRhL0xvY2FsL0NvY29zQ3JlYXRvci9hcHAtMS4wLjMvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9HYW1lLmpzIiwiYXNzZXRzL3NjcmlwdHMvUGxheWVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvU3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2RlZTMyV3NTWWRBWUk5a1F0QmNZditiJywgJ0dhbWUnKTtcbi8vIHNjcmlwdHNcXEdhbWUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGFyUHJlZmFiOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBtYXhTdGFyVGltZTogMCxcbiAgICAgICAgbWluU3RhclRpbWU6IDAsXG5cbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gZ2V0TmV3U3RhclBvc2l0aW9uKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBjYy5yYW5kb20wVG8xKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcblxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XG4gICAgICAgIHJhbmRYID0gY2MucmFuZG9tTWludXMxVG8xKCkgKiBtYXhYO1xuICAgICAgICByZXR1cm4gY2MucChyYW5kWCwgcmFuZFkpO1xuICAgIH0sXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbiBzcGF3bk5ld1N0YXIoKSB7XG4gICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcnQnKS5nYW1lID0gdGhpcztcbiAgICB9LFxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcbiAgICB9LFxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gZ2FpblNjb3JlKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMGEyZTVzTkxzSlBVcFJveTBJUFllR0cnLCAnUGxheWVyJyk7XG4vLyBzY3JpcHRzXFxQbGF5ZXIuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxuICAgICAgICBhY2NlbDogMFxuICAgIH0sXG5cbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiBzZXRKdW1wQWN0aW9uKCkge1xuICAgICAgICB2YXIganVtcFVQID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy5wKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MucCgwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVVAsIGp1bXBEb3duKSk7XG4gICAgfSxcbiAgICBzZXRJbnB1dENvbnRyb2w6IGZ1bmN0aW9uIHNldElucHV0Q29udHJvbCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvL+a3u+WKoOmUruebmOeahOebkeWQrOS6i+S7tlxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleVJlbGVhc2VkOiBmdW5jdGlvbiBvbktleVJlbGVhc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7XG5cbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRDb250cm9sKCk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XG4gICAgICAgIHZhciBtYXRoV2lkdGggPSB0aGlzLm5vZGUucGFyZW50LndpZHRoIC8gMjtcbiAgICAgICAgaWYgKHRoaXMubm9kZS54ID4gbWF0aFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IC1tYXRoV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlLnggPCAtbWF0aFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IG1hdGhXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYTE4ZGZUeHE2QkNkYTI2dWJzMWFOdG0nLCAnU3RhcnQnKTtcbi8vIHNjcmlwdHNcXFN0YXJ0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBTaG91amlmYW53ZWk6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gZ2V0UGxheWVyRGlzdGFuY2UoKSB7XG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBwbGF5ZXJQb3MpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuICAgIG9uUGlja2VkOiBmdW5jdGlvbiBvblBpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKCk7XG4gICAgfSxcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLlNob3VqaWZhbndlaSkge1xuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
