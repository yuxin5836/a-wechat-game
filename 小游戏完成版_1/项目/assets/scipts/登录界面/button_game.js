// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

//跳过服务器连接直接启动游戏
//是一个测试按钮的script
cc.Class({
    extends: cc.Component,

    properties: {
    },


    btnClick1: function (event, customEventData) {
        //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
        cc.director.loadScene("game");
    }
    // update (dt) {},
});
