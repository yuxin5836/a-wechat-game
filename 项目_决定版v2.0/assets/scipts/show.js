let shoplife = require("lifeplus");
cc.Class({
    extends: cc.Component,

    properties: {
        coinShop: {
            default: null,
            type: cc.Node
        },
        lifeShop: {
            default: null,
            type: cc.Node
        },
        toolShop: {
            default: null,
            type: cc.Node
        },
        toolsShow: {
            default: null,
            type: cc.Node
        }
    },

    click: function () {
        cc.director.loadScene("rankList");
    },

    back:function(){

        cc.director.loadScene("lobby");
    },
    onLoad() {
        if (shoplife.shopSelect == 1) {
        this.lifeShop.active = true;
        this.toolShop.active = false;
        this.toolsShow.active = false;
        this.coinShop.active = false;
        }
        shoplife.shopSelect =null;
    }
});
