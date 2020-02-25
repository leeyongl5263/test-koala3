"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tokens = _interopRequireDefault(require("@ensightful/tokens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disabledStyles = "\n  box-shadow: none;\n  color: grey;\n  text-decoration: none;\n  text-shadow: none;\n  background-color:".concat(_tokens["default"].color.blackLighten70, ";\n  pointer-events:none;\n\n  &:focus {\n    box-shadow: none;\n    text-shadow: none;\n    transform: none;\n  }\n");
var noStyle = "\n  background-color:none;\n  border:none;\n  color:".concat(_tokens["default"].color.brandPurple, ";\n");

function sizeStyles(props) {
  var FontSize = "font-size: ";

  switch (props.size) {
    case "small":
      FontSize += "14px; ".concat(_tokens["default"].button.sizes.small, ";");
      break;

    case "medium":
      FontSize += "16px; ".concat(_tokens["default"].button.sizes.medium, ";");
      break;

    case "large":
      FontSize += "18px; ".concat(_tokens["default"].button.sizes.large, ";");
      break;

    case "long":
      FontSize += "16px; ".concat(_tokens["default"].button.sizes["long"], ";");
      break;

    case "xtralong":
      FontSize += "16px; ".concat(_tokens["default"].button.sizes.xtralong, ";");
      break;
  }

  return FontSize + "justify-content: center;";
}

function getColor(props) {
  var backgroundColor = "background-color: ";

  switch (props.kind) {
    case "default":
      backgroundColor += "".concat(_tokens["default"].color.brandPurple);
      break;

    case "primary":
      backgroundColor += "".concat(_tokens["default"].color.brandPurple);
      break;

    case "secondary":
      backgroundColor += "".concat(_tokens["default"].color.purple);
      break;

    case "destructive":
      backgroundColor += "".concat(_tokens["default"].color.brandRed);
      break;

    case "accent":
      backgroundColor += "".concat(_tokens["default"].color.brandOrange);
      break;
  }

  return backgroundColor + ";\n         &:hover {".concat(backgroundColor + "CC", ";}");
}

var ButtonWithStyle = _styledComponents["default"].button.withConfig({
  displayName: "Buttonstyles__ButtonWithStyle",
  componentId: "sc-17m4omw-0"
})(["font-family:", ";border-radius:8px;border-style:solid;border-width:1px;box-sizing:border-box;cursor:pointer;display:inline-flex;font-weight:bold;color:#FFFFFF;font-size:18px;letter-spacing:1.5px;text-align:center;vertical-align:middle;text-decoration:none;outline:none;align-items:center;", " ", " ", " ", ""], _tokens["default"].fontFamily["default"], function (props) {
  return getColor(props);
}, function (props) {
  return props.disabled ? disabledStyles : "";
}, function (props) {
  return props.kind == "nostyle" ? noStyle : "";
}, function (props) {
  return sizeStyles(props);
});

var _default = ButtonWithStyle;
exports["default"] = _default;