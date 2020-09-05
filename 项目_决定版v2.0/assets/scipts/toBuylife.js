let shoplife= require("lifeplus");
cc.Class({
    extends: cc.Component,

    properties: {
        plusButton: cc.Button
    },

    onLoad() {
        this.plusButton.node.on("click", this.enterShopModel, this);
    },

    enterShopModel() {
        shoplife.shopSelect=1;
        cc.director.loadScene("shop");

    },
});
