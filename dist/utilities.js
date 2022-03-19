"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrast = exports.getRandomColor = exports.getUnit = exports.getAngle = exports.getBoolean = exports.getDigit = exports.getModulus = exports.hashCode = void 0;
const hashCode = (name) => {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
        var character = name.charCodeAt(i);
        hash = (hash << 5) - hash + character;
        hash = hash & hash;
    }
    return Math.abs(hash);
};
exports.hashCode = hashCode;
const getModulus = (num, max) => {
    return num % max;
};
exports.getModulus = getModulus;
const getDigit = (number, ntn) => {
    return Math.floor((number / Math.pow(10, ntn)) % 10);
};
exports.getDigit = getDigit;
const getBoolean = (number, ntn) => {
    return !((0, exports.getDigit)(number, ntn) % 2);
};
exports.getBoolean = getBoolean;
const getAngle = (x, y) => {
    return (Math.atan2(y, x) * 180) / Math.PI;
};
exports.getAngle = getAngle;
const getUnit = (number, range, index) => {
    let value = number % range;
    if (index && (0, exports.getDigit)(number, index) % 2 === 0) {
        return -value;
    }
    else
        return value;
};
exports.getUnit = getUnit;
const getRandomColor = (number, colors, range) => {
    return colors[number % range];
};
exports.getRandomColor = getRandomColor;
const getContrast = (hexcolor) => {
    if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolor.slice(1);
    }
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#FFFFFF';
};
exports.getContrast = getContrast;
//# sourceMappingURL=utilities.js.map