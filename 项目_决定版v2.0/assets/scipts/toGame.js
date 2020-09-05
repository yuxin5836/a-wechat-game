cc.Class({
    extends: cc.Component,

    properties: {
        gameButton: cc.Button,
    },

    onLoad() {
        this.gameButton.node.on("click", this.entergame, this);
    },

    entergame() {
 
        cc.director.loadScene("start");
    }
});
