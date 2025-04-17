import { Box, Grid, Typography } from "@mui/material";
import Card, {CardProps} from "../../components/reusable-components/card";
import ServiceCards from "../../variables/Services/cards";

export default function Services() {
  // Create an array of card objects for easy mapping.
  const serviceCards: CardProps[] = [
    ServiceCards.gameDesignCard,
    ServiceCards.webDesignCard,
    ServiceCards.customPCsCard,
    ServiceCards.communityCard,
    ServiceCards.techResearchCard,
    ServiceCards.homeNetworkCard,
    ServiceCards.smartHomeCard,
    ServiceCards.homeAutomationCard,
    ServiceCards.homeSecurityCard,
  ];

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center", // fixed typo
          fontFamily: '"Italianno", cursive',
          fontWeight: 500,
          fontSize: "8rem",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          border: "0.05rem solid #daa520",
          borderRadius: 50,
          paddingTop: ".5rem",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          color: "#daa520",
        }}
      >
        Services
      </Typography>
      <Box sx={{padding: 2}}/>
      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "rgba(0, 0, 0, 0.40)",
          border: "0.05rem solid #daa520",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif',
          }}
          component="div" // allows HTML tags within the content
        >
          At <strong>SinLess Games</strong>, we are dedicated to providing a diverse range of services tailored to the gaming community. 
          We strive to make high-quality gaming experiences accessible to everyone, whether you&apos;re looking for budget-friendly options 
          or top-of-the-line equipment. Our commitment to affordability means that we work hard to keep our services accessible without 
          compromising on quality. Above all, we are here to cater to your needs and ensure that your gaming experience is <strong>nothing 
          short of exceptional</strong>. Join us, and let the fun begin with your own custom gaming experience.
        </Typography>
        
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          {serviceCards.map((card, index) => (
            <Grid item key={index}>
              <Card
                title={card.title}
                description={card.description}
                // if the card includes a quote, pass it along.
                {...(card.quote && { quote: card.quote })}
                sx={{ maxWidth: 300, maxHeight: 600, margin: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
