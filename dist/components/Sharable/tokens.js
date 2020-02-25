"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _color;

var tokens = {
  color: (_color = {
    black: "#000000",
    blackLighten10: "#262626",
    blackLighten20: "#2C2C2C",
    blackLighten30: "#3C3C3C",
    blackLighten40: "#8D8D8D",
    blackLighten50: "#B6B7B8",
    blackLighten60: "#BBBBBC",
    blackLighten70: "#E0E1E1",
    blackLighten80: "#E5E5E5",
    blackLighten90: "#ECECEC",
    blackDisabled: "#F4F5F7",
    greyLighten90: "#F8F9FB",
    greyLighten80: "#F4F4F4"
  }, (0, _defineProperty2["default"])(_color, "greyLighten80", "#F4F5F7"), (0, _defineProperty2["default"])(_color, "white", "#FFFFFF"), (0, _defineProperty2["default"])(_color, "skyblue", "#33A9F5"), (0, _defineProperty2["default"])(_color, "yellow", "#FFBA53"), (0, _defineProperty2["default"])(_color, "yellowLighten80", "#FFF0DA"), (0, _defineProperty2["default"])(_color, "purple", "#8F7EE5"), (0, _defineProperty2["default"])(_color, "purpleLighten70", "#E0DBFF"), (0, _defineProperty2["default"])(_color, "purpleLighten20", "#937FFF"), (0, _defineProperty2["default"])(_color, "darkBlue", "#5353F0"), (0, _defineProperty2["default"])(_color, "uiAction", "#0068FF"), (0, _defineProperty2["default"])(_color, "brandGreen", "#4DD87A"), (0, _defineProperty2["default"])(_color, "brandOrange", "#FF9A21"), (0, _defineProperty2["default"])(_color, "brandOrangeLighten70", "#E7CEC5"), (0, _defineProperty2["default"])(_color, "brandBlue", "#6347FF"), (0, _defineProperty2["default"])(_color, "brandPurple", "#9E35EB"), (0, _defineProperty2["default"])(_color, "brandRed", "#F8591E"), _color),
  space: "8px",
  spaceSm: "4px",
  spaceLg: "12px",
  highlight: {
    active: {
      noBorder: {
        boxShadow: "0 0 0 2px #99cbfc",
        insetBoxShadow: "inset 0 0 0 2px #99cbfc",
        borderColor: "#276cf5"
      },
      withBorder: {
        boxShadow: "0 0 0 1px #276cf5, 0 0 0 3px #99cbfc",
        insetBoxShadow: "inset 0 0 0 1px #276cf5, inset 0 0 0 3px #99cbfc"
      }
    },
    text: {
      green: {
        background: "#e7f3ed",
        font: "#23523a"
      },
      orange: {
        background: "#fae7e3",
        font: "#932b18"
      },
      yellow: {
        background: "#f7f3ba",
        font: "#63480c"
      }
    }
  },
  textColor: {
    "default": "#3f3d3c",
    subtle: "#717171",
    link: "#0063c5",
    linkHover: "#004a94",
    icon: "#717171"
  },
  inputbox: {
    backgroundColor: {
      "default": "#F6F6F6",
      search: "#FFFFFF"
    },
    borderColor: {
      "default": "#E0E1E1"
    },
    borderRadius: {
      "default": "8px"
    },
    width: {
      "default": "607px"
    },
    height: {
      "default": "60px",
      textarea: "128px"
    },
    fontSize: {
      "default": "18px",
      search: "16px"
    },
    placeholderColor: {
      "default": "#8D8D8D",
      search: "#BFBFC0"
    }
  },
  fontFamily: {
    "default": '"sofia-pro", sans-serif'
  },
  table: {
    header: {
      backgroundColor: "#edebe8"
    },
    row: {
      backgroundColor: "white"
    },
    rowEven: {
      backgroundColor: "#f5f5f5"
    }
  },
  border: {
    radius: "3px",
    color: "#d7d7d7",
    hoverColor: "#a4a4a4",
    colorTransition: "border-color 0.2s"
  },
  button: {
    borderRadius: "4px",
    sizes: {
      small: "height:50px; width: 207px;",
      medium: "height:60px; width:180px",
      large: "height: 50px; width:227px",
      "long": "padding: 9px; width: 20%",
      xtralong: "padding: 9px; width: 30%"
    },
    fontSize: {
      "default": "24px",
      profile: "14px"
    }
  },
  label: {
    fonts: {
      level1: "14px;",
      level2: "16px;",
      level3: "18px;"
    }
  },
  title: {
    fonts: {
      level1: "42px;",
      level2: "28px;",
      level3: "24px;",
      level4: "21px;"
    }
  },
  tag: {
    borderRadius: "6px",
    sizes: {
      xsmall: "width:86px; height:27px;",
      small: " width:116px; height:27px;",
      medium: "width:149px; height:27px",
      large: "width:176px; height:38px"
    }
  },
  icontag: {
    sizes: {
      small: " width:30px; height:38px;",
      medium: "width:35px; height:38px;",
      large: " width:86px; height:38px;"
    }
  },
  dropDownList: {
    borderRadius: "8px",
    height: "35px"
  },
  backgroundColor: {
    level0: "#f7f7f7"
  },
  fontSize: {
    "default": "16px"
  },
  shadow: "0px 1px 5px rgba(0,0,0,0.07),0px 7px 17px rgba(0,0,0,0.1)",
  statusColor: {
    online: "#6BDE80",
    busy: "#F06400",
    away: "#F8A400"
  },
  dot: {
    dotSize: "7px",
    fontSize: "12px",
    fontColor: "#FFFFFF"
  },
  iconButton: {
    width: "42px",
    height: "42px",
    borderRadius: "8px",
    borderColor: {
      "default": "#DDDFE0",
      onFocus: "#CDCDCD"
    },
    backgroundColor: {
      "default": "#F6F6F6",
      onFocus: "#CDCDCD"
    }
  }
};
var _default = tokens;
exports["default"] = _default;