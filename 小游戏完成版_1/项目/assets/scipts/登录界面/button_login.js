//如果加上了window就相当于声明成了全局变量
window.user_name;
window.user_code;
window.websocket;

var flag_login=0;
//标志变量,告诉客户端是否登录成功
//0失败,1成功

var flag_register=0;
//是否注册成功(如果有重复的用户名将会注册失败)

cc.Class({
    extends: cc.Component,

    properties: {
    },

    start(){
        this.initSocket();
    },
    btnClick2: function (event, customEventData){
        user_name=this.node.getChildByName("user_input").getComponent(cc.EditBox).string;
        user_code=this.node.getChildByName("code_input").getComponent(cc.EditBox).string;
        //websocket.send(user_name.toString()+" "+user_code.toString());
        cc.log(user_name);
        cc.log(user_code);
    },


    
        //初始化与服务器建立连接
        initSocket: function(){
            if(window.WebSocket){
                var wsUri = "ws://localhost:8080/tomcat_websocket/test";
                websocket = new WebSocket(wsUri);
                //websocket.binaryType = "arraybuffer";
                //var mythis = this;
                //连接到服务器后执行
                websocket.onopen = function(event) {
                    console.log("connect");
                    //mythis.requestInitInfoBar();
                };
        
                //断开服务器连接后执行
                websocket.onclose = function(event) {
                    console.log("closed");
                };
        
                //接收服务器传递的消息后执行
                websocket.onmessage = function(event) {
                    if(event.data.substr(0,2)=='id')
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
