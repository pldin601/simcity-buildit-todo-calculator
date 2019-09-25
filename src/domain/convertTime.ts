const TIME_REGEXP = /(?:(\d+)h){0,1}(?:(\d+)m){0,1}(?:(\d+)s){0,1}/;

export default function convertTime(time: string): number {
  const [, hours, minutes, seconds] = TIME_REGEXP.exec(time);
  return (+seconds || 0) + (+minutes || 0) * 60 + (+hours || 0) * 3600;
}
