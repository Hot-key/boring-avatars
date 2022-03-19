# Boring Avatars Svg

forked from [boring avatars](https://boringavatars.com/)

![hi](https://badgen.net/npm/v/boring-avatars-svg)

## Install

```
npm i boring-avatars-svg
```

or

```
yarn add boring-avatars-svg
```

## Usage

```typescript
import Avatar from 'boring-avatars';

// return svg string
console.log(
  Avatar({
    variant: 'marble',
    colors: ['#FA5252', '#FADB6B', '#FA8C5F', '#FA8C5F', '#FADB6B'],
    name: 'hotkey',
    square: false,
    size: 40,
  }),
);
```
