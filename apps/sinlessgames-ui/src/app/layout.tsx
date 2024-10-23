import React from "react"
import "./global.scss"
import Background from "../components/background"
import type { Metadata } from "next"
import StyledComponentsRegistry from "./lib/registry"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ResponsiveAppBar } from "@sinlessgamesllc/react-components"
import { pages } from "../variables/MainNavbar/pages"
import Logo from "../../public/images/3.png"

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
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <Background $image="https://img.freepik.com/free-photo/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai_188544-15599.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708128000&semt=ais" />
            <ResponsiveAppBar pages={pages} logo={Logo} />
            <br />
            {children}
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
