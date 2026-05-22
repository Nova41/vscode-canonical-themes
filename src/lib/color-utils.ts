export function blend(fg: string, bg: string, opacity: number): string {
  const f = parseHex(fg);
  const b = parseHex(bg);
  const r = Math.round(f[0] * opacity + b[0] * (1 - opacity));
  const g = Math.round(f[1] * opacity + b[1] * (1 - opacity));
  const blue = Math.round(f[2] * opacity + b[2] * (1 - opacity));
  return `#${hex(r)}${hex(g)}${hex(blue)}`;
}

function parseHex(color: string): [number, number, number] {
  let c = color.replace('#', '');
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  return [
    parseInt(c.slice(0, 2), 16),
    parseInt(c.slice(2, 4), 16),
    parseInt(c.slice(4, 6), 16),
  ];
}

function hex(n: number): string {
  return n.toString(16).padStart(2, '0').toUpperCase();
}
