export function getUserTimeZone() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return timeZone
}
