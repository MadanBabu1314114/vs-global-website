export const SPEEDS = { bg: 0.03, orb: 0.05, image: 0.08, card: 0.05, decor: 0.12, text: 0.015 } as const;
export type SpeedName = keyof typeof SPEEDS;
export const speedValue = (s: SpeedName | number) => (typeof s === 'number' ? s : SPEEDS[s]);
