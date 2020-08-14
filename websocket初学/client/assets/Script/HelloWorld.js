var websocket;
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    start(){
        this.label.string = this.text;
        this.initSocket();
    },

    // use this for initialization
    onLoad: function () {
        /*cc.log('before send ');
        websocket.send('hello');
        cc.log('after send ');*/

    },

    // called every frame
    update: function (dt) {

    },

        //连接服务器

    initSocket: function(){

        if(window.WebSocket){
            var wsUri = "ws://localhost:8080/tomcat_websocket/test";
            websocket = new WebSocket(wsUri);
            //websocket.binaryType = "arraybuffer";

            //var mythis = this;

            //连接到服务器后执行
            websocket.onopen = function(event) {
                console.log("connect");
                websocket.send('hello');
                //mythis.requestInitInfoBar();
            };

            //断开服务器连接后执行
            websocket.onclose = function(event) {
                console.log("closed");
            };

            //接收服务器传递的消息后执行
            websocket.onmessage = function(event) {
                cc.log(event.data);
                //mythis.processData(json);
            };
            //报错时执行
            websocket.onerror = function(event) {
                console.log("error");
            };
        }
        else{
            alert("浏览器不支持WebSocket！");
        }
    }
});
