import { Box, Typography, Grid } from "@mui/material"
import Card from "../../components/reusable-components/card"
import {
  EmailCard,
  DiscordCard,
  GithubCard
} from "../../variables/Contact/cards"

export default function Contact() {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.25)"
      }}
    >
      <Typography
        variant="h2"
        sx={{
          jtextAlign: "center",
          fontFamily: '"Italianno", cursive',
          fontWeight: 500,
          fontSize: "8rem",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          border: "0.05rem solid #daa520",
          borderRadius: 50,
          paddingTop: ".5rem",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          color: "#daa520"
        }}
      >
        Contact Us
      </Typography>
      <br />
      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "rgba(0, 0, 0, 0.40)",
          border: "0.05rem solid #daa520"
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Italianno", cursive',
            fontWeight: 500,
            fontSize: "5rem",
            color: "#daa520",
            padding: 2
          }}
        >
          Welcome to Our Community!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif'
          }}
        >
          We&apos;re incredibly excited to welcome you into our community!
          Whether you&apos;re a gamer, a developer, or simply someone who loves
          immersive experiences, we&apos;re thrilled to have you here. At
          SinLess Games, we&apos;re more than just a game development studio;
          We&apos;re a family of passionate individuals dedicated to creating
          unforgettable experiences. If you&apos;re interested in joining our
          team, we&apos;re always on the lookout for talented individuals who
          share our passion for immersive gaming. Whether you&apos;re a skilled
          developer, a creative designer, or just someone with a love for
          gaming, we&apos;d love to hear from you. Reach out to us via Discord
          or Email to learn more about joining our team.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif'
          }}
        >
          And if you&apos;re just here to enjoy our games and be a part of our
          community, we&apos;re glad to have you! Follow us on GitHub to stay
          updated on our latest projects and join us on Discord to chat with
          fellow gamers and developers. If you have any questions or would like
          to inquire about our services, please don&apos;t hesitate to give us a
          call. We&apos;re here to help in any way we can, and we&apos;re always
          happy to hear from you.
        </Typography>
        <Typography
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif'
          }}
        >
          Once again, welcome to our community. We&apos;re excited to have you
          here, and we can&apos;t wait to embark on this journey together!
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 4
          }}
        >
          <Grid item>
            <Card
              title={EmailCard.title}
              description={EmailCard.description}
              link={EmailCard.link}
              buttonText={EmailCard.buttonText}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={DiscordCard.title}
              description={DiscordCard.description}
              link={DiscordCard.link}
              buttonText={DiscordCard.buttonText}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={GithubCard.title}
              description={GithubCard.description}
              link={GithubCard.link}
              buttonText={GithubCard.buttonText}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
