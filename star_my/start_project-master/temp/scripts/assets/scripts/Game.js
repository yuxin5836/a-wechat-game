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