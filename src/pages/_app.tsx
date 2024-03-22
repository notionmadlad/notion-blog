import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect, Suspense } from "react"

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
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>
            {getLayout(
              <>
                <Suspense fallback={<div>Loading...</div>}>
                  <Component {...pageProps} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                  <Analytics />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                  <SpeedInsights />
                </Suspense>
              </>
            )}
          </RootLayout>
        </Hydrate>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
