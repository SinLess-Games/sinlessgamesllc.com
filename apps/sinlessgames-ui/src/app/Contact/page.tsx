import { Box, Typography, Grid } from "@mui/material";
import Card from "../../components/reusable-components/card";
import {
  EmailCard,
  DiscordCard,
  GithubCard,
} from "../../variables/Contact/cards";

// Define a type for your contact cards
interface IContactCard {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

export default function Contact() {
  // Cast your imported cards to the new interface
  const contactCards: IContactCard[] = [
    EmailCard,
    DiscordCard,
    GithubCard,
  ];

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 2,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontFamily: '"Italianno", cursive',
          fontWeight: 500,
          fontSize: "8rem",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          border: "0.05rem solid #daa520",
          borderRadius: 50,
          py: 0.5,
          px: 1,
          color: "#daa520",
        }}
      >
        Contact Us
      </Typography>

      <Box sx={{ height: 16 }} />

      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
          backgroundColor: "rgba(0, 0, 0, 0.40)",
          border: "0.05rem solid #daa520",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontFamily: '"Italianno", cursive',
            fontWeight: 500,
            fontSize: "5rem",
            color: "#daa520",
            p: 2,
            textAlign: "center",
          }}
        >
          <strong>Welcome to Our Community!</strong>
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif',
          }}
        >
          We&apos;re incredibly excited to welcome you into our <strong>SinLess Games family</strong>! Whether you&apos;re a gamer, a developer, or 
          simply someone who loves immersive experiences, we&apos;re thrilled to have you here. If you&apos;re interested in 
          <strong>joining our team</strong>, we&apos;re always on the lookout for talented individuals—developers, designers, or passionate gamers. 
          Reach out via <strong>Discord</strong> or <strong>Email</strong> to learn more.
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            mt: 2,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif',
          }}
        >
          And if you&apos;re here to enjoy our games, we&apos;re glad to have you! Follow us on <strong>GitHub</strong> to stay updated on projects, 
          join us on <strong>Discord</strong> to chat with fellow community members, or give us a call if you have questions—we&apos;re here to help.
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            mt: 2,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif',
          }}
        >
          Once again, <strong>welcome</strong>—we can&apos;t wait to embark on this journey together!
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          {contactCards.map((card) => (
            <Grid item key={card.title}>
              <Card
                title={card.title}
                description={card.description}
                link={card.link}
                buttonText={card.buttonText}
                sx={{ maxWidth: 300 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
