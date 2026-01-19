const KB = 1024;

export const size = {
  KB: (value: number) => value * KB,
  MB: (value: number) => value * KB * KB,
  GB: (value: number) => value * KB * KB * KB,
};
