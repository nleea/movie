"use strict";
exports.__esModule = true;
exports.RatingSIze = void 0;
var Rating_1 = require("@mui/material/Rating");
exports.RatingSIze = function (props) {
    return (React.createElement(Rating_1["default"], { name: "size-small", defaultValue: props.average !== null ? props.average : 0, size: "small", max: 10, className: "rating" }));
};
