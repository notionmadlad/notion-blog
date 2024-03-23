export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: "numeric", month: "short", day: "numeric" }
  const res = d.toLocaleDateString(local, options)
  return res
}

export async function getIcon(str: string) {
  const regex = /\{(.+?)#(.+?)\}(.+)/;
  const matches = str.match(regex);

  if (matches) {
    const ReactIcons = await import(`node_modules/react-icons/${matches[1]}`);
    const result = {
      icon: ReactIcons[matches[2]],
      string: matches[3]
    };
    return result;
  } else {
    return {
      icon: null,
      string: str
    };
  }
}