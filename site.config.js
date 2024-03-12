const CONFIG = {
  profile: {
    name: "Martin Notion",
    image: "/madlad.jpg",
    role: "Notion Creator",
    bio: "Get your life and business on track with my tips and Notion Templates.",
    email: "martin.nicolai.online@gmail.com",
    linkedin: "martinwriter1",
    github: "",
    instagram: "martinwriter_",
    twitter: "notionmadlad"
  },
  links: [
    { 
      id: 1, 
      name: "About", 
      to: "/about" 
    },
    {
      id: 2,
      name: "Store",
      to: "/store"
    }
  ],
  projects: [
    {
      name: `Leads Hub - Product Hunt`,
      href: "https://www.producthunt.com/products/leads-hub",
    },
  ],
  blog: {
    title: "The Madlad Blog",
    description: "The Madlad Blog - The Notion powered blog made my @notionmadlad",
  },

  link: "https://blog.madlad.store",
  since: 2023,
  lang: "en-US",
  ogImageGenerateURL: "https://og-image-korean.vercel.app",
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 60,
}

module.exports = { CONFIG }
