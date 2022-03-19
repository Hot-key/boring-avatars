"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const ELEMENTS = 4;
const SIZE = 80;
function generateColors(name, colors) {
    const numFromName = (0, utilities_1.hashCode)(name);
    const range = colors && colors.length;
    const colorsList = Array.from({ length: ELEMENTS }, (_, i) => (0, utilities_1.getRandomColor)(numFromName + i, colors, range));
    return colorsList;
}
const AvatarSunset = ({ name, colors, size, square }) => {
    const sunsetColors = generateColors(name, colors);
    const replaceName = name.replace(/\s/g, '');
    return `
    <svg
      viewBox="0 0 ${SIZE} ${SIZE}"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
    >
      <title>${name}</title>
      <mask id="mask__sunset" maskUnits="userSpaceOnUse" x="0" y="0" width="${SIZE}" height="${SIZE}">
        <rect width="${SIZE}" height="${SIZE}" ${square ? '' : `rx="${SIZE * 2}`}" fill="#FFFFFF" />
      </mask>
      <g mask="url(#mask__sunset)">
        <path fill=url(#gradient_paint0_linear_${replaceName}) d="M0 0h80v40H0z" />
        <path fill=url(#gradient_paint1_linear_${replaceName}) d="M0 40h80v40H0z" />
      </g>
      <defs>
        <linearGradient
          id="gradient_paint0_linear_${replaceName}"
          x1="${SIZE / 2}"
          y1="0"
          x2="${SIZE / 2}"
          y2="${SIZE / 2}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="${sunsetColors[0]}" />
          <stop offset="1" stopColor="${sunsetColors[1]}" />
        </linearGradient>
        <linearGradient
          id="gradient_paint1_linear_${replaceName}"
          x1="${SIZE / 2}"
          y1="${SIZE / 2}"
          x2="${SIZE / 2}"
          y2="${SIZE}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="${sunsetColors[2]}" />
          <stop offset="1" stopColor="${sunsetColors[3]}" />
        </linearGradient>
      </defs>
    </svg>
    `;
};
exports.default = AvatarSunset;
//# sourceMappingURL=avatarSunset.js.map