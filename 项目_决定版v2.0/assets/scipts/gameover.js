
cc.Class({
    extends: cc.Component,

    properties: {
         scoreDisplay: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
    },

    toGame: function ( ) {
        cc.director.loadScene("game")
    },

    start () {

    },


    // update (dt) {},
});
