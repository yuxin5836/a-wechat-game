"use strict";
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