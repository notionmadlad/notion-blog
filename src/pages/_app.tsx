import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import { useEffect } from "react"
import dynamic from "next/dynamic"

const Analytics = dynamic(() => import("@vercel/analytics/react").then((m) => m.Analytics), { ssr: false })
const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then((m) => m.SpeedInsights), { ssr: false })

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          )
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error)
        })
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>
          {getLayout(<Component {...pageProps} />)}
          <Analytics />
          <SpeedInsights />
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
