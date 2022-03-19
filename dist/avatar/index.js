"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avatarPixel_1 = __importDefault(require("./avatarPixel"));
const avatarBauhaus_1 = __importDefault(require("./avatarBauhaus"));
const avatarRing_1 = __importDefault(require("./avatarRing"));
const avatarBeam_1 = __importDefault(require("./avatarBeam"));
const avatarSunset_1 = __importDefault(require("./avatarSunset"));
const avatarMarble_1 = __importDefault(require("./avatarMarble"));
const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];
const Avatar = ({ variant = 'marble', colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'], name = 'Clara Barton', square = false, size = 40, }) => {
    const avatarData = { colors, name, size, square };
    const avatars = {
        pixel: () => (0, avatarPixel_1.default)(avatarData),
        bauhaus: () => (0, avatarBauhaus_1.default)(avatarData),
        ring: () => (0, avatarRing_1.default)(avatarData),
        beam: () => (0, avatarBeam_1.default)(avatarData),
        sunset: () => (0, avatarSunset_1.default)(avatarData),
        marble: () => (0, avatarMarble_1.default)(avatarData),
    };
    return avatars[variant]();
};
exports.default = Avatar;
//# sourceMappingURL=index.js.map