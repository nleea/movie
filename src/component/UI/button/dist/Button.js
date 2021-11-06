"use strict";
exports.__esModule = true;
exports.Button = void 0;
exports.Button = function (props) {
    return React.createElement("button", { onClick: props.click, disabled: props.disabled }, props.text);
};
