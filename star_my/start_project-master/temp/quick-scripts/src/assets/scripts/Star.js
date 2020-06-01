"use strict";
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