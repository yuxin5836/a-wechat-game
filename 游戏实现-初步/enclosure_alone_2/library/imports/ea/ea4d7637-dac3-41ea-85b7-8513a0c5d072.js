"use strict";
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