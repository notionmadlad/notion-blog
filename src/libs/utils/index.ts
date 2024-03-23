import dynamic from "next/dynamic"

export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: "numeric", month: "short", day: "numeric" }
  const res = d.toLocaleDateString(local, options)
  return res
}

export function getIcon(str: string) {
  const regex = /\{(.+?)#(.+?)\}(.+)/;
  const matches = str.match(regex);

  if (matches) {
    const ReactIcon = dynamic(() => import(`react-icons/${matches[1]}`).then(m => m[matches[2]]));
    const result = {
      icon: ReactIcon,
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