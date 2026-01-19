# size-to-bytes

Tiny utility for converting human-friendly sizes (KB/MB/GB) into bytes.

## Install

`npm i size-to-bytes`
or
`pnpm add size-to-bytes`
or
`yarn add size-to-bytes`

## Usage

```
import { size } from "size-to-bytes";

const avatarLimit = size.MB(2);      // 2097152
const uploadLimit = size.MB(10);     // 10485760
const cacheCap = size.GB(1);         // 1073741824
const tinyThing = size.KB(256);      // 262144
```

## API

`size.KB(value: number): number`

Returns value kilobytes in bytes (base-2 / kibibytes: 1 KB = 1024 bytes).

`size.MB(value: number): number`

Returns value megabytes in bytes (1 MB = 1024 KB).

`size.GB(value: number): number`

Returns value gigabytes in bytes (1 GB = 1024 MB).

## Notes

Uses base-2 units (1024) which is typically what you want for file upload limits and memory sizes.

Input can be integers or decimals (`size.MB(1.5)` works).

## License

MIT