// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        console.log("onLoad");
        this.player_now = this.node.getChildByName('player_now');
        //获取player_now节点
        //console.log(this.player_now)
        this.loadMap();
        //加载地图

        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //键盘事件
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        //鼠标事件
    },


    tryMoveToNewTile: function (newTile) {
        var mapSize = this.tiledMap.getMapSize();

        //超出边界，直接返回
        if (newTile.x < 0 || newTile.x >= mapSize.width-1) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height-1) return;

        //console.log(this.ground.getTileGIDAt(newTile))
        //1是填充块,2是非填充块
        //this.ground.setTileGIDAt(1,newTile.x,newTile.y)


        //
        //if()
        //this.tryenclouse(newTile);//尝试圈地
        this.playerTile = newTile;
        this.updatePlayerPos();
    },

    //鼠标事件
    onMouseDown: function (event) {
        var click_pos = event.getLocation();
        var click_posTile = this.getTilePos(click_pos);
        var newTile = cc.v2(this.playerTile.x, this.playerTile.y);
        if (click_posTile.x > newTile.x) { newTile.x += 1; console.log("right"); }
        else if (click_posTile.x < newTile.x) { newTile.x -= 1; console.log("left"); }
        else if (click_posTile.y > newTile.y) { newTile.y += 1; console.log("up"); }
        else if (click_posTile.y < newTile.y) { newTile.y -= 1; console.log("down"); }
        this.tryMoveToNewTile(newTile);
    },


    //加载地图文件时调用
    loadMap: function () {
        console.log("loadmap");
        //初始化地图位置
        this.node.setPosition(cc.visibleRect.bottomLeft);

        //地图
        this.tiledMap = this.node.getComponent(cc.TiledMap);

        //player对象层
        var player = this.tiledMap.getObjectGroup('player');

        var birth_point_1 = player.getObject('birth_point_1');

        console.log("1");
        //像素坐标
        var startPos = cc.v2(birth_point_1.x, birth_point_1.y);
        console.log("startPos"+startPos);

        this.ground = this.tiledMap.getLayer('ground');

        //出生Tile
        this.playerTile = this.getTilePos(startPos);
        console.log("start tile"+this.playerTile)
        //更新player位置
        this.updatePlayerPos();
    },


    //将像素坐标转化为瓦片坐标
    getTilePos: function (posInPixel) {
        var mapSize = this.node.getContentSize();
        var tileSize = this.tiledMap.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
        return cc.v2(x, y);
    },

    updatePlayerPos: function () {
        //var pos = this.barriers.getPositionAt(this.playerTile);
        var pos = this.ground.getPositionAt(this.playerTile);
        this.ground.setTileGIDAt(1, this.playerTile.x, this.playerTile.y)
        //填充走过的路径
        this.player_now.setPosition(pos);
        //console.log(this.player_now.x);
    },
    // update (dt) {},
});
