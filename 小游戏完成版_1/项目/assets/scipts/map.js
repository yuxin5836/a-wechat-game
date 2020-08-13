var node = new Array()    //��ɫ����
var Flag = new Array(100)//��ͨƬ��Ŀ���Ϊ30������˴����������ֵ
                            //��i����ͨƬ�Ƿ�������ڵı�ǣ�Ϊ0���� 

var nodeflag_num            //��ͨƬ�����ļ���
var tileSize                //��ͼ��С

var v_x = 0;
var v_y = 0;

cc.Class({
    extends: cc.Component,
    properties: {
        Rocker:{
            type:require("Rocker"),
            default:null,
        }, 
        speed:100,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        console.log("onLoad");
        this.player_now = this.node.getChildByName('player_now');
        //��ȡplayer_now�ڵ�
        //console.log(this.player_now)
        this.loadMap();
        //���ص�ͼ
        this.timer = 0;
        v_x = 1;
        v_y = 0;
    },


    tryMoveToNewTile: function (newTile) {
        var mapSize = this.tiledMap.getMapSize();

        //�����߽磬ֱ�ӷ���
        if (newTile.x < 0 || newTile.x >= mapSize.width) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height) return;

        //console.log(this.ground.getTileGIDAt(newTile))
        //1������,2�Ƿ�����
        //this.ground.setTileGIDAt(1,newTile.x,newTile.y)


        if (this.ground.getTileGIDAt(newTile) == 1)
        //�����ǰλ�����������ص�������Ȧ��
            this.tryenclosure();//����Ȧ��
        this.playerTile = newTile;
        this.updatePlayerPos();
    },

    tryenclosure: function () {
        //console.log("try to enclosure")
        //var Node_A = new Array();
        nodeflag_num = 1;//��ͨƬ�����ļ��� 
        for (var i = 0; i < tileSize.height; i++) {
            node[i] = new Array();
            for (var j = 0; j < tileSize.width; j++) {
                node[i][j] = new Array();
                for (var k = 0; k < 3; k++)
                    node[i][j][k] = new Array();
            }
        }//�൱����Node_A[height][width][3]
        //Node_A[height][width][0]��ʶ�õ������黹�Ƿ�����
        //[1]��ʶ�õ�����һ����ͨƬ

        for (var i = 0; i < 100; i++)
            Flag[i] = 0;
        //��ȡ������ͼ����ɫ��Ϣ
        for (var i = 0; i < tileSize.height-1; i++) {
            for (var j = 0; j < tileSize.width-1; j++) {
                node[i][j][0] = 0;
                node[i][j][1] = 0;
                if (this.ground.getTileGIDAt(i,j) == 1)
                    node[i][j][0] = 1;
            }
        }

        //������������������
        //�ֱ������������Ѱ�����������������
        for (var i = 0; i < tileSize.height; i++) {
            for (var j = 0; j < tileSize.width; j++) {
                //console.log(i+" "+j+"node"+node[i][j][0])
                if (node[i][j][0] == 0 && node[i][j][1] == 0) {
                    //console.log(i+"@@@")
                    //��δͿʵɫ�Ҳ�����֮ǰ�κ���ͨƬ���Ӵ˵���������ͨƬ  
                    this.dfs(i, j);
                    nodeflag_num=nodeflag_num+1;
                }
            }
        }
        //console.log("!")
        //�����б���ͨƬͿʵ 
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

    //��������
    dfs:function(x, y) {
        //console.log("!!!")
        if (node[x][y][0] == 1)//�����Լ��ı�
            return;
        if (node[x][y][1] != 0)//���ظ�����
            return;
        if (x == 0 || x == tileSize.width-1 || y == tileSize.height-1 || y == 0) {
            Flag[nodeflag_num] = 1;//�ܵ���߽磬���Ǳպ���ͨƬ
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


    //���ص�ͼ�ļ�ʱ����
    loadMap: function () {
        console.log("loadmap");
        //��ʼ����ͼλ��
        this.node.setPosition(cc.visibleRect.bottomLeft);

        //��ͼ
        this.tiledMap = this.node.getComponent(cc.TiledMap);

        //player�����
        var player = this.tiledMap.getObjectGroup('player');

        var birth_point_1 = player.getObject('birth_point_1');

        console.log("1");
        //��������
        var startPos = cc.v2(birth_point_1.x, birth_point_1.y);
        console.log("startPos"+startPos);

        this.ground = this.tiledMap.getLayer('ground');

        //����Tile
        this.playerTile = this.getTilePos(startPos);
        console.log("start tile"+this.playerTile)
        //����playerλ��
        this.updatePlayerPos();

        tileSize = this.tiledMap.getMapSize();;//��ͼ��С�洢��tileSize������
    },


    //����������ת��Ϊ��Ƭ����
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
        //����߹���·��
        this.player_now.setPosition(pos);
        //console.log(this.player_now.x);
    },

    update (dt) {
        this.timer += dt;
        if (this.timer > 0.25)
        {
            if(this.Rocker.dir.mag()<0.5)
            {
            }
            else
            {
                v_x = this.Rocker.dir.x;
                v_y = this.Rocker.dir.y;
            }
            var newTile = cc.v2(this.playerTile.x, this.playerTile.y);
            if (Math.abs(v_x) > Math.abs(v_y))
            {
                if(v_x > 0)
                newTile.x += 1;
                else
                newTile.x -= 1;
            }
            else
            {
                if(v_y > 0)
                newTile.y -= 1;
                else
                newTile.y += 1;
            }
            this.tryMoveToNewTile(newTile);
            this.timer = 0;
        }
    },
});
