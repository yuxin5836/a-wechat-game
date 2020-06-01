
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
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

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
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9ad58BtkVKAI/UOyulSzXF', 'Star');
// scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // ���Ǻ�����֮��ľ���С�������ֵʱ���ͻ�����ռ�
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    // ���� player �ڵ�λ���жϾ���
    var playerPos = this.game.player.getPosition(); // ��������λ�ü�������֮�����

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // �����Ǳ��ռ�ʱ������ Game �ű��еĽӿڣ�����һ���µ�����
    this.game.spawnNewStar(); // ���� Game �ű��ĵ÷ַ���

    this.game.gainScore(); // Ȼ�����ٵ�ǰ���ǽڵ�

    this.node.destroy();
  },
  update: function update(dt) {
    // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
    if (this.getPlayerDistance() < this.pickRadius) {
      // �����ռ���Ϊ
      this.onPicked();
      return;
    } // ���� Game �ű��еļ�ʱ���������ǵ�͸����


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 100;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUZKLEdBSFA7QUFTTEMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVk7QUFHM0I7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxXQUFqQixFQUFoQixDQUoyQixDQU0zQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxHQUFuQixDQUF1QlAsU0FBdkIsRUFBa0NRLEdBQWxDLEVBQVg7QUFDQSxXQUFPSixJQUFQO0FBQ0gsR0FsQkk7QUFvQkxLLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQjtBQUNBLFNBQUtSLElBQUwsQ0FBVVMsWUFBVixHQUZrQixDQUlsQjs7QUFDQSxTQUFLVCxJQUFMLENBQVVVLFNBQVYsR0FMa0IsQ0FPbEI7O0FBQ0EsU0FBS04sSUFBTCxDQUFVTyxPQUFWO0FBQ0gsR0E3Qkk7QUErQkxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLZixpQkFBTCxLQUEyQixLQUFLRCxVQUFwQyxFQUFnRDtBQUM1QztBQUNBLFdBQUtXLFFBQUw7QUFDQTtBQUNILEtBTmlCLENBT2xCOzs7QUFDQSxRQUFJTSxZQUFZLEdBQUcsSUFBSSxLQUFLZCxJQUFMLENBQVVlLEtBQVYsR0FBa0IsS0FBS2YsSUFBTCxDQUFVZ0IsWUFBbkQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsR0FBakI7QUFDQSxTQUFLYixJQUFMLENBQVVjLE9BQVYsR0FBb0JELFVBQVUsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFlBQVksSUFBSSxNQUFNRyxVQUFWLENBQXZCLENBQWpDO0FBQ0g7QUExQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDvv73vv73vv73Huu+/ve+/ve+/ve+/ve+/vdau77+977+9xL7vv73vv73vv73Qoe+/ve+/ve+/ve+/ve+/ve+/ve+/vda1yrHvv73vv73vv73Nu++/ve+/ve+/ve+/ve+/vdW877+9XHJcbiAgICAgICAgcGlja1JhZGl1czogMFxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gXHJcbiAgICAgICAgLy8g77+977+977+977+9IHBsYXllciDvv73ate+/vc6777+977+977+90LbPvu+/ve+/ve+/vVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vc6777+9w7zvv73vv73vv73vv73vv73vv73vv73Wru+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/vcex77+977+91bzvv73Kse+/ve+/ve+/ve+/ve+/ve+/vSBHYW1lIO+/vcWx77+977+90LXEvdO/2qPvv73vv73vv73vv73vv73Su++/ve+/ve+/vcK177+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv70gR2FtZSDvv73Fse+/ve+/vcS1w7fWt++/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcclxuXHJcbiAgICAgICAgLy8gyLvvv73vv73vv73vv73vv73Zte+/vcew77+977+977+9x73ate+/vVxyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8gw7/Woe+/vdC2z7rvv73vv73vv73vv73vv73Wru+/ve+/vcS+77+977+977+977+9x7fvv73Qoe+/ve+/ve+/vdW877+977+977+977+977+9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAgICAgICAvLyDvv73vv73vv73vv73vv73VvO+/ve+/ve+/vc6qXHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDvv73vv73vv73vv70gR2FtZSDvv73Fse+/ve+/vdC1xLzvv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vce177+9zbjvv73vv73vv73vv71cclxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lciAvIHRoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcbiAgICAgICAgdmFyIG1pbk9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpO1xyXG4gICAgfSxcclxuICAgIFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6cfeC7rwhHqbRwPZekT1PQ', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // �����������������Ԥ����Դ
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // ���ǲ�������ʧʱ��������Χ
    maxStarDuration: 0,
    minStarDuration: 0,
    // ����ڵ㣬����ȷ���������ɵĸ߶�
    ground: {
      "default": null,
      type: cc.Node
    },
    // player �ڵ㣬���ڻ�ȡ���ǵ����ĸ߶ȣ��Ϳ��������ж�����
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // �÷���Ч��Դ
    scoreAudio: {
      "default": null,
      url: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    console.log("Game"); // ��ȡ��ƽ��� y ������

    this.groundY = this.ground.y + this.ground.height / 2; // ��ʼ����ʱ��

    this.timer = 0;
    this.starDuration = 0; // ����һ���µ�����

    this.spawnNewStar(); // ��ʼ���Ʒ�

    this.score = 0;
  },
  update: function update(dt) {
    // ÿ֡���¼�ʱ���������޶Ȼ�û�������µ�����
    // �ͻ������Ϸʧ���߼�
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  spawnNewStar: function spawnNewStar() {
    // ʹ�ø�����ģ���ڳ���������һ���½ڵ�
    var newStar = cc.instantiate(this.starPrefab); // �������Ľڵ����ӵ� Canvas �ڵ�����

    this.node.addChild(newStar); // Ϊ��������һ�����λ��

    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this;
    /*
     ������ص����ڣ�����Ҫ��ʱ���Ի�����ǽڵ��λ�ã������ж�����֮��ľ����Ƿ�С�ڿ��ռ����룬
     ��λ�����ǽڵ�������أ�����������ǰ�������������£�
        Game ������и����� player �����ԣ����������ǽڵ�����á�
        ÿ�����Ƕ����� Game �ű��ж�̬���ɵġ�
        ��������ֻҪ�� Game �ű����� Star �ڵ�ʵ��ʱ���� Game �����ʵ���������ǲ����������ͺ��ˣ�֮������
        ������ʱͨ�� game.player �����ʵ����ǽڵ㡣�����Ǵ� Game �ű����� spawnNewStar �������������һ�� newStar.getComponent('Star').game = this;
         newStar��һ���ڵ㣨node����Star��һ�����ӵ�newStar�ڵ��ϵ����
    newStar.getComponent("Star")���ǻ�ȡ��Star������
    game��Star�����һ�����ԣ������this��ֵ��game������ԣ�this������ǰ���
    
    �������������˼����
    �ѵ�ǰ������浽newStar�ڵ��µ�Star������game������
    �Ժ������κεط�����
    newStar.getComponent("Star").game��newStar��Ҫ�Լ��Ȼ�ȡ��������ֱ�ӵ���newStar��
    ��ȡ���ľ��ǵ�ǰ���
     */
    // ���ü�ʱ����������ʧʱ�䷶Χ���ȡһ��ֵ

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // ���ݵ�ƽ��λ�ú�������Ծ�߶ȣ�����õ�һ�����ǵ� y ����

    console.log("1");
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // ������Ļ���ȣ�����õ�һ������ x ����

    console.log("2");
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // ������������

    return cc.Vec2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1; // ���� scoreDisplay Label ������

    this.scoreDisplay.string = 'Score: ' + this.score.toString();
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //ֹͣ player �ڵ����Ծ����

    cc.director.loadScene('game');
    /*
     * ��cc.director ��һ�����������Ϸ���߼����̵ĵ����������� cc.director ��һ���������㲻��Ҫ�����κι��캯���򴴽�������ʹ�����ı�׼������ͨ������cc.director.methodName() �����������cc.director.loadScene('game')�������¼�����Ϸ����game��Ҳ������Ϸ���¿�ʼ��
     */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsInVybCIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJncm91bmRZIiwieSIsImhlaWdodCIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwic3Bhd25OZXdTdGFyIiwic2NvcmUiLCJ1cGRhdGUiLCJkdCIsImdhbWVPdmVyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSIsInJhbmRYIiwicmFuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwiVmVjMiIsImdhaW5TY29yZSIsInN0cmluZyIsInRvU3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBTVI7QUFDQUMsSUFBQUEsZUFBZSxFQUFFLENBUFQ7QUFRUkMsSUFBQUEsZUFBZSxF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LEVBQUUscUJBQVk7QUFDbkIsU0FBS3BCLEtBQUwsSUFBYyxDQUFkLENBRG1CLENBRW5COztBQUNBLFNBQUtkLFlBQUwsQ0FBa0JtQyxNQUFsQixHQUEyQixZQUFZLEtBQUtyQixLQUFMLENBQVdzQixRQUFYLEVBQXZDO0FBQ0FoRCxJQUFBQSxFQUFFLENBQUNpRCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS3BDLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0gsR0FuSEk7QUFxSExlLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQixTQUFLbEIsTUFBTCxDQUFZd0MsY0FBWixHQURrQixDQUNZOztBQUM5Qm5ELElBQUFBLEVBQUUsQ0FBQ29ELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNBOzs7QUFHSDtBQTNISSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+977+91KTvv73vv73vv73vv73UtFxyXG4gICAgICAgIHN0YXJQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDvv73vv73vv73Hsu+/ve+/ve+/ve+/ve+/ve+/ve+/vcqnyrHvv73vv73vv73vv73vv73vv73vv73vv73Op1xyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/vdq146Os77+977+977+977+9yLfvv73vv73vv73vv73vv73vv73vv73vv73vv73JtcS437bvv71cclxuICAgICAgICBncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHBsYXllciDvv73ateOjrO+/ve+/ve+/vdq777+9yKHvv73vv73vv73Hte+/ve+/ve+/ve+/vcS437bIo++/ve+/vc2/77+977+977+977+977+977+977+977+90Lbvv73vv73vv73vv73vv71cclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIO+/vcO377+977+977+90Kfvv73vv73UtFxyXG4gICAgICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZVwiKTtcclxuICAgICAgICAvLyDvv73vv73Ioe+/ve+/vca977+977+977+9IHkg77+977+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIC8vIO+/ve+/vcq877+977+977+977+9yrHvv73vv71cclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgLy8g77+977+977+977+90rvvv73vv73vv73Cte+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73Gt++/vVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIMO/1qHvv73vv73vv73CvO+/vcqx77+977+977+977+977+977+977+977+977+93rbIu++/vcO777+977+977+977+977+977+977+9wrXvv73vv73vv73vv73vv71cclxuICAgICAgICAvLyDvv73Nu++/ve+/ve+/ve+/ve+/ve+/vc+3yqfvv73vv73vv73fvO+/vVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gyrnvv73DuO+/ve+/ve+/ve+/ve+/vcSj77+977+977+92rPvv73vv73vv73vv73vv73vv73vv73vv73vv73Su++/ve+/ve+/vcK92rXvv71cclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/vcS92rXvv73vv73vv73vv73Tte+/vSBDYW52YXMg77+92rXvv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcblxyXG4gICAgICAgIC8vIM6q77+977+977+977+977+977+977+977+90rvvv73vv73vv73vv73vv73Ou++/ve+/vVxyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcclxuICAgICAgICAvKlxyXG4gICAgICAgICDvv73vv73vv73vv73vv73vv73Yte+/ve+/ve+/ve+/vdqj77+977+977+977+977+90qrvv73vv73Kse+/ve+/ve+/vdS777+977+977+977+977+9x73ate+/ve+/vc6777+9w6Pvv73vv73vv73vv73vv73vv73Qtu+/ve+/ve+/ve+/ve+/vdau77+977+9xL7vv73vv73vv73vv73Ht++/vdCh77+92r/vv73vv73VvO+/ve+/ve+/ve+/veujrFxyXG4gICAgICAgICDvv73vv73Ou++/ve+/ve+/ve+/ve+/vce92rXvv73vv73vv73vv73vv73vv73vv73Yo++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vcew77+977+977+977+977+977+977+977+977+977+977+977+977+9wqPvv71cclxuICAgICAgICAgICAgR2FtZSDvv73vv73vv73vv73vv73vv73QuO+/ve+/ve+/ve+/ve+/vSBwbGF5ZXIg77+977+977+977+977+91KPvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73Hvdq177+977+977+977+977+9w6Hvv71cclxuICAgICAgICAgICAgw7/vv73vv73vv73vv73vv73Htu+/ve+/ve+/ve+/ve+/vSBHYW1lIO+/vcWx77+977+90Lbvv73MrO+/ve+/ve+/vcm1xKHvv71cclxuICAgICAgICAgICAg77+977+977+977+977+977+977+977+91rvSqu+/ve+/vSBHYW1lIO+/vcWx77+977+977+977+977+9IFN0YXIg77+92rXvv73Kte+/ve+/vcqx77+977+977+977+9IEdhbWUg77+977+977+977+977+9yrXvv73vv73vv73vv73vv73vv73vv73vv73vv73Hsu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vc2677+977+9y6Pvv73Wru+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgICAgICDvv73vv73vv73vv73vv73vv73Ksc2o77+977+9IGdhbWUucGxheWVyIO+/ve+/ve+/ve+/ve+/vcq177+977+977+977+9x73ateOho++/ve+/ve+/ve+/ve+/vce077+9IEdhbWUg77+9xbHvv73vv73vv73vv73vv70gc3Bhd25OZXdTdGFyIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vdK777+977+9IG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZSA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICAgbmV3U3Rhcu+/ve+/vdK777+977+977+92rXjo6hub2Rl77+977+977+977+9U3Rhcu+/ve+/vdK777+977+977+977+977+907Xvv71uZXdTdGFy77+92rXvv73vv73Pte+/ve+/ve+/ve+/vVxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KFwiU3RhclwiKe+/ve+/ve+/vce777+9yKHvv73vv71TdGFy77+977+977+977+977+977+9XHJcbiAgICAgICAgZ2FtZe+/ve+/vVN0YXLvv73vv73vv73vv73vv73Su++/ve+/ve+/ve+/ve+/vdSj77+977+977+977+977+977+9dGhpc++/ve+/vda177+977+9Z2FtZe+/ve+/ve+/ve+/ve+/ve+/vdSj77+9dGhpc++/ve+/ve+/ve+/ve+/ve+/vcew77+977+977+9XHJcbiAgICAgICAgXHJcbiAgICAgICAg77+977+977+977+977+977+977+977+977+977+977+977+977+9y7zvv73vv73vv73vv71cclxuICAgICAgICDvv73Rte+/vcew77+977+977+977+977+977+95rW9bmV3U3Rhcu+/vdq177+977+9wrXvv71TdGFy77+977+977+977+977+977+9Z2FtZe+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIO+/vdS677+977+977+977+977+977+9zrrOtdi377+977+977+977+977+9XHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoXCJTdGFyXCIpLmdhbWXvv73vv71uZXdTdGFy77+977+90qrvv73UvO+/ve+/vci777+9yKHvv73vv73vv73vv73vv73vv73vv73vv73Wse+/vdO177+977+977+9bmV3U3Rhcu+/ve+/vVxyXG4gICAgICAgIO+/ve+/vcih77+977+977+9xL7vv73vv73Hte+/vcew77+977+977+9XHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/vcO877+9yrHvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73Kp8qx77+95Le2zqfvv73vv73vv73IodK777+977+91rVcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICAvLyDvv73vv73vv73dte+/vca977+977+9zrvvv73Duu+/ve+/ve+/ve+/ve+/ve+/ve+/vdS+77+937bIo++/ve+/ve+/ve+/ve+/vcO177+90rvvv73vv73vv73vv73vv73Hte+/vSB5IO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcclxuICAgICAgICBjb25zdCByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73Eu++/ve+/ve+/vcij77+977+977+977+977+9w7Xvv73Su++/ve+/ve+/ve+/ve+/ve+/vSB4IO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMlwiKTtcclxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICByZXR1cm4gY2MuVmVjMihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgLy8g77+977+977+977+9IHNjb3JlRGlzcGxheSBMYWJlbCDvv73vv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpOyAvL82j1rkgcGxheWVyIO+/vdq177+977+977+977+91L7vv73vv73vv73vv71cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIO+/ve+/vWNjLmRpcmVjdG9yIO+/ve+/vdK777+977+977+977+977+977+977+977+977+977+977+9z7fvv73vv73vv73fvO+/ve+/ve+/ve+/vcy1xLXvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv70gY2MuZGlyZWN0b3Ig77+977+90rvvv73vv73vv73vv73vv73vv73vv73vv73vv73jsrvvv73vv73Squ+/ve+/ve+/ve+/ve+/vc66zrnvv73vv73suq/vv73vv73vv73ytLS977+977+977+977+977+977+977+9yrnvv73vv73vv73vv73vv73Ese+/vde877+977+977+977+977+977+9zajvv73vv73vv73vv73vv73vv71jYy5kaXJlY3Rvci5tZXRob2ROYW1lKCkg77+977+977+977+977+977+977+977+977+977+977+9Y2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJynvv73vv73vv73vv73vv73vv73vv73CvO+/ve+/ve+/ve+/ve+/vc+377+977+977+977+9Z2FtZe+/ve+/vdKy77+977+977+977+977+977+9z7fvv73vv73vv73Cv++/vcq877+977+9XHJcbiAgICAgICAgICovXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '701beJrVSRDE7Fx1nq3SLA8', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // ������Ծ�߶�
    jumpHeight: 0,
    // ������Ծ����ʱ��
    jumpDuration: 0,
    // ����ƶ��ٶ�
    maxMoveSpeed: 0,
    // ���ٶ�
    accel: 0,
    // ��Ծ��Ч��Դ
    jumpAudio: {
      "default": null,
      url: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    console.log("player"); // ��ʼ����Ծ����

    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); // ���ٶȷ��򿪹�

    this.accLeft = false;
    this.accRight = false; // ���ǵ�ǰˮƽ�����ٶ�

    this.xSpeed = 0; // ��ʼ�������������

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    // ���ݵ�ǰ���ٶȷ���ÿ֡�����ٶ�
    //this.xSpeed��Ϊ����Ϊ��
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // �������ǵ��ٶȲ��ܳ������ֵ


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // ���ݵ�ǰ�ٶȸ������ǵ�λ��


    this.node.x += this.xSpeed * dt;
  },
  setJumpAction: function setJumpAction() {
    // ��Ծ����
    //cc.p��2.0�汾֮����֧�֣���Ϊcc.Vec
    //cc.MoveBy(duration, deltaPos, deltaY);
    //cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight))��˼����jumpDurationʱ�����ƶ���
    //����ڵ�ǰ�ڵ�0,this.jumpHeight��λ��
    //��벿��easing(cc.easeCubicActionOut())��������ʲô�أ�easing��ActionInterval���µ�һ���������������
    //������ʱ������������Ϊһ�ֻ����˶�������Ĳ�����һ���������󣬷���һ��ActionInterval���Ͷ�������
    //ʹ��easeCubicActionInOut���������Ļ�������EaseCubicInOut�ǰ����κ����������벢�˳��Ķ���
    var jumpUp = cc.moveBy(this.jumpDuration, cc.Vec2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // ����

    var jumpDown = cc.moveBy(this.jumpDuration, cc.Vec2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // ����һ���ص������������ڶ�������ʱ�������Ƕ������������

    var callback = cc.callFunc(this.playJumpSound, this); // �����ظ�������ÿ�������ض�������ûص�����������

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  //����a�������,d���Ҽ���
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;

      default:
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;

      default:
        break;
    }
  },
  playJumpSound: function playJumpSound() {
    // �����������沥������
    cc.audioEngine.playEffect(this.jumpAudio, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidXJsIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsImp1bXBBY3Rpb24iLCJzZXRKdW1wQWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiLCJqdW1wVXAiLCJtb3ZlQnkiLCJWZWMyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImNhbGxiYWNrIiwiY2FsbEZ1bmMiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiZCIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFJUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FMTjtBQU9SO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQVJOO0FBVVI7QUFDQUMsSUFBQUEsS0FBSyxFQUFFLENBWEM7QUFhUDtBQUNEQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBDLE1BQUFBLEdBQUcsRUFBRVQsRUFBRSxDQUFDVTtBQUZEO0FBZEgsR0FIUDtBQXdCTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBRWhCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBRmdCLENBR2hCOztBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0MsYUFBTCxFQUFsQjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQixLQUFLSCxVQUF6QixFQUxnQixDQU9oQjs7QUFDQSxTQUFLSSxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEIsQ0FUZ0IsQ0FVaEI7O0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQsQ0FYZ0IsQ0FhaEI7O0FBQ0FwQixJQUFBQSxFQUFFLENBQUNxQixXQUFILENBQWVDLEVBQWYsQ0FBa0J0QixFQUFFLENBQUN1QixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0FBQ0ExQixJQUFBQSxFQUFFLENBQUNxQixXQUFILENBQWVDLEVBQWYsQ0FBa0J0QixFQUFFLENBQUN1QixXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BQTNDLEVBQW1ELEtBQUtDLE9BQXhELEVBQWlFLElBQWpFO0FBQ0gsR0F4Q0k7QUE0Q0xDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0E7QUFDQSxRQUFJLEtBQUtaLE9BQVQsRUFBa0I7QUFDZCxXQUFLRSxNQUFMLElBQWUsS0FBS2IsS0FBTCxHQUFhdUIsRUFBNUI7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLWCxRQUFULEVBQW1CO0FBQ3RCLFdBQUtDLE1BQUwsSUFBZSxLQUFLYixLQUFMLEdBQWF1QixFQUE1QjtBQUNILEtBUGlCLENBUWxCOzs7QUFDQSxRQUFJQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLWixNQUFkLElBQXdCLEtBQUtkLFlBQWpDLEVBQStDO0FBQzNDO0FBQ0EsV0FBS2MsTUFBTCxHQUFjLEtBQUtkLFlBQUwsR0FBb0IsS0FBS2MsTUFBekIsR0FBa0NXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsQ0FBaEQ7QUFDSCxLQVppQixDQWNsQjs7O0FBQ0EsU0FBS0osSUFBTCxDQUFVaUIsQ0FBVixJQUFlLEtBQUtiLE1BQUwsR0FBY1UsRUFBN0I7QUFDSCxHQTVESTtBQThETGYsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFJbUIsTUFBTSxHQUFHbEMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLEtBQUs5QixZQUFmLEVBQTZCTCxFQUFFLENBQUNvQyxJQUFILENBQVEsQ0FBUixFQUFXLEtBQUtoQyxVQUFoQixDQUE3QixFQUEwRGlDLE1BQTFELENBQWlFckMsRUFBRSxDQUFDc0Msa0JBQUgsRUFBakUsQ0FBYixDQVp1QixDQWN2Qjs7QUFDQSxRQUFJQyxRQUFRLEdBQUd2QyxFQUFFLENBQUNtQyxNQUFILENBQVUsS0FBSzlCLFlBQWYsRUFBNkJMLEVBQUUsQ0FBQ29DLElBQUgsQ0FBUSxDQUFSLEVBQVcsQ0FBQyxLQUFLaEMsVUFBakIsQ0FBN0IsRUFBMkRpQyxNQUEzRCxDQUFrRXJDLEVBQUUsQ0FBQ3dDLGlCQUFILEVBQWxFLENBQWYsQ0FmdUIsQ0FpQnZCOztBQUNBLFFBQUlDLFFBQVEsR0FBR3pDLEVBQUUsQ0FBQzBDLFFBQUgsQ0FBWSxLQUFLQyxhQUFqQixFQUFnQyxJQUFoQyxDQUFmLENBbEJ1QixDQW9CdkI7O0FBQ0EsV0FBTzNDLEVBQUUsQ0FBQzRDLGFBQUgsQ0FBaUI1QyxFQUFFLENBQUM2QyxRQUFILENBQVlYLE1BQVosRUFBb0JLLFFBQXBCLEVBQThCRSxRQUE5QixDQUFqQixDQUFQO0FBQ0gsR0FwRkk7QUFzRkw7QUFDQWYsRUFBQUEsU0F2RksscUJBdUZLb0IsS0F2RkwsRUF1Rlk7QUFDYixZQUFRQSxLQUFLLENBQUNDLE9BQWQ7QUFDSSxXQUFLL0MsRUFBRSxDQUFDZ0QsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS2hDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBQ0osV0FBS2xCLEVBQUUsQ0FBQ2dELEtBQUgsQ0FBU0MsR0FBVCxDQUFhRSxDQUFsQjtBQUNJLGFBQUtoQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0E7O0FBQ0o7QUFDSTtBQVJSO0FBVUgsR0FsR0k7QUFvR0xTLEVBQUFBLE9BcEdLLG1CQW9HR2tCLEtBcEdILEVBb0dVO0FBQ1gsWUFBUUEsS0FBSyxDQUFDQyxPQUFkO0FBQ0ksV0FBSy9DLEVBQUUsQ0FBQ2dELEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtBQUNJLGFBQUtoQyxPQUFMLEdBQWUsS0FBZjtBQUNBOztBQUNKLFdBQUtsQixFQUFFLENBQUNnRCxLQUFILENBQVNDLEdBQVQsQ0FBYUUsQ0FBbEI7QUFDSSxhQUFLaEMsUUFBTCxHQUFnQixLQUFoQjtBQUNBOztBQUNKO0FBQ0k7QUFSUjtBQVVILEdBL0dJO0FBaUhMd0IsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCO0FBQ0EzQyxJQUFBQSxFQUFFLENBQUNvRCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBSzdDLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0g7QUFwSEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73Uvu+/vd+277+9XHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+977+977+91L7vv73vv73vv73vv73Kse+/ve+/vVxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+9xrbvv73vv73Ztu+/vVxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuXHJcbiAgICAgICAgLy8g77+977+977+92bbvv71cclxuICAgICAgICBhY2NlbDogMCxcclxuXHJcbiAgICAgICAgIC8vIO+/ve+/vdS+77+977+90Kfvv73vv73UtFxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73vv73Uvu+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8g77+977+977+92bbIt++/ve+/vfK/qrnvv71cclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8g77+977+977+9x7Xvv73HsMuuxr3vv73vv73vv73vv73vv73Ztu+/vVxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDvv73vv73vv73dte+/vcew77+977+977+92bbIt++/ve+/ve+/vcO/1qHvv73vv73vv73vv73vv73Ztu+/vVxyXG4gICAgICAgIC8vdGhpcy54U3BlZWTvv73vv73Oqu+/ve+/ve+/ve+/vc6q77+977+9XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+9x7Xvv73vv73Ztsiy77+977+93LPvv73vv73vv73vv73vv73vv73WtVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/vd2177+9x7Dvv73Ztsi477+977+977+977+977+977+9x7Xvv73Ou++/ve+/vVxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDvv73vv73Uvu+/ve+/ve+/ve+/vVxyXG5cclxuICAgICAgICAvL2NjLnDvv73vv70yLjDvv73msb7Wru+/ve+/ve+/ve+/vdan77+91qPvv73vv73vv73OqmNjLlZlY1xyXG4gICAgICAgIC8vY2MuTW92ZUJ5KGR1cmF0aW9uLCBkZWx0YVBvcywgZGVsdGFZKTtcclxuXHJcbiAgICAgICAgLy9jYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnAoMCwgdGhpcy5qdW1wSGVpZ2h0KSnvv73vv73LvO+/ve+/ve+/ve+/vWp1bXBEdXJhdGlvbsqx77+977+977+977+977+9xrbvv73vv73vv71cclxuICAgICAgICAvL++/ve+/ve+/ve+/vdq177+9x7Dvv73ate+/vTAsdGhpcy5qdW1wSGVpZ2h077+977+9zrvvv73vv71cclxuXHJcbiAgICAgICAgLy/vv73vv73rsr/vv73vv71lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkp77+977+977+977+977+977+977+977+9yrLDtO+/vdij77+9ZWFzaW5n77+977+9QWN0aW9uSW50ZXJ2YWzvv73vv73vv73Cte+/vdK777+977+977+977+977+977+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgLy/vv73vv73vv73vv73vv73vv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vc6q0rvvv73Wu++/ve+/ve+/ve+/vcu277+977+977+977+977+977+977+9xLLvv73vv73vv73vv73vv73Su++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vfOjrLfvv73vv73vv73Su++/ve+/vUFjdGlvbkludGVydmFs77+977+977+9zbbvv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICAvL8q577+977+9ZWFzZUN1YmljQWN0aW9uSW5PdXTvv73vv73vv73vv73vv73vv73vv73vv73vv73Eu++/ve+/ve+/ve+/ve+/ve+/ve+/vUVhc2VDdWJpY0luT3V077+9x7Dvv73vv73vv73vv73Ouu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/veuyou+/vcuz77+977+9xLbvv73vv73vv71cclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy5WZWMyKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MuVmVjMigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv73Su++/ve+/ve+/vdi177+977+977+977+977+977+977+977+977+977+977+977+92rbvv73vv73vv73vv73vv73vv73vv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/vce277+977+977+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2MuY2FsbEZ1bmModGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+977+92Ljvv73vv73vv73vv73vv73vv73vv73Dv++/ve+/ve+/ve+/ve+/ve+/ve+/vdi277+977+977+977+977+977+977+9w7vYte+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24sIGNhbGxiYWNrKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v77+977+977+977+9Ye+/ve+/ve+/ve+/ve+/ve+/ve+/vSxk77+977+977+90rzvv73vv73vv71cclxuICAgIG9uS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+977+977+977+95rKl77+977+977+977+977+977+9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
