"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    background: palevioletred;\n    color: white;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import tokens from '../Sharable/tokens';
// import PropTypes from "prop-types";
// const Kinds = {
//   DEFAULT: "default",
//   PRIMARY: "primary",
//   SECONDARY: "secondary",
//   DESTRUCTIVE: "destructive",
//   ACCENT: "accent",
//   NOSTYLE: "nostyle"
// };
// const ButtonSizes = {
//   SMALL: "small",
//   MEDIUM: "medium",
//   LARGE: "large",
//   LONG: "long",
//   XTRALONG: "xtralong"
// };
// const propTypes = {
//   children: PropTypes.node,
//   kind: PropTypes.oneOf(Object.values(Kinds)),
//   size: PropTypes.oneOf(Object.values(ButtonSizes))
// };
// const defaultProps = {
//   children: null,
//   kind: Kinds.DEFAULT,
//   size: ButtonSizes.MEDIUM
// };
// const disabledStyles = `
//   box-shadow: none;
//   color: grey;
//   text-decoration: none;
//   text-shadow: none;
//   background-color:${tokens.color.blackLighten70};
//   pointer-events:none;
//   &:focus {
//     box-shadow: none;
//     text-shadow: none;
//     transform: none;
//   }
// `;
// const noStyle = `
//   background-color:none;
//   border:none;
//   color:${tokens.color.brandPurple};
// `;
// function sizeStyles(props) {
//   let FontSize = `font-size: `
//   switch (props.size) {
//     case "small":
//       FontSize += `14px; ${tokens.button.sizes.small};`;
//       break;
//     case "medium":
//       FontSize += `16px; ${tokens.button.sizes.medium};`;
//       break;
//     case "large":
//       FontSize += `18px; ${tokens.button.sizes.large};`;
//       break;
//     case "long":
//       FontSize += `16px; ${tokens.button.sizes.long};`;
//       break;
//     case "xtralong":
//       FontSize += `16px; ${tokens.button.sizes.xtralong};`;
//       break;
//   }
//   return (
//     FontSize + `justify-content: center;`
//   );
// }
// function getColor(props) {
//   let backgroundColor = `background-color: `;
//   switch (props.kind) {
//     case "default":
//       backgroundColor += `${tokens.color.brandPurple}`;
//       break;
//     case "primary":
//       backgroundColor += `${tokens.color.brandPurple}`;
//       break;
//     case "secondary":
//       backgroundColor += `${tokens.color.purple}`;
//       break;
//     case "destructive":
//       backgroundColor += `${tokens.color.brandRed}`;
//       break;
//     case "accent":
//       backgroundColor += `${tokens.color.brandOrange}`;
//       break;
//   }
//   return (
//     backgroundColor +
//     `;
//          &:hover {${backgroundColor + "CC"};}`
//   );
// }
// const ButtonWithStyle = styled.button`
//   font-family: ${tokens.fontFamily.default};
//   border-radius: 8px;
//   border-style: solid;
//   border-width: 1px;
//   box-sizing: border-box;
//   cursor: pointer;
//   display: inline-flex;
//   font-weight: bold;
//   color:#FFFFFF ;
//   font-size: 18px;
//   letter-spacing: 1.5px;
//   text-align: center;
//   vertical-align: middle;
//   text-decoration: none;
//   outline: none;
//   align-items: center; /* make text center in FF*/
//   ${props => getColor(props)}
//   ${props => (props.disabled ? disabledStyles : "")}
//   ${props => (props.kind == "nostyle" ? noStyle : "")}
//   ${props => sizeStyles(props)}
// `;
// const Button = ({ type = "text", label, value, onChange }) => (
//   <div className="simple-form-group">
//     {styled.button``}
//     {/* <button style={{ backgroundColor: "white"}}> Test </button> */}
//   </div>
// );
// export default Button;
var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "gdhhuq-0"
})(["background-color:white;border-radius:3px;border:2px solid palevioletred;color:palevioletred;margin:0.5em 1em;padding:0.25em 1em;", ""], function (props) {
  return props.primary && css(_templateObject());
});

var Button =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Button, _React$Component);

  function Button(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Button);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Button).call(this, props));
    console.log("Props:", props);
    return _this;
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(StyledButton, null, this.props.children));
    }
  }]);
  return Button;
}(_react["default"].Component); // function Button() {
// }
// function Button() {
//   return (
//     <styledButton>Test</styledButton>  
//   );
// }
// // const Button = ({ props }) => {
// //   console.log("Props:",props);
// //   return <StyleButton> { props }</StyleButton>
// // }
// export default Button


exports["default"] = Button;