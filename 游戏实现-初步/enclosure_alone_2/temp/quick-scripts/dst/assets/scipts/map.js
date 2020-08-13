
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scipts/map.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4036gdTpRPMZtl3m3wQG9N', 'map');
// scipts/map.js

"use strict";

var node = new Array(); //��ɫ����

var Flag = new Array(100); //��ͨƬ��Ŀ���Ϊ30������˴����������ֵ
//��i����ͨƬ�Ƿ�������ڵı�ǣ�Ϊ0����

var nodeflag_num; //��ͨƬ�����ļ���

var tileSize; //��ͼ��С

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log("onLoad");
    this.player_now = this.node.getChildByName('player_now'); //��ȡplayer_now�ڵ�
    //console.log(this.player_now)

    this.loadMap(); //���ص�ͼ
    //this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    //����¼�
    //��0.1sִ��һ��

    this.schedule(function () {
      // ����� this ָ�� component
      //console.log("after 0.5s");
      var newTile = this.getTilePos(this.player_now);
      this.tryMoveToNewTile(newTile);
    }, 0.1);
  },
  tryMoveToNewTile: function tryMoveToNewTile(newTile) {
    var mapSize = this.tiledMap.getMapSize(); //�����߽磬ֱ�ӷ���

    if (newTile.x < 0 || newTile.x >= mapSize.width) return;
    if (newTile.y < 0 || newTile.y >= mapSize.height) return; //console.log(this.ground.getTileGIDAt(newTile))
    //1������,2�Ƿ�����
    //this.ground.setTileGIDAt(1,newTile.x,newTile.y)

    if (this.ground.getTileGIDAt(newTile) == 1) //�����ǰλ�����������ص�������Ȧ��
      this.tryenclosure(); //����Ȧ��

    this.playerTile = newTile;
    this.updatePlayerPos();
  },
  tryenclosure: function tryenclosure() {
    console.log("start enclosure process"); //var Node_A = new Array();

    nodeflag_num = 1; //��ͨƬ�����ļ���

    for (var i = 0; i < tileSize.height; i++) {
      node[i] = new Array();

      for (var j = 0; j < tileSize.width; j++) {
        node[i][j] = new Array();

        for (var k = 0; k < 3; k++) {
          node[i][j][k] = new Array();
        }
      }
    } //�൱����Node_A[height][width][3]
    //Node_A[height][width][0]��ʶ�õ������黹�Ƿ�����
    //[1]��ʶ�õ�����һ����ͨƬ


    for (var i = 0; i < 100; i++) {
      Flag[i] = 0;
    } //��ȡ������ͼ����ɫ��Ϣ


    for (var i = 0; i < tileSize.height - 1; i++) {
      for (var j = 0; j < tileSize.width - 1; j++) {
        node[i][j][0] = 0;
        node[i][j][1] = 0;
        if (this.ground.getTileGIDAt(i, j) == 1) node[i][j][0] = 1;
      }
    } //������������������
    //�ֱ������������Ѱ�����������������


    for (var i = 0; i < tileSize.height; i++) {
      for (var j = 0; j < tileSize.width; j++) {
        //console.log(i+" "+j+"node"+node[i][j][0])
        if (node[i][j][0] == 0 && node[i][j][1] == 0) {
          //console.log(i+"@@@")
          //��δͿʵɫ�Ҳ�����֮ǰ�κ���ͨƬ���Ӵ˵���������ͨƬ
          this.dfs(i, j);
          nodeflag_num = nodeflag_num + 1;
        }
      }
    } //console.log("!")
    //�����б���ͨƬͿʵ


    for (var i = 0; i < tileSize.height; i++) {
      for (var j = 0; j < tileSize.width; j++) {
        //console.log(i + " " + j + " " + node[i][j][1] + " " + Flag[node[i][j][1]])
        if (node[i][j][1] != 0 && Flag[node[i][j][1]] == 0) {
          console.log("enclosure");
          this.ground.setTileGIDAt(1, i, j);
        }
      }
    }
  },
  //��������
  dfs: function dfs(x, y) {
    //console.log("!!!")
    if (node[x][y][0] == 1) //�����Լ��ı�
      return;
    if (node[x][y][1] != 0) //���ظ�����
      return;

    if (x == 0 || x == tileSize.width - 1 || y == tileSize.height - 1 || y == 0) {
      Flag[nodeflag_num] = 1; //�ܵ���߽磬���Ǳպ���ͨƬ

      return;
    }

    node[x][y][1] = nodeflag_num; //console.log(x + " " + y + " " + nodeflag_num)

    this.dfs(x + 1, y);
    this.dfs(x - 1, y);
    this.dfs(x, y - 1);
    this.dfs(x, y + 1);
    return;
  },

  /*
  //����¼�
  onMouseDown: function (event) {
      var click_pos = event.getLocation();
      var click_posTile = this.getTilePos(click_pos);
      var newTile = cc.v2(this.playerTile.x, this.playerTile.y);
      if (click_posTile.x > newTile.x)      { newTile.x += 1; }
      else if (click_posTile.x < newTile.x) { newTile.x -= 1; }
      else if (click_posTile.y > newTile.y) { newTile.y += 1; }
      else if (click_posTile.y < newTile.y) { newTile.y -= 1; }
      this.tryMoveToNewTile(newTile);
  },
  */
  //���ص�ͼ�ļ�ʱ����
  loadMap: function loadMap() {
    console.log("loadmap"); //��ʼ����ͼλ��

    this.node.setPosition(cc.visibleRect.bottomLeft); //��ͼ

    this.tiledMap = this.node.getComponent(cc.TiledMap); //player�����

    var player = this.tiledMap.getObjectGroup('player');
    var birth_point_1 = player.getObject('birth_point_1');
    console.log("1"); //��������

    var startPos = cc.v2(birth_point_1.x, birth_point_1.y);
    console.log("startPos" + startPos);
    this.ground = this.tiledMap.getLayer('ground'); //����Tile

    this.playerTile = this.getTilePos(startPos);
    console.log("start tile" + this.playerTile); //����playerλ��

    this.updatePlayerPos();
    tileSize = this.tiledMap.getMapSize();
    ; //��ͼ��С�洢��tileSize������
  },
  //����������ת��Ϊ��Ƭ����
  getTilePos: function getTilePos(posInPixel) {
    var mapSize = this.node.getContentSize();
    var tileSize = this.tiledMap.getTileSize();
    var x = Math.floor(posInPixel.x / tileSize.width);
    var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
    return cc.v2(x, y);
  },
  updatePlayerPos: function updatePlayerPos() {
    //var pos = this.barriers.getPositionAt(this.playerTile);
    var pos = this.ground.getPositionAt(this.playerTile);
    this.ground.setTileGIDAt(1, this.playerTile.x, this.playerTile.y); //����߹���·��
    //this.player_now.setPosition(pos);
    //console.log(this.player_now.x);
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NpcHRzXFxtYXAuanMiXSwibmFtZXMiOlsibm9kZSIsIkFycmF5IiwiRmxhZyIsIm5vZGVmbGFnX251bSIsInRpbGVTaXplIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwicGxheWVyX25vdyIsImdldENoaWxkQnlOYW1lIiwibG9hZE1hcCIsInNjaGVkdWxlIiwibmV3VGlsZSIsImdldFRpbGVQb3MiLCJ0cnlNb3ZlVG9OZXdUaWxlIiwibWFwU2l6ZSIsInRpbGVkTWFwIiwiZ2V0TWFwU2l6ZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJncm91bmQiLCJnZXRUaWxlR0lEQXQiLCJ0cnllbmNsb3N1cmUiLCJwbGF5ZXJUaWxlIiwidXBkYXRlUGxheWVyUG9zIiwiaSIsImoiLCJrIiwiZGZzIiwic2V0VGlsZUdJREF0Iiwic2V0UG9zaXRpb24iLCJ2aXNpYmxlUmVjdCIsImJvdHRvbUxlZnQiLCJnZXRDb21wb25lbnQiLCJUaWxlZE1hcCIsInBsYXllciIsImdldE9iamVjdEdyb3VwIiwiYmlydGhfcG9pbnRfMSIsImdldE9iamVjdCIsInN0YXJ0UG9zIiwidjIiLCJnZXRMYXllciIsInBvc0luUGl4ZWwiLCJnZXRDb250ZW50U2l6ZSIsImdldFRpbGVTaXplIiwiTWF0aCIsImZsb29yIiwicG9zIiwiZ2V0UG9zaXRpb25BdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUcsSUFBSUMsS0FBSixFQUFYLEVBQTBCOztBQUMxQixJQUFJQyxJQUFJLEdBQUcsSUFBSUQsS0FBSixDQUFVLEdBQVYsQ0FBWCxFQUF5QjtBQUNHOztBQUU1QixJQUFJRSxZQUFKLEVBQTRCOztBQUM1QixJQUFJQyxRQUFKLEVBQTRCOztBQUc1QkMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFB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v73vv73Jq++/ve+/ve+/ve+/vVxyXG52YXIgRmxhZyA9IG5ldyBBcnJheSgxMDApLy/vv73vv73NqMas77+977+9xL/vv73vv73vv73OqjMw77+977+977+977+977+977+9y7Tvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73WtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/vv73vv71p77+977+977+977+9zajGrO+/vce377+977+977+977+977+977+977+92rXEse+/vcej77+9zqow77+977+977+977+9XHJcblxyXG52YXIgbm9kZWZsYWdfbnVtICAgICAgICAgICAgLy/vv73vv73NqMas77+977+977+977+977+9xLzvv73vv73vv71cclxudmFyIHRpbGVTaXplICAgICAgICAgICAgICAgIC8v77+977+9zbzvv73vv73QoVxyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkxvYWRcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfbm93ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwbGF5ZXJfbm93Jyk7XHJcbiAgICAgICAgLy/vv73vv73IoXBsYXllcl9ub3fvv73ate+/vVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wbGF5ZXJfbm93KVxyXG4gICAgICAgIHRoaXMubG9hZE1hcCgpO1xyXG4gICAgICAgIC8v77+977+977+92LXvv73NvFxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XHJcbiAgICAgICAgLy/vv73vv73vv73vv73CvO+/vVxyXG5cclxuXHJcbiAgICAgICAgLy/vv73vv70wLjFz1rTvv73vv73Su++/ve+/vVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+977+9IHRoaXMg1rjvv73vv70gY29tcG9uZW50XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImFmdGVyIDAuNXNcIik7XHJcblxyXG4gICAgICAgIHZhciBuZXdUaWxlPXRoaXMuZ2V0VGlsZVBvcyh0aGlzLnBsYXllcl9ub3cpO1xyXG4gICAgICAgIHRoaXMudHJ5TW92ZVRvTmV3VGlsZShuZXdUaWxlKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdHJ5TW92ZVRvTmV3VGlsZTogZnVuY3Rpb24gKG5ld1RpbGUpIHtcclxuICAgICAgICB2YXIgbWFwU2l6ZSA9IHRoaXMudGlsZWRNYXAuZ2V0TWFwU2l6ZSgpO1xyXG5cclxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vd+956Os1rHvv73Tt++/ve+/ve+/vVxyXG4gICAgICAgIGlmIChuZXdUaWxlLnggPCAwIHx8IG5ld1RpbGUueCA+PSBtYXBTaXplLndpZHRoKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG5ld1RpbGUueSA8IDAgfHwgbmV3VGlsZS55ID49IG1hcFNpemUuaGVpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ncm91bmQuZ2V0VGlsZUdJREF0KG5ld1RpbGUpKVxyXG4gICAgICAgIC8vMe+/ve+/ve+/ve+/ve+/ve+/vSwy77+9x7fvv73vv73vv73vv73vv71cclxuICAgICAgICAvL3RoaXMuZ3JvdW5kLnNldFRpbGVHSURBdCgxLG5ld1RpbGUueCxuZXdUaWxlLnkpXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncm91bmQuZ2V0VGlsZUdJREF0KG5ld1RpbGUpID09IDEpXHJcbiAgICAgICAgLy/vv73vv73vv73vv73vv73HsM6777+977+977+977+977+977+977+977+977+977+977+92LXvv73vv73vv73vv73vv73vv73vv73Ipu+/ve+/vVxyXG4gICAgICAgICAgICB0aGlzLnRyeWVuY2xvc3VyZSgpOy8v77+977+977+977+9yKbvv73vv71cclxuICAgICAgICB0aGlzLnBsYXllclRpbGUgPSBuZXdUaWxlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyUG9zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRyeWVuY2xvc3VyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnQgZW5jbG9zdXJlIHByb2Nlc3NcIilcclxuICAgICAgICAvL3ZhciBOb2RlX0EgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBub2RlZmxhZ19udW0gPSAxOy8v77+977+9zajGrO+/ve+/ve+/ve+/ve+/vcS877+977+977+9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aWxlU2l6ZS5oZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICBub2RlW2ldID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGlsZVNpemUud2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbm9kZVtpXVtqXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCAzOyBrKyspXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtpXVtqXVtrXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS8v77+94LWx77+977+977+977+9Tm9kZV9BW2hlaWdodF1bd2lkdGhdWzNdXHJcbiAgICAgICAgLy9Ob2RlX0FbaGVpZ2h0XVt3aWR0aF1bMF3vv73vv73Ktu+/vcO177+977+977+977+977+977+96bu577+9x7fvv73vv73vv73vv73vv71cclxuICAgICAgICAvL1sxXe+/ve+/vcq277+9w7Xvv73vv73vv73vv73vv73Su++/ve+/ve+/ve+/vc2oxqxcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKylcclxuICAgICAgICAgICAgRmxhZ1tpXSA9IDA7XHJcbiAgICAgICAgLy/vv73vv73Ioe+/ve+/ve+/ve+/ve+/ve+/vc2877+977+977+977+9yavvv73vv73PolxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGlsZVNpemUuaGVpZ2h0LTE7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRpbGVTaXplLndpZHRoLTE7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbm9kZVtpXVtqXVswXSA9IDA7XHJcbiAgICAgICAgICAgICAgICBub2RlW2ldW2pdWzFdID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyb3VuZC5nZXRUaWxlR0lEQXQoaSxqKSA9PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbaV1bal1bMF0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIC8v77+91rHvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73RsO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGlsZVNpemUuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aWxlU2l6ZS53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkrXCIgXCIraitcIm5vZGVcIitub2RlW2ldW2pdWzBdKVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVbaV1bal1bMF0gPT0gMCAmJiBub2RlW2ldW2pdWzFdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkrXCJAQEBcIilcclxuICAgICAgICAgICAgICAgICAgICAvL++/ve+/vc60zb/Ktcmr77+90rLvv73vv73vv73vv73vv73Wrsew77+9zrrvv73vv73vv73NqMas77+977+977+907TLte+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vc2oxqxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRmcyhpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlZmxhZ19udW09bm9kZWZsYWdfbnVtKzE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIiFcIilcclxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vdCx77+977+977+9zajGrM2/yrVcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbGVTaXplLmhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGlsZVNpemUud2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpICsgXCIgXCIgKyBqICsgXCIgXCIgKyBub2RlW2ldW2pdWzFdICsgXCIgXCIgKyBGbGFnW25vZGVbaV1bal1bMV1dKVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVbaV1bal1bMV0gIT0gMCAmJiBGbGFnW25vZGVbaV1bal1bMV1dID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuY2xvc3VyZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kLnNldFRpbGVHSURBdCgxLCBpLCBqKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgZGZzOmZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiISEhXCIpXHJcbiAgICAgICAgaWYgKG5vZGVbeF1beV1bMF0gPT0gMSkvL++/ve+/ve+/ve+/ve+/vdS877+977+9xLHvv71cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmIChub2RlW3hdW3ldWzFdICE9IDApLy/vv73vv73vv73YuO+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHggPT0gMCB8fCB4ID09IHRpbGVTaXplLndpZHRoLTEgfHwgeSA9PSB0aWxlU2l6ZS5oZWlnaHQtMSB8fCB5ID09IDApIHtcclxuICAgICAgICAgICAgRmxhZ1tub2RlZmxhZ19udW1dID0gMTsvL++/vdy177+977+977+9373no6zvv73vv73vv73HsdW677+977+977+9zajGrFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGVbeF1beV1bMV0gPSBub2RlZmxhZ19udW07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyBub2RlZmxhZ19udW0pXHJcbiAgICAgICAgdGhpcy5kZnMoeCArIDEsIHkpXHJcbiAgICAgICAgdGhpcy5kZnMoeCAtIDEseSlcclxuICAgICAgICB0aGlzLmRmcyh4LCB5IC0gMSlcclxuICAgICAgICB0aGlzLmRmcyh4LCB5ICsgMSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgLy/vv73vv73vv73vv73CvO+/vVxyXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBjbGlja19wb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHZhciBjbGlja19wb3NUaWxlID0gdGhpcy5nZXRUaWxlUG9zKGNsaWNrX3Bvcyk7XHJcbiAgICAgICAgdmFyIG5ld1RpbGUgPSBjYy52Mih0aGlzLnBsYXllclRpbGUueCwgdGhpcy5wbGF5ZXJUaWxlLnkpO1xyXG4gICAgICAgIGlmIChjbGlja19wb3NUaWxlLnggPiBuZXdUaWxlLngpICAgICAgeyBuZXdUaWxlLnggKz0gMTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNsaWNrX3Bvc1RpbGUueCA8IG5ld1RpbGUueCkgeyBuZXdUaWxlLnggLT0gMTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNsaWNrX3Bvc1RpbGUueSA+IG5ld1RpbGUueSkgeyBuZXdUaWxlLnkgKz0gMTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNsaWNrX3Bvc1RpbGUueSA8IG5ld1RpbGUueSkgeyBuZXdUaWxlLnkgLT0gMTsgfVxyXG4gICAgICAgIHRoaXMudHJ5TW92ZVRvTmV3VGlsZShuZXdUaWxlKTtcclxuICAgIH0sXHJcbiAgICAqL1xyXG5cclxuICAgIC8v77+977+977+92LXvv73NvO+/vcS877+9yrHvv73vv73vv73vv71cclxuICAgIGxvYWRNYXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRtYXBcIik7XHJcbiAgICAgICAgLy/vv73vv73KvO+/ve+/ve+/ve+/vc28zrvvv73vv71cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudmlzaWJsZVJlY3QuYm90dG9tTGVmdCk7XHJcblxyXG4gICAgICAgIC8v77+977+9zbxcclxuICAgICAgICB0aGlzLnRpbGVkTWFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZE1hcCk7XHJcblxyXG4gICAgICAgIC8vcGxheWVy77+977+977+977+977+9XHJcbiAgICAgICAgdmFyIHBsYXllciA9IHRoaXMudGlsZWRNYXAuZ2V0T2JqZWN0R3JvdXAoJ3BsYXllcicpO1xyXG5cclxuICAgICAgICB2YXIgYmlydGhfcG9pbnRfMSA9IHBsYXllci5nZXRPYmplY3QoJ2JpcnRoX3BvaW50XzEnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxXCIpO1xyXG4gICAgICAgIC8v77+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gY2MudjIoYmlydGhfcG9pbnRfMS54LCBiaXJ0aF9wb2ludF8xLnkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRQb3NcIitzdGFydFBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdW5kID0gdGhpcy50aWxlZE1hcC5nZXRMYXllcignZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIC8v77+977+977+977+9VGlsZVxyXG4gICAgICAgIHRoaXMucGxheWVyVGlsZSA9IHRoaXMuZ2V0VGlsZVBvcyhzdGFydFBvcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCB0aWxlXCIrdGhpcy5wbGF5ZXJUaWxlKVxyXG4gICAgICAgIC8v77+977+977+977+9cGxheWVyzrvvv73vv71cclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclBvcygpO1xyXG5cclxuICAgICAgICB0aWxlU2l6ZSA9IHRoaXMudGlsZWRNYXAuZ2V0TWFwU2l6ZSgpOzsvL++/ve+/vc2877+977+90KHvv73mtKLvv73vv710aWxlU2l6Ze+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy/vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73Xqu+/ve+/vc6q77+977+9xqzvv73vv73vv73vv71cclxuICAgIGdldFRpbGVQb3M6IGZ1bmN0aW9uIChwb3NJblBpeGVsKSB7XHJcbiAgICAgICAgdmFyIG1hcFNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICB2YXIgdGlsZVNpemUgPSB0aGlzLnRpbGVkTWFwLmdldFRpbGVTaXplKCk7XHJcbiAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKHBvc0luUGl4ZWwueCAvIHRpbGVTaXplLndpZHRoKTtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoKG1hcFNpemUuaGVpZ2h0IC0gcG9zSW5QaXhlbC55KSAvIHRpbGVTaXplLmhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVQbGF5ZXJQb3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3ZhciBwb3MgPSB0aGlzLmJhcnJpZXJzLmdldFBvc2l0aW9uQXQodGhpcy5wbGF5ZXJUaWxlKTtcclxuICAgICAgICB2YXIgcG9zID0gdGhpcy5ncm91bmQuZ2V0UG9zaXRpb25BdCh0aGlzLnBsYXllclRpbGUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kLnNldFRpbGVHSURBdCgxLCB0aGlzLnBsYXllclRpbGUueCwgdGhpcy5wbGF5ZXJUaWxlLnkpXHJcbiAgICAgICAgLy/vv73vv73vv73vv73fue+/ve+/ve+/vcK377+977+9XHJcblxyXG4gICAgICAgIC8vdGhpcy5wbGF5ZXJfbm93LnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBsYXllcl9ub3cueCk7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=