var node = new Array()    //填色数组
var Flag = new Array(100)//连通片数目最多为30，否则此处需继续增加值
                            //第i个联通片是否是领地内的标记，为0则是

var nodeflag_num            //联通片数量的计数
var tileSize                //地图大小

var v_x = 0;
var v_y = 0;

cc.Class({
    extends: cc.Component,
    properties: {
        Rocker: {
            type: require("Rocker"),
            default: null,
        },
        speed: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        console.log("onLoad");
        this.player_now = this.node.getChildByName('player_now');
         //获取player_now节点
        //console.log(this.player_now)
        this.loadMap();
        //加载地图

        this.timer = 0;
        v_x = 1;
        v_y = 0;
    },


    tryMoveToNewTile: function (newTile) {
        var mapSize = this.tiledMap.getMapSize();

        //超出边界，直接返回
        if (newTile.x < 0 || newTile.x >= mapSize.width) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height) return;

        //console.log(this.ground.getTileGIDAt(newTile))
       //1是填充块,2是非填充块 
        //this.ground.setTileGIDAt(1,newTile.x,newTile.y)


        if (this.ground.getTileGIDAt(newTile) == 1)
           //如果当前位置与已填充块重叠，尝试圈地
           this.tryenclosure();//尝试圈地
        this.playerTile = newTile;
        this.updatePlayerPos();
    },

    tryenclosure: function () {
        //console.log("try to enclosure")
        //var Node_A = new Array();
        nodeflag_num = 1;//联通片数量的计数
        for (var i = 0; i < tileSize.height; i++) {
            node[i] = new Array();
            for (var j = 0; j < tileSize.width; j++) {
                node[i][j] = new Array();
                for (var k = 0; k < 3; k++)
                    node[i][j][k] = new Array();
            }
        }//相当于是Node_A[height][width][3]
        //Node_A[height][width][0]标识该点是填充块还是非填充块
        //[1]标识该点是哪一个联通片

        for (var i = 0; i < 100; i++)
            Flag[i] = 0;
        //获取整个地图的填色信息
        for (var i = 0; i < tileSize.height; i++) {
            for (var j = 0; j < tileSize.width; j++) {
                node[i][j][0] = 0;
                node[i][j][1] = 0;
                if (this.ground.getTileGIDAt(i, j) == 1)
                    node[i][j][0] = 1;
            }
        }

       //深度优先搜索尝试填充
        //分别从上下左右搜寻，进行深度优先搜索
        for (var i = 0; i < tileSize.height; i++) {
            for (var j = 0; j < tileSize.width; j++) {
                //console.log(i+" "+j+"node"+node[i][j][0])
                if (node[i][j][0] == 0 && node[i][j][1] == 0) {
                    //console.log(i+"@@@")
                    //若未涂实色且不属于之前任何联通片，从此点搜索新联通片
                    this.dfs(i, j);
                    nodeflag_num=nodeflag_num+1;
                }
            }
        }
        //console.log("!")
        //将所有闭联通片涂实
        for (var i = 0; i < tileSize.height; i++) {
            for (var j = 0; j < tileSize.width; j++) {
                //console.log(i + " " + j + " " + node[i][j][1] + " " + Flag[node[i][j][1]])
                if (node[i][j][1] != 0 && Flag[node[i][j][1]] == 0) {
                    console.log("enclosure")
                    this.ground.setTileGIDAt(1, i, j)
                }
            }
        }
    },

    //搜索过程
    dfs:function(x, y) {
        //console.log("!!!")
        if (node[x][y][0] == 1)//碰到自己的边
            return;
        if (node[x][y][1] != 0)//不重复搜索
            return;
        if (x == 0 || x == tileSize.width-1 || y == tileSize.height-1 || y == 0) {
            Flag[nodeflag_num] = 1;//能到达边界，不是闭合连通片
            return;
        }
        node[x][y][1] = nodeflag_num;
        //console.log(x + " " + y + " " + nodeflag_num)
        this.dfs(x + 1, y)
        this.dfs(x - 1,y)
        this.dfs(x, y - 1)
        this.dfs(x, y + 1)
        return;
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

        tileSize = this.tiledMap.getMapSize();;//地图大小存储到tileSize变量中
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

    update(dt) {
        this.timer += dt;
        if (this.timer > 0.25) {
            if (this.Rocker.dir.mag() < 0.5) {
            }
            else {
                v_x = this.Rocker.dir.x;
                v_y = this.Rocker.dir.y;
            }
            var newTile = cc.v2(this.playerTile.x, this.playerTile.y);
            if (Math.abs(v_x) > Math.abs(v_y)) {
                if (v_x > 0)
                    newTile.x += 1;
                else
                    newTile.x -= 1;
            }
            else {
                if (v_y > 0)
                    newTile.y -= 1;
                else
                    newTile.y += 1;
            }
            this.tryMoveToNewTile(newTile);
            this.timer = 0;
        }
    },
});
