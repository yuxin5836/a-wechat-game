
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