import { Box, Grid, Typography } from "@mui/material"
import Card from "../../components/reusable-components/card"
import ServiceCards from "../../variables/Services/cards"

export default function Services() {
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
        Services
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
          variant="body1"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.5rem",
            fontFamily: '"Mate SC", serif'
          }}
        >
          At SinLess Games, we are dedicated to providing a diverse range of
          services tailored to the gaming community. We strive to make
          high-quality gaming experiences accessible to everyone, whether
          you&apos;re looking for budget-friendly options or top-of-the-line
          equipment. Our commitment to affordability means that we work hard to
          keep our services accessible without compromising on quality. Above
          all, we are here to cater to your needs and ensure that your gaming
          experience is nothing short of exceptional. Join us, and let the fun
          begin with your own custom gaming experience.
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
              title={ServiceCards.gameDesignCard.title}
              description={ServiceCards.gameDesignCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.webDesignCard.title}
              description={ServiceCards.webDesignCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.customPCsCard.title}
              description={ServiceCards.customPCsCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.communityCard.title}
              quote={ServiceCards.communityCard.quote}
              description={ServiceCards.communityCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.techResearchCard.title}
              description={ServiceCards.techResearchCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.homeNetworkCard.title}
              description={ServiceCards.homeNetworkCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.smartHomeCard.title}
              description={ServiceCards.smartHomeCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.homeAutomationCard.title}
              description={ServiceCards.homeAutomationCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
          <Grid item>
            <Card
              title={ServiceCards.homeSecurityCard.title}
              description={ServiceCards.homeSecurityCard.description}
              sx={{ maxWidth: 300 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
