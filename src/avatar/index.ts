import AvatarPixel from './avatarPixel';
import AvatarBauhaus from './avatarBauhaus';
import AvatarRing from './avatarRing';
import AvatarBeam from './avatarBeam';
import AvatarSunset from './avatarSunset';
import AvatarMarble from './avatarMarble';

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];

export interface AvatarData {
  colors: Array<string>;
  name: string;
  size: number;
  square: boolean;
}

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  square = false,
  size = 40,
}: {
  variant?: 'pixel' | 'bauhaus' | 'ring' | 'beam' | 'sunset' | 'marble';
  colors?: Array<string>;
  name?: string;
  square?: boolean;
  size?: number;
}) => {
  const avatarData: AvatarData = { colors, name, size, square };
  const avatars: Record<string, () => string> = {
    pixel: () => AvatarPixel(avatarData),
    bauhaus: () => AvatarBauhaus(avatarData),
    ring: () => AvatarRing(avatarData),
    beam: () => AvatarBeam(avatarData),
    sunset: () => AvatarSunset(avatarData),
    marble: () => AvatarMarble(avatarData),
  };
  return avatars[variant]();
};

export default Avatar;
