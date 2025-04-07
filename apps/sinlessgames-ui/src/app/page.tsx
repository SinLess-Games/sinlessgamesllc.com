"use client"
import { HomeCard } from "../components/Home/card"
import { Grid } from "@mui/material"
import ColoredLine from "../components/reusable-components/coloredLine"

const IntroCard = {
  title: "Welcome to SinLess Games!",
  description: `SinLess Games is a game development studio that creates highly
    immersive games with well-thought-out storylines and great graphics.
    Founded in February 2018 by Timothy A. Pierce, SinLess Games strives
    to change the gaming industry's focus from profit to immersive
    experiences. They offer services, including game design, development,
    testing, hosting, modding, and custom gaming PC builds. SinLess Games
    also runs a Minecraft server called Mobius Infernium, offering a
    unique and immersive gameplay experience. Join them on a journey where
    game immersion ranks supreme and dreams come true!!!`,
  image:
    "https://cdn.sinlessgamesllc.com/Sinless-Games/images/logos/sinless-games/logo_no_background.webp"
}

export default function Index() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "transparent",
        padding: 3,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Grid
        item
        sx={{
          paddingBottom: "1rem"
        }}
      >
        <br />
        <br />
        <HomeCard
          title={IntroCard.title}
          description={IntroCard.description}
          image={IntroCard.image}
        />
      </Grid>
    </Grid>
  )
}
