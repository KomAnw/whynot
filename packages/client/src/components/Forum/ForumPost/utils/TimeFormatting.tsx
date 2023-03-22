export function TimeFormatting(data: string) {
  const time = new Date(data);

  return `${time.getDay()}.${time.getMonth() + 1}.${time.getFullYear()}
  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}
