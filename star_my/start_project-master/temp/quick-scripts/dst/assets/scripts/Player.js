
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidXJsIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsImp1bXBBY3Rpb24iLCJzZXRKdW1wQWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiLCJqdW1wVXAiLCJtb3ZlQnkiLCJWZWMyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImNhbGxiYWNrIiwiY2FsbEZ1bmMiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiZCIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFJUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FMTjtBQU9SO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQVJOO0FBVVI7QUFDQUMsSUFBQUEsS0FBSyxFQUFFLENBWEM7QUFhUDtBQUNEQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FB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QUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS2hDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBQ0osV0FBS2xCLEVBQUUsQ0FBQ2dELEtBQUgsQ0FBU0MsR0FBVCxDQUFhRSxDQUFsQjtBQUNJLGFBQUtoQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0E7O0FBQ0o7QUFDSTtBQVJSO0FBVUgsR0FsR0k7QUFvR0xTLEVBQUFBLE9BcEdLLG1CQW9HR2tCLEtBcEdILEVBb0dVO0FBQ1gsWUFBUUEsS0FBSyxDQUFDQyxPQUFkO0FBQ0ksV0FBSy9DLEVBQUUsQ0FBQ2dELEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtBQUNJLGFBQUtoQyxPQUFMLEdBQWUsS0FBZjtBQUNBOztBQUNKLFdBQUtsQixFQUFFLENBQUNnRCxLQUFILENBQVNDLEdBQVQsQ0FBYUUsQ0FBbEI7QUFDSSxhQUFLaEMsUUFBTCxHQUFnQixLQUFoQjtBQUNBOztBQUNKO0FBQ0k7QUFSUjtBQVVILEdBL0dJO0FBaUhMd0IsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCO0FBQ0EzQyxJQUFBQSxFQUFFLENBQUNvRCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBSzdDLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0g7QUFwSEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73Uvu+/vd+277+9XHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+977+977+91L7vv73vv73vv73vv73Kse+/ve+/vVxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+9xrbvv73vv73Ztu+/vVxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuXHJcbiAgICAgICAgLy8g77+977+977+92bbvv71cclxuICAgICAgICBhY2NlbDogMCxcclxuXHJcbiAgICAgICAgIC8vIO+/ve+/vdS+77+977+90Kfvv73vv73UtFxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73vv73Uvu+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8g77+977+977+92bbIt++/ve+/vfK/qrnvv71cclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8g77+977+977+9x7Xvv73HsMuuxr3vv73vv73vv73vv73vv73Ztu+/vVxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDvv73vv73vv73dte+/vcew77+977+977+92bbIt++/ve+/ve+/vcO/1qHvv73vv73vv73vv73vv73Ztu+/vVxyXG4gICAgICAgIC8vdGhpcy54U3BlZWTvv73vv73Oqu+/ve+/ve+/ve+/vc6q77+977+9XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+9x7Xvv73vv73Ztsiy77+977+93LPvv73vv73vv73vv73vv73vv73WtVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/vd2177+9x7Dvv73Ztsi477+977+977+977+977+977+9x7Xvv73Ou++/ve+/vVxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDvv73vv73Uvu+/ve+/ve+/ve+/vVxyXG5cclxuICAgICAgICAvL2NjLnDvv73vv70yLjDvv73msb7Wru+/ve+/ve+/ve+/vdan77+91qPvv73vv73vv73OqmNjLlZlY1xyXG4gICAgICAgIC8vY2MuTW92ZUJ5KGR1cmF0aW9uLCBkZWx0YVBvcywgZGVsdGFZKTtcclxuXHJcbiAgICAgICAgLy9jYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnAoMCwgdGhpcy5qdW1wSGVpZ2h0KSnvv73vv73LvO+/ve+/ve+/ve+/vWp1bXBEdXJhdGlvbsqx77+977+977+977+977+9xrbvv73vv73vv71cclxuICAgICAgICAvL++/ve+/ve+/ve+/vdq177+9x7Dvv73ate+/vTAsdGhpcy5qdW1wSGVpZ2h077+977+9zrvvv73vv71cclxuXHJcbiAgICAgICAgLy/vv73vv73rsr/vv73vv71lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkp77+977+977+977+977+977+977+977+9yrLDtO+/vdij77+9ZWFzaW5n77+977+9QWN0aW9uSW50ZXJ2YWzvv73vv73vv73Cte+/vdK777+977+977+977+977+977+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgLy/vv73vv73vv73vv73vv73vv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vc6q0rvvv73Wu++/ve+/ve+/ve+/vcu277+977+977+977+977+977+977+9xLLvv73vv73vv73vv73vv73Su++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vfOjrLfvv73vv73vv73Su++/ve+/vUFjdGlvbkludGVydmFs77+977+977+9zbbvv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICAvL8q577+977+9ZWFzZUN1YmljQWN0aW9uSW5PdXTvv73vv73vv73vv73vv73vv73vv73vv73vv73Eu++/ve+/ve+/ve+/ve+/ve+/ve+/vUVhc2VDdWJpY0luT3V077+9x7Dvv73vv73vv73vv73Ouu+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/veuyou+/vcuz77+977+9xLbvv73vv73vv71cclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy5WZWMyKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XHJcblxyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MuVmVjMigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv73Su++/ve+/ve+/vdi177+977+977+977+977+977+977+977+977+977+977+977+92rbvv73vv73vv73vv73vv73vv73vv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/vce277+977+977+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2MuY2FsbEZ1bmModGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g77+977+977+977+977+92Ljvv73vv73vv73vv73vv73vv73vv73Dv++/ve+/ve+/ve+/ve+/ve+/ve+/vdi277+977+977+977+977+977+977+9w7vYte+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24sIGNhbGxiYWNrKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v77+977+977+977+9Ye+/ve+/ve+/ve+/ve+/ve+/ve+/vSxk77+977+977+90rzvv73vv73vv71cclxuICAgIG9uS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+977+977+977+95rKl77+977+977+977+977+977+9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==