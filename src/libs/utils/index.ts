export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: "numeric", month: "short", day: "numeric" }
  const res = d.toLocaleDateString(local, options)
  return res
}

export function getIcon(str: string) {
  const regex = /\{(.+?)#(.+?)\}(.+)/
  const matches = str.match(regex)

  if (matches) {
    return import(`react-icons/${matches[1]}`).then((ReactIcons) => ({
      icon: ReactIcons[matches[2]],
      string: matches[3],
    }))
  } else {
    return {
      icon: null,
      string: str,
    }
  }
}
