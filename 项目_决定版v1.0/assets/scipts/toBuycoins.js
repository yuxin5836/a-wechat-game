cc.Class({
    extends: cc.Component,

    properties: {
        plusButton: cc.Button
    },

    onLoad() {
        this.plusButton.node.on("click", this.enterShopModel, this);
    },

    enterShopModel() {
        cc.director.loadScene("shop");
    },
});
