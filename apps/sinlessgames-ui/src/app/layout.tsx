import React from "react"
import "./global.scss"
import Background from "../components/background"
import type { Metadata } from "next"
import StyledComponentsRegistry from "./lib/registry"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ResponsiveAppBar } from "@sinlessgamesllc/react-components"
import { pages } from "../variables/MainNavbar/pages"

export const metadata: Metadata = {
  metadataBase: new URL("https://sinlessgamesllc.com/"),
  title: "SinLess Games",
  description:
    "SinLess Games is a game development studio that creates highly immersive games with well-thought-out storylines and great graphics.",
  generator: "Next.js",
  creator: "Timothy A. Pierce",
  publisher: "SinLess Games LLC",
  formatDetection: {
    email: true,
    telephone: true,
    address: true
  }
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use CDN URL for the logo
  const logoUrl =
    "https://cdn.sinlessgamesllc.com/Sinless-Games/images/logos/sinless-games/logo_no_background.webp"
  const backgroundUrl =
    "https://cdn.sinlessgamesllc.com/Sinless-Games/images/galaxy_planets.webp"

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <Background $image={backgroundUrl} />
            <ResponsiveAppBar pages={pages} logo={logoUrl} />
            <br />
            {children}
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
