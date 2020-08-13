"use strict";
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