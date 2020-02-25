"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
// const Button = styled.button`
//   background-color: white;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;
// const Button = React.forwardRef((props, ref) => {
//   return (
//     <StyledButton ref={ref} {...props} >
//       {props.children}
//     </StyledButton>
//   );
// });
// export default Button;
var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
    console.log("Props:", props);
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("button", null, " ", this.props.children, " "));
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