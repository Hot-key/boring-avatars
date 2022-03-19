export interface AvatarData {
    colors: Array<string>;
    name: string;
    size: number;
    square: boolean;
}
declare const Avatar: ({ variant, colors, name, square, size, }: {
    variant?: 'pixel' | 'bauhaus' | 'ring' | 'beam' | 'sunset' | 'marble';
    colors?: Array<string>;
    name?: string;
    square?: boolean;
    size?: number;
}) => string;
export default Avatar;
