
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