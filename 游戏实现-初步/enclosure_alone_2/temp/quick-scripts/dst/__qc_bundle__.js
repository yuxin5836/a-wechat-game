
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scipts/joystick');
require('./assets/scipts/joystickbg');
require('./assets/scipts/joystickcommon');
require('./assets/scipts/map');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scipts/joystickcommon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85abaJUSntFNad/DjSq0fF/', 'joystickcommon');
// scipts/joystickcommon.js

"use strict";

module.exports = {
  TouchType: cc.Enum({
    DEFAULT: 0,
    FOLLOW: 1
  }),
  DirectionType: cc.Enum({
    FOUR: 4,
    EIGHT: 8,
    ALL: 0
  })
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NpcHRzXFxqb3lzdGlja2NvbW1vbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiVG91Y2hUeXBlIiwiY2MiLCJFbnVtIiwiREVGQVVMVCIsIkZPTExPVyIsIkRpcmVjdGlvblR5cGUiLCJGT1VSIiwiRUlHSFQiLCJBTEwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxTQUFTLEVBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2hCQyxJQUFBQSxPQUFPLEVBQUUsQ0FETztBQUVoQkMsSUFBQUEsTUFBTSxFQUFFO0FBRlEsR0FBUixDQURDO0FBTWJDLEVBQUFBLGFBQWEsRUFBR0osRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDcEJJLElBQUFBLElBQUksRUFBRSxDQURjO0FBRXBCQyxJQUFBQSxLQUFLLEVBQUUsQ0FGYTtBQUdwQkMsSUFBQUEsR0FBRyxFQUFFO0FBSGUsR0FBUjtBQU5ILENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFRvdWNoVHlwZSA6IGNjLkVudW0oe1xyXG4gICAgICAgIERFRkFVTFQ6IDAsXHJcbiAgICAgICAgRk9MTE9XOiAxLFxyXG4gICAgfSksXHJcblxyXG4gICAgRGlyZWN0aW9uVHlwZSA6IGNjLkVudW0oe1xyXG4gICAgICAgIEZPVVI6IDQsXHJcbiAgICAgICAgRUlHSFQ6IDgsXHJcbiAgICAgICAgQUxMOiAwLFxyXG4gICAgfSksXHJcbn07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scipts/joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea4d7Y32sNB6oW3hROgxdBy', 'joystick');
// scipts/joystick.js

"use strict";

var Common = require('joystickcommon');

var JoystickBG = require('joystickbg');

cc.Class({
  "extends": cc.Component,
  properties: {
    dot: {
      "default": null,
      type: cc.Node,
      displayName: 'dot'
    },
    ring: {
      "default": null,
      type: JoystickBG,
      displayName: 'ring'
    },
    stickX: {
      "default": 0,
      displayName: 'dotx'
    },
    stickY: {
      "default": 0,
      displayName: 'doty'
    },
    touchType: {
      "default": Common.TouchType.DEFAULT,
      type: Common.TouchType,
      displayName: 'touchtype'
    },
    directionType: {
      "default": Common.DirectionType.ALL,
      type: Common.DirectionType,
      displayName: 'directionType'
    },
    sprite: {
      "default": null,
      type: cc.Node,
      displayName: 'control_player' //���ݵ�Ŀ��

    },
    _stickPos: {
      "default": null,
      type: cc.Node,
      displayName: 'ҡ�˵�ǰλ��'
    },
    _touchLocation: {
      "default": null,
      type: cc.Node,
      displayName: 'ҡ�˵�ǰλ��'
    }
  },
  onLoad: function onLoad() {
    this._createStickSprite(); //����������ΪFOLLOW���ڴ˶�ԲȦ�Ĵ�������


    if (this.touchType == Common.TouchType.FOLLOW) {
      this._initTouchEvent();
    }
  },
  _createStickSprite: function _createStickSprite() {
    //����ҡ�˵�λ��
    this.ring.node.setPosition(this.stickX, this.stickY);
    this.dot.setPosition(this.stickX, this.stickY);
  },
  _initTouchEvent: function _initTouchEvent() {
    var self = this;
    self.node.on(cc.Node.EventType.TOUCH_START, self._touchStartEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self); // ������ԲȦ���뿪����ԲȦ���뿪��ҡ�˹�λ��player�ٶ�Ϊ0

    self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
  },
  _touchStartEvent: function _touchStartEvent(event) {
    // ��¼�������������꣬��touch moveʹ��
    this._touchLocation = event.getLocation();
    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation()); // ����ҡ�˵�λ��

    this.ring.node.setPosition(touchPos);
    this.dot.setPosition(touchPos); // ��¼ҡ��λ�ã���touch moveʹ��

    this._stickPos = touchPos;
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    // ���touch startλ�ú�touch move��ͬ����ֹ�ƶ�
    if (this._touchLocation.x == event.getLocation().x && this._touchLocation.y == event.getLocation().y) {
      return false;
    } // ��ԲȦΪê���ȡ��������


    var touchPos = this.ring.node.convertToNodeSpaceAR(event.getLocation());

    var distance = this.ring._getDistance(touchPos, cc.Vec2(0, 0));

    var radius = this.ring.node.width / 2; // ����ҡ�˵�postion���Ը��ڵ�Ϊê�㣬���Զ�λҪ����touch startʱ��λ��

    var posX = this._stickPos.x + touchPos.x;
    var posY = this._stickPos.y + touchPos.y;

    if (radius > distance) {
      this.dot.setPosition(cc.Vec2(posX, posY));
    } else {
      //�ظ���Զ������Ȧ�ڣ�����Ȧ�ڸ��津�����½Ƕ�
      var x = this._stickPos.x + Math.cos(this.ring._getRadian(cc.Vec2(posX, posY))) * radius;
      var y = this._stickPos.y + Math.sin(this.ring._getRadian(cc.Vec2(posX, posY))) * radius;
      this.dot.setPosition(cc.Vec2(x, y));
    } //���½Ƕ�


    this.ring._getAngle(cc.Vec2(posX, posY)); //����ʵ���ٶ�


    this.ring._setSpeed(cc.Vec2(posX, posY));
  },
  _touchEndEvent: function _touchEndEvent() {
    this.dot.setPosition(this.ring.node.getPosition());
    this.ring._speed = 0;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NpcHRzXFxqb3lzdGljay5qcyJdLCJuYW1lcyI6WyJDb21tb24iLCJyZXF1aXJlIiwiSm95c3RpY2tCRyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZG90IiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInJpbmciLCJzdGlja1giLCJzdGlja1kiLCJ0b3VjaFR5cGUiLCJUb3VjaFR5cGUiLCJERUZBVUxUIiwiZGlyZWN0aW9uVHlwZSIsIkRpcmVjdGlvblR5cGUiLCJBTEwiLCJzcHJpdGUiLCJfc3RpY2tQb3MiLCJfdG91Y2hMb2NhdGlvbiIsIm9uTG9hZCIsIl9jcmVhdGVTdGlja1Nwcml0ZSIsIkZPTExPVyIsIl9pbml0VG91Y2hFdmVudCIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInNlbGYiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnRFdmVudCIsIlRPVUNIX01PVkUiLCJfdG91Y2hNb3ZlRXZlbnQiLCJUT1VDSF9FTkQiLCJfdG91Y2hFbmRFdmVudCIsIlRPVUNIX0NBTkNFTCIsImV2ZW50IiwiZ2V0TG9jYXRpb24iLCJ0b3VjaFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInkiLCJkaXN0YW5jZSIsIl9nZXREaXN0YW5jZSIsIlZlYzIiLCJyYWRpdXMiLCJ3aWR0aCIsInBvc1giLCJwb3NZIiwiTWF0aCIsImNvcyIsIl9nZXRSYWRpYW4iLCJzaW4iLCJfZ2V0QW5nbGUiLCJfc2V0U3BlZWQiLCJnZXRQb3NpdGlvbiIsIl9zcGVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUFwQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxF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QVYsQ0FBb0J0RCxFQUFFLENBQUM0QyxJQUFILENBQVFHLElBQVIsRUFBYUMsSUFBYixDQUFwQjtBQUNILEdBOUhJO0FBZ0lMZCxFQUFBQSxjQUFjLEVBQUUsMEJBQVU7QUFDdEIsU0FBSzlCLEdBQUwsQ0FBU3FCLFdBQVQsQ0FBcUIsS0FBS2pCLElBQUwsQ0FBVWdCLElBQVYsQ0FBZStCLFdBQWYsRUFBckI7QUFDQSxTQUFLL0MsSUFBTCxDQUFVZ0QsTUFBVixHQUFtQixDQUFuQjtBQUNIO0FBbklJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21tb24gPSByZXF1aXJlKCdqb3lzdGlja2NvbW1vbicpO1xyXG52YXIgSm95c3RpY2tCRyA9IHJlcXVpcmUoJ2pveXN0aWNrYmcnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZG90OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnZG90JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogSm95c3RpY2tCRyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdyaW5nJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0aWNrWDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2RvdHgnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0aWNrWToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2RvdHknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hUeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IENvbW1vbi5Ub3VjaFR5cGUuREVGQVVMVCxcclxuICAgICAgICAgICAgdHlwZTogQ29tbW9uLlRvdWNoVHlwZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICd0b3VjaHR5cGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyZWN0aW9uVHlwZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBDb21tb24uRGlyZWN0aW9uVHlwZS5BTEwsXHJcbiAgICAgICAgICAgIHR5cGU6IENvbW1vbi5EaXJlY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2RpcmVjdGlvblR5cGUnLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ2NvbnRyb2xfcGxheWVyJyxcclxuICAgICAgICAgICAgLy/vv73vv73vv73dte+/vcS/77+977+9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9zdGlja1Bvczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ9Kh77+9y7Xvv73HsM6777+977+9JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfdG91Y2hMb2NhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ9Kh77+9y7Xvv73HsM6777+977+9JyxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVTdGlja1Nwcml0ZSgpO1xyXG4gICAgICAgIC8v77+977+977+977+977+977+977+977+977+977+9zqpGT0xMT1fvv73vv73vv73atMu277+91LLIpu+/vcS077+977+977+977+977+977+977+9XHJcbiAgICAgICAgaWYodGhpcy50b3VjaFR5cGUgPT0gQ29tbW9uLlRvdWNoVHlwZS5GT0xMT1cpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0VG91Y2hFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgX2NyZWF0ZVN0aWNrU3ByaXRlOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy/vv73vv73vv73vv73Soe+/vcu177+9zrvvv73vv71cclxuICAgICAgICB0aGlzLnJpbmcubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0aWNrWCwgdGhpcy5zdGlja1kpO1xyXG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRoaXMuc3RpY2tYLCB0aGlzLnN0aWNrWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9pbml0VG91Y2hFdmVudDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBzZWxmLl90b3VjaFN0YXJ0RXZlbnQsIHNlbGYpO1xyXG5cclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgc2VsZi5fdG91Y2hNb3ZlRXZlbnQsIHNlbGYpO1xyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73Ussim77+977+977+967+q77+977+977+977+91LLIpu+/ve+/ve+/veu/qu+/ve+/vdKh77+9y7nvv73Ou++/ve+/vXBsYXllcu+/vdm277+9zqowXHJcbiAgICAgICAgc2VsZi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgc2VsZi5fdG91Y2hFbmRFdmVudCxzZWxmKTtcclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBzZWxmLl90b3VjaEVuZEV2ZW50LHNlbGYpO1xyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIF90b3VjaFN0YXJ0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLy8g77+977+9wrzvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73qo6zvv73vv710b3VjaCBtb3Zlyrnvv73vv71cclxuICAgICAgICB0aGlzLl90b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8g77+977+977+977+90qHvv73Lte+/vc6777+977+9XHJcbiAgICAgICAgdGhpcy5yaW5nLm5vZGUuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuICAgICAgICAvLyDvv73vv73CvNKh77+977+9zrvvv73Do++/ve+/ve+/vXRvdWNoIG1vdmXKue+/ve+/vVxyXG4gICAgICAgIHRoaXMuX3N0aWNrUG9zID0gdG91Y2hQb3M7XHJcbiAgICB9LFxyXG5cclxuICAgIF90b3VjaE1vdmVFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8g77+977+977+9dG91Y2ggc3RhcnTOu++/vcO677+9dG91Y2ggbW92Ze+/ve+/vc2s77+977+977+977+91rnvv73Gtu+/vVxyXG4gICAgICAgIGlmICh0aGlzLl90b3VjaExvY2F0aW9uLnggPT0gZXZlbnQuZ2V0TG9jYXRpb24oKS54ICYmIHRoaXMuX3RvdWNoTG9jYXRpb24ueSA9PSBldmVudC5nZXRMb2NhdGlvbigpLnkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIO+/ve+/vdSyyKbOqsOq77+977+977+9yKHvv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICB2YXIgdG91Y2hQb3MgPSB0aGlzLnJpbmcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLnJpbmcuX2dldERpc3RhbmNlKHRvdWNoUG9zLGNjLlZlYzIoMCwwKSk7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXMucmluZy5ub2RlLndpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+90qHvv73Lte+/vXBvc3Rpb27vv73vv73vv73UuO+/ve+/vdq177+9zqrDqu+/veOjrO+/ve+/ve+/vdS277+9zrvSqu+/ve+/ve+/ve+/vXRvdWNoIHN0YXJ0yrHvv73vv73Ou++/ve+/vVxyXG4gICAgICAgIHZhciBwb3NYID0gdGhpcy5fc3RpY2tQb3MueCArIHRvdWNoUG9zLng7XHJcbiAgICAgICAgdmFyIHBvc1kgPSB0aGlzLl9zdGlja1Bvcy55ICsgdG91Y2hQb3MueTtcclxuICAgICAgICBpZihyYWRpdXMgPiBkaXN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLlZlYzIocG9zWCwgcG9zWSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL++/vdi477+977+977+91Lbvv73vv73vv73vv73vv73vv73Ipu+/vdqj77+977+977+977+977+9yKbvv73auO+/ve+/vea0pe+/ve+/ve+/ve+/ve+/vcK9x7bvv71cclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9zdGlja1Bvcy54ICsgTWF0aC5jb3ModGhpcy5yaW5nLl9nZXRSYWRpYW4oY2MuVmVjMihwb3NYLHBvc1kpKSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5fc3RpY2tQb3MueSArIE1hdGguc2luKHRoaXMucmluZy5fZ2V0UmFkaWFuKGNjLlZlYzIocG9zWCxwb3NZKSkpICogcmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy5WZWMyKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/vv73vv73vv73Cvce277+9XHJcbiAgICAgICAgdGhpcy5yaW5nLl9nZXRBbmdsZShjYy5WZWMyKHBvc1gscG9zWSkpO1xyXG4gICAgICAgIC8v77+977+977+977+9yrXvv73vv73vv73Ztu+/vVxyXG4gICAgICAgIHRoaXMucmluZy5fc2V0U3BlZWQoY2MuVmVjMihwb3NYLHBvc1kpKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3RvdWNoRW5kRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odGhpcy5yaW5nLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5yaW5nLl9zcGVlZCA9IDA7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scipts/joystickbg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '406ea/mY8hC2q023CvluCc2', 'joystickbg');
// scipts/joystickbg.js

"use strict";

var Common = require('joystickcommon');

cc.Class({
  "extends": cc.Component,
  properties: {
    dot: {
      "default": null,
      type: cc.Node,
      displayName: 'dot'
    },
    _joyCom: {
      "default": null,
      displayName: 'joy Node'
    },
    _playerNode: {
      "default": null,
      displayName: '��������Ŀ��Node'
    },
    _angle: {
      "default": null,
      displayName: '��ǰ�����ĽǶ�'
    },
    _radian: {
      "default": null,
      displayName: '����'
    },
    _speed: 0,
    //ʵ���ٶ�
    _speed1: 1,
    //һ���ٶ�
    _speed2: 2,
    //�����ٶ�
    _opacity: 0 //͸����

  },
  onLoad: function onLoad() {
    // joy�µ�Game���
    this._joyCom = this.node.parent.getComponent('joystick'); // game����µ�player�ڵ�

    this._playerNode = this._joyCom.sprite;

    if (this._joyCom.touchType == Common.TouchType.DEFAULT) {
      //��ԲȦ�Ĵ�������
      this._initTouchEvent();
    }
  },
  //��ԲȦ�Ĵ�������
  _initTouchEvent: function _initTouchEvent() {
    var self = this;
    self.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, self); // ������ԲȦ���뿪����ԲȦ���뿪��ҡ�˹�λ��player�ٶ�Ϊ0

    self.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, self);
  },
  //�����ƶ�Ŀ��
  update: function update(dt) {
    switch (this._joyCom.directionType) {
      case Common.DirectionType.ALL:
        this._allDirectionsMove();

        break;

      default:
        break;
    }
  },
  //ȫ�����ƶ�
  _allDirectionsMove: function _allDirectionsMove() {
    this._playerNode.x += Math.cos(this._angle * (Math.PI / 180)) * this._speed;
    this._playerNode.y += Math.sin(this._angle * (Math.PI / 180)) * this._speed;
  },
  //���������ľ��벢����
  _getDistance: function _getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
  },

  /*�Ƕ�/����ת��
  �Ƕ� = ���� * 180 / Math.PI
  ���� = �Ƕ� * Math.PI / 180*/
  //���㻡�Ȳ�����
  _getRadian: function _getRadian(point) {
    this._radian = Math.PI / 180 * this._getAngle(point);
    return this._radian;
  },
  //����ǶȲ�����
  _getAngle: function _getAngle(point) {
    var pos = this.node.getPosition();
    this._angle = Math.atan2(point.y - pos.y, point.x - pos.x) * (180 / Math.PI);
    return this._angle;
  },
  //����ʵ���ٶ�
  _setSpeed: function _setSpeed(point) {
    //�������ң�ظ����ĵľ���
    var distance = this._getDistance(point, this.node.getPosition()); //����뾶


    if (distance < this._radius) {
      this._speed = this._speed1;
    } else {
      this._speed = this._speed2;
    }
  },
  _touchStartEvent: function _touchStartEvent(event) {
    // ��ȡ����λ�õ���������ת����ԲȦ��������꣨��ԲȦ��ê��Ϊ��׼��
    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation()); //��������ԲȦ���ĵľ���

    var distance = this._getDistance(touchPos, cc.Vec2(0, 0)); //ԲȦ�뾶


    var radius = this.node.width / 2; // ��¼ҡ��λ�ã���touch moveʹ��

    this._stickPos = touchPos;
    var posX = this.node.getPosition().x + touchPos.x;
    var posY = this.node.getPosition().y + touchPos.y; //��ָ��ԲȦ�ڴ���,�ظ˸��津����

    if (radius > distance) {
      this.dot.setPosition(cc.Vec2(posX, posY));
      return true;
    }

    return false;
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());

    var distance = this._getDistance(touchPos, cc.Vec2(0, 0));

    var radius = this.node.width / 2; // ����ҡ�˵�postion���Ը��ڵ�Ϊê�㣬���Զ�λҪ����ring��dot��ǰ��λ��(stickX,stickY)

    var posX = this.node.getPosition().x + touchPos.x;
    var posY = this.node.getPosition().y + touchPos.y;

    if (radius > distance) {
      this.dot.setPosition(cc.Vec2(posX, posY));
    } else {
      //�ظ���Զ������Ȧ�ڣ�����Ȧ�ڸ��津�����½Ƕ�
      var x = this.node.getPosition().x + Math.cos(this._getRadian(cc.Vec2(posX, posY))) * radius;
      var y = this.node.getPosition().y + Math.sin(this._getRadian(cc.Vec2(posX, posY))) * radius;
      this.dot.setPosition(cc.Vec2(x, y));
    } //���½Ƕ�


    this._getAngle(cc.Vec2(posX, posY)); //����ʵ���ٶ�


    this._setSpeed(cc.Vec2(posX, posY));
  },
  _touchEndEvent: function _touchEndEvent() {
    this.dot.setPosition(this.node.getPosition());
    this._speed = 0;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NpcHRzXFxqb3lzdGlja2JnLmpzIl0sIm5hbWVzIjpbIkNvbW1vbiIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRvdCIsInR5cGUiLCJOb2RlIiwiZGlzcGxheU5hbWUiLCJfam95Q29tIiwiX3BsYXllck5vZGUiLCJfYW5nbGUiLCJfcmFkaWFuIiwiX3NwZWVkIiwiX3NwZWVkMSIsIl9zcGVlZDIiLCJfb3BhY2l0eSIsIm9uTG9hZCIsIm5vZGUiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJzcHJpdGUiLCJ0b3VjaFR5cGUiLCJUb3VjaFR5cGUiLCJERUZBVUxUIiwiX2luaXRUb3VjaEV2ZW50Iiwic2VsZiIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydEV2ZW50IiwiVE9VQ0hfTU9WRSIsIl90b3VjaE1vdmVFdmVudCIsIlRPVUNIX0VORCIsIl90b3VjaEVuZEV2ZW50IiwiVE9VQ0hfQ0FOQ0VMIiwidXBkYXRlIiwiZHQiLCJkaXJlY3Rpb25UeXBlIiwiRGlyZWN0aW9uVHlwZSIsIkFMTCIsIl9hbGxEaXJlY3Rpb25zTW92ZSIsIngiLCJNYXRoIiwiY29zIiwiUEkiLCJ5Iiwic2luIiwiX2dldERpc3RhbmNlIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwiX2dldFJhZGlhbiIsInBvaW50IiwiX2dldEFuZ2xlIiwicG9zIiwiZ2V0UG9zaXRpb24iLCJhdGFuMiIsIl9zZXRTcGVlZCIsImRpc3RhbmNlIiwiX3JhZGl1cyIsImV2ZW50IiwidG91Y2hQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwiVmVjMiIsInJhZGl1cyIsIndpZHRoIiwiX3N0aWNrUG9zIiwicG9zWCIsInBvc1kiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxnQkFB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SSxHQUFMLENBQVMsS0FBS00sVUFBTCxDQUFnQnBELEVBQUUsQ0FBQ2lFLElBQUgsQ0FBUUksSUFBUixFQUFhQyxJQUFiLENBQWhCLENBQVQsSUFBZ0RKLE1BQXBGO0FBQ0EsV0FBSzlELEdBQUwsQ0FBU21FLFdBQVQsQ0FBcUJ2RSxFQUFFLENBQUNpRSxJQUFILENBQVF4QixDQUFSLEVBQVdJLENBQVgsQ0FBckI7QUFDSCxLQWpCMkIsQ0FrQjVCOzs7QUFDQSxTQUFLUyxTQUFMLENBQWV0RCxFQUFFLENBQUNpRSxJQUFILENBQVFJLElBQVIsRUFBYUMsSUFBYixDQUFmLEVBbkI0QixDQW9CNUI7OztBQUNBLFNBQUtaLFNBQUwsQ0FBZTFELEVBQUUsQ0FBQ2lFLElBQUgsQ0FBUUksSUFBUixFQUFhQyxJQUFiLENBQWY7QUFFSCxHQS9LSTtBQWlMTHJDLEVBQUFBLGNBQWMsRUFBRSwwQkFBVTtBQUN0QixTQUFLN0IsR0FBTCxDQUFTbUUsV0FBVCxDQUFxQixLQUFLdEQsSUFBTCxDQUFVdUMsV0FBVixFQUFyQjtBQUNBLFNBQUs1QyxNQUFMLEdBQWMsQ0FBZDtBQUNIO0FBcExJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21tb24gPSByZXF1aXJlKCdqb3lzdGlja2NvbW1vbicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkb3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdkb3QnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9qb3lDb206IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdqb3kgTm9kZScsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3BsYXllck5vZGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfvv73vv73vv73vv73vv73vv73vv73vv73Ev++/ve+/vU5vZGUnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9hbmdsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ++/ve+/vcew77+977+977+977+977+9xL3Htu+/vScsXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9yYWRpYW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfvv73vv73vv73vv70nLFxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBfc3BlZWQ6IDAsICAgICAgICAgIC8vyrXvv73vv73vv73Ztu+/vVxyXG4gICAgICAgIF9zcGVlZDE6IDEsICAgICAgICAgLy/Su++/ve+/ve+/vdm277+9XHJcbiAgICAgICAgX3NwZWVkMjogMiwgICAgICAgICAvL++/ve+/ve+/ve+/ve+/vdm277+9XHJcbiAgICAgICAgX29wYWNpdHk6IDAsICAgICAgICAvL82477+977+977+977+9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICAvLyBqb3nvv73Cte+/vUdhbWXvv73vv73vv71cclxuICAgICAgICB0aGlzLl9qb3lDb20gPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnam95c3RpY2snKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGdhbWXvv73vv73vv73vv73Cte+/vXBsYXllcu+/vdq177+9XHJcbiAgICAgICAgdGhpcy5fcGxheWVyTm9kZSA9IHRoaXMuX2pveUNvbS5zcHJpdGU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX2pveUNvbS50b3VjaFR5cGUgPT0gQ29tbW9uLlRvdWNoVHlwZS5ERUZBVUxUKXtcclxuICAgICAgICAgICAgLy/vv73vv73Ussim77+9xLTvv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICAgICAgdGhpcy5faW5pdFRvdWNoRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvL++/ve+/vdSyyKbvv73EtO+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgX2luaXRUb3VjaEV2ZW50OiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnRFdmVudCwgc2VsZik7XHJcblxyXG4gICAgICAgIHNlbGYubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl90b3VjaE1vdmVFdmVudCwgc2VsZik7XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vdSyyKbvv73vv73vv73rv6rvv73vv73vv73vv73Ussim77+977+977+967+q77+977+90qHvv73Lue+/vc6777+977+9cGxheWVy77+92bbvv73OqjBcclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZEV2ZW50LCBzZWxmKTtcclxuICAgICAgICBzZWxmLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl90b3VjaEVuZEV2ZW50LCBzZWxmKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/vv73vv73vv73vv73vv73Gtu+/vcS/77+977+9XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGR0KVxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fam95Q29tLmRpcmVjdGlvblR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIENvbW1vbi5EaXJlY3Rpb25UeXBlLkFMTDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FsbERpcmVjdGlvbnNNb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgIC8vyKvvv73vv73vv73vv73vv73Gtu+/vVxyXG4gICAgX2FsbERpcmVjdGlvbnNNb3ZlOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyTm9kZS54ICs9IE1hdGguY29zKHRoaXMuX2FuZ2xlICogKE1hdGguUEkvMTgwKSkgKiB0aGlzLl9zcGVlZDtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJOb2RlLnkgKz0gTWF0aC5zaW4odGhpcy5fYW5nbGUgKiAoTWF0aC5QSS8xODApKSAqIHRoaXMuX3NwZWVkO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgIC8v77+977+977+977+977+977+977+977+977+9xL7vv73vv73rsqLvv73vv73vv73vv71cclxuICAgIF9nZXREaXN0YW5jZTogZnVuY3Rpb24ocG9zMSwgcG9zMilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvczEueCAtIHBvczIueCwgMikgK1xyXG4gICAgICAgIE1hdGgucG93KHBvczEueSAtIHBvczIueSwgMikpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKu+/vce277+9L++/ve+/ve+/ve+/vdeq77+977+9XHJcbiAgICDvv73Htu+/vSA9IO+/ve+/ve+/ve+/vSAqIDE4MCAvIE1hdGguUElcclxuICAgIO+/ve+/ve+/ve+/vSA9IO+/vce277+9ICogTWF0aC5QSSAvIDE4MCovXHJcbiAgICAvL++/ve+/ve+/veO7oe+/vciy77+977+977+977+977+9XHJcbiAgICBfZ2V0UmFkaWFuOiBmdW5jdGlvbihwb2ludClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9yYWRpYW4gPSBNYXRoLlBJIC8gMTgwICogdGhpcy5fZ2V0QW5nbGUocG9pbnQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpYW47XHJcbiAgICB9LFxyXG5cclxuICAgIC8v77+977+977+977+9x7bIsu+/ve+/ve+/ve+/ve+/vVxyXG4gICAgX2dldEFuZ2xlOiBmdW5jdGlvbihwb2ludClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX2FuZ2xlID0gTWF0aC5hdGFuMihwb2ludC55IC0gcG9zLnksIHBvaW50LnggLSBwb3MueCkgKiAoMTgwL01hdGguUEkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmdsZTtcclxuICAgIH0sXHJcblxyXG4gICAgIC8v77+977+977+977+9yrXvv73vv73vv73Ztu+/vVxyXG4gICAgX3NldFNwZWVkOiBmdW5jdGlvbihwb2ludClcclxuICAgIHtcclxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/ve+/ve+/vdKj77+92Ljvv73vv73vv73vv73EtcS+77+977+977+9XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5fZ2V0RGlzdGFuY2UocG9pbnQsIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy/vv73vv73vv73vv73rvrZcclxuICAgICAgICBpZihkaXN0YW5jZSA8IHRoaXMuX3JhZGl1cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwZWVkID0gdGhpcy5fc3BlZWQxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zcGVlZCA9IHRoaXMuX3NwZWVkMjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIF90b3VjaFN0YXJ0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLy8g77+977+9yKHvv73vv73vv73vv73Ou++/vcO177+977+977+977+977+977+977+977+977+916rvv73vv73vv73vv73Ussim77+977+977+977+977+977+977+977+96qOo77+977+91LLIpu+/ve+/vcOq77+977+9zqrvv73vv73XvO+/ve+/vVxyXG4gICAgICAgIHZhciB0b3VjaFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vdSyyKbvv73vv73vv73EtcS+77+977+977+9XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5fZ2V0RGlzdGFuY2UodG91Y2hQb3MsY2MuVmVjMigwLDApKTtcclxuICAgICAgICAvL9SyyKbvv73rvrZcclxuICAgICAgICB2YXIgcmFkaXVzID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICAvLyDvv73vv73CvNKh77+977+9zrvvv73Do++/ve+/ve+/vXRvdWNoIG1vdmXKue+/ve+/vVxyXG4gICAgICAgIHRoaXMuX3N0aWNrUG9zID0gdG91Y2hQb3M7XHJcbiAgICAgICAgdmFyIHBvc1ggPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgdG91Y2hQb3MueDtcclxuICAgICAgICB2YXIgcG9zWSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgKyB0b3VjaFBvcy55O1xyXG4gICAgICAgICAvL++/ve+/vda477+977+91LLIpu+/vdq077+977+977+9LO+/vdi4y7jvv73vv73mtKXvv73vv73vv73vv71cclxuICAgICAgICBpZihyYWRpdXMgPiBkaXN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLlZlYzIocG9zWCwgcG9zWSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBfdG91Y2hNb3ZlRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICB2YXIgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5fZ2V0RGlzdGFuY2UodG91Y2hQb3MsY2MuVmVjMigwLDApKTtcclxuICAgICAgICB2YXIgcmFkaXVzID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICAvLyDvv73vv73vv73vv73Soe+/vcu177+9cG9zdGlvbu+/ve+/ve+/vdS477+977+92rXvv73OqsOq77+946Os77+977+977+91Lbvv73Ou9Kq77+977+977+977+9cmluZ++/ve+/vWRvdO+/ve+/vcew77+977+9zrvvv73vv70oc3RpY2tYLHN0aWNrWSlcclxuICAgICAgICB2YXIgcG9zWCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyB0b3VjaFBvcy54O1xyXG4gICAgICAgIHZhciBwb3NZID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSArIHRvdWNoUG9zLnk7XHJcbiAgICAgICAgaWYocmFkaXVzID4gZGlzdGFuY2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy5WZWMyKHBvc1gsIHBvc1kpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/vv73YuO+/ve+/ve+/vdS277+977+977+977+977+977+9yKbvv73ao++/ve+/ve+/ve+/ve+/vcim77+92rjvv73vv73mtKXvv73vv73vv73vv73vv73Cvce277+9XHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueCArIE1hdGguY29zKHRoaXMuX2dldFJhZGlhbihjYy5WZWMyKHBvc1gscG9zWSkpKSAqIHJhZGl1cztcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55ICsgTWF0aC5zaW4odGhpcy5fZ2V0UmFkaWFuKGNjLlZlYzIocG9zWCxwb3NZKSkpICogcmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy5WZWMyKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/vv73vv73vv73Cvce277+9XHJcbiAgICAgICAgdGhpcy5fZ2V0QW5nbGUoY2MuVmVjMihwb3NYLHBvc1kpKTtcclxuICAgICAgICAvL++/ve+/ve+/ve+/vcq177+977+977+92bbvv71cclxuICAgICAgICB0aGlzLl9zZXRTcGVlZChjYy5WZWMyKHBvc1gscG9zWSkpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgX3RvdWNoRW5kRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
