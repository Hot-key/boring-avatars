"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const ELEMENTS = 4;
const SIZE = 80;
function generateColors(name, colors) {
    const numFromName = (0, utilities_1.hashCode)(name);
    const range = colors && colors.length;
    const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
        color: (0, utilities_1.getRandomColor)(numFromName + i, colors, range),
        translateX: (0, utilities_1.getUnit)(numFromName * (i + 1), SIZE / 2 - (i + 17), 1),
        translateY: (0, utilities_1.getUnit)(numFromName * (i + 1), SIZE / 2 - (i + 17), 2),
        rotate: (0, utilities_1.getUnit)(numFromName * (i + 1), 360),
        isSquare: (0, utilities_1.getBoolean)(numFromName, 2),
    }));
    return elementsProperties;
}
const AvatarBauhaus = ({ name, colors, size, square }) => {
    const properties = generateColors(name, colors);
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
      <mask id="mask__bauhaus" maskUnits="userSpaceOnUse" x="0" y="0" width="${SIZE}" height="${SIZE}">
        <rect width="${SIZE}" height="${SIZE}" ${square ? '' : `rx="${SIZE * 2}"`} fill="#FFFFFF" />
      </mask>
      <g mask="url(#mask__bauhaus)">
        <rect width="${SIZE}" height="${SIZE}" fill="${properties[0].color}" />
        <rect
          x="${(SIZE - 60) / 2}"
          y="${(SIZE - 20) / 2}"
          width="${SIZE}"
          height="${properties[1].isSquare ? SIZE : SIZE / 8}"
          fill="${properties[1].color}"
          transform="
            translate(${properties[1].translateX} ${properties[1].translateY})
            rotate(${properties[1].rotate} ${SIZE / 2} ${SIZE / 2})"
        />
        <circle
          cx="${SIZE / 2}"
          cy="${SIZE / 2}"
          fill="${properties[2].color}"
          r="${SIZE / 5}"
          transform="
            translate(${properties[2].translateX} ${properties[2].translateY})"
        />
        <line
          x1="0"
          y1="${SIZE / 2}"
          x2="${SIZE}"
          y2="${SIZE / 2}"
          stroke-width="2"
          stroke="${properties[3].color}"
          transform="
            translate(${properties[3].translateX} ${properties[3].translateY})
            rotate(${properties[3].rotate} ${SIZE / 2} ${SIZE / 2})"
        />
      </g>
    </svg>
  `;
};
exports.default = AvatarBauhaus;
//# sourceMappingURL=avatarBauhaus.js.map