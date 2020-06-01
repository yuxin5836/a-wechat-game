cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {
        console.log("onLoad");
        this.player = this.node.getChildByName('player');
        //获取player节点

        this.loadMap();
        //加载地图

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        //鼠标键盘事件
    },

    onKeyDown: function (event) {       
        //获取player的瓦片坐标
        var newTile = cc.v2(this.playerTile.x, this.playerTile.y);

        switch (event.keyCode) {
            case cc.macro.KEY.up:
                newTile.y -= 1;
                break;
            case cc.macro.KEY.down:
                newTile.y += 1;
                break;
            case cc.macro.KEY.left:
                newTile.x -= 1;
                break;
            case cc.macro.KEY.right:
                newTile.x += 1;
                break;
            default:
                return;
        }

        //尝试移动到新的瓦片上
        this.tryMoveToNewTile(newTile);
    },

    onMouseDown: function(event) {
        var click_pos = event.getLocation();
        var click_posTile = this.getTilePos(click_pos);
        var newTile = cc.v2(this.playerTile.x, this.playerTile.y);
        //console.log("click_pos.x" + click_posTile.x + "  playerTile.x" + newTile.x);
        if (click_posTile.x > newTile.x) { newTile.x += 1; console.log("right"); }
        else if (click_posTile.x < newTile.x) { newTile.x -= 1; console.log("left"); }
        else if (click_posTile.y > newTile.y) { newTile.y += 1; console.log("up"); }
        else if (click_posTile.y < newTile.y) {newTile.y -= 1; console.log("down");}
        this.tryMoveToNewTile(newTile);
    },

    tryMoveToNewTile: function (newTile) {
        var mapSize = this.tiledMap.getMapSize();

        //超出边界，直接返回
        if (newTile.x < 0 || newTile.x >= mapSize.width) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height) return;

        //碰到障碍
        if (this.barriers.getTileGIDAt(newTile)) {
            //GID=0,则该Tile为空
            //障碍物GID 19
            //console.log(this.barriers.getTileGIDAt(newTile));
            console.log('This way is blocked!');
            //this.barriers.setTileGIDAt(19, newTile.x, newTile.y);
            return false;
        }

        this.tryCatchStar(newTile);
        this.playerTile = newTile;
        this.updatePlayerPos();
        if (cc.Vec2(this.playerTile, this.endTile)==0) {
            console.log('succeed');
        }
    },

    tryCatchStar: function (newTile) {
        //console.log(this);
        var GID = this.stars.getTileGIDAt(newTile);
        var prop = this.tiledMap.getPropertiesForGID(GID);
        var bar = this.tiledMap.getLayer('barriers');
        //bar.setTileGIDAt(19, newTile.x, newTile.y)
        if (this.stars.getTileGIDAt(newTile)) {//GID=0,则该Tile为空
            console.log('starGID', this.stars.getTileGIDAt(newTile))
            //this.stars.getTiledTileAt(newTile.x, newTile.y, true)
            this.stars.setTileGIDAt(0, newTile.x, newTile.y)
            //this.stars.setTileGIDAt(39, newTile.x, newTile.y)
            console.log('removeTileAt: ', newTile)
        }
    },

    //加载地图文件时调用
    loadMap: function () {
        console.log("loadmap");
        //初始化地图位置
        this.node.setPosition(cc.visibleRect.bottomLeft);

        //地图
        this.tiledMap = this.node.getComponent(cc.TiledMap);

        //players对象层
        var players = this.tiledMap.getObjectGroup('players');

        //startPoint和endPoint对象
        var startPoint = players.getObject('startPoint');
        var endPoint = players.getObject('endPoint');

        console.log("1");
        //像素坐标
        var startPos = cc.v2(startPoint.x, startPoint.y);
        var endPos = cc.v2(endPoint.x, endPoint.y);
        console.log("successful get index");

        //障碍物图层和星星图层
        this.barriers = this.tiledMap.getLayer('barriers');
        this.stars = this.tiledMap.getLayer('stars');

        //出生Tile和结束Tile
        this.playerTile = this.startTile = this.getTilePos(startPos);
        this.endTile = this.getTilePos(endPos);
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
        var pos = this.barriers.getPositionAt(this.playerTile);
        this.player.setPosition(pos);
    },

});
