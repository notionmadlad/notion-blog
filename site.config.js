const config = {
  blog: {
    title: "The Madlad Blog",
    description:
      "The Madlad Blog - The Notion powered blog made my @notionmadlad",
  },
  navLinks: {
    About: "/about",
    Store: "https://gumroad.madlad.store"
  },
  profile: {
    name: "Notion Madlad",
    email: "martin.nicolai.online@gmail.com",
    github: "notionmadlad",
    image: "/images/512.png"
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      ["issue-term"]: "og:title",
      label: "Utterances",
    },
  },
  notionPage: process.env.NOTION_PAGE_ID,
  link: "https://blog.madlad.store",
  lang: "en-US",
  since: 2023,
  revalidateTime: 60,
}

module.exports = config
