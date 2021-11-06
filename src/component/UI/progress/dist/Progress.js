"use strict";
exports.__esModule = true;
exports.Progress = void 0;
require("./progress.css");
exports.Progress = function (props) {
    return (React.createElement("div", { className: "circular" },
        React.createElement("div", { className: "inner" }),
        React.createElement("div", { className: "number" },
            props.popularity,
            "%"),
        React.createElement("div", { className: "circle" },
            React.createElement("div", { className: "bar left" },
                React.createElement("div", { className: "progress" })),
            React.createElement("div", { className: "bar right" },
                React.createElement("div", { className: "progress" })))));
};
