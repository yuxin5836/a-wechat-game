cc.Class({
    extends: cc.Component,

    properties: {
        shopButton: cc.Button,
    },

    onLoad() {
        this.shopButton.node.on("click", this.enterShop, this);
    },

    enterShop() {
 
        cc.director.loadScene("shop");
    }
});
