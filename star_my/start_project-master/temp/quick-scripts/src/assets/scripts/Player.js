"use strict";
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