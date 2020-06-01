
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