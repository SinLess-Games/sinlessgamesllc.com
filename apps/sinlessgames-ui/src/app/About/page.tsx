import { Grid, Typography, Box } from "@mui/material"
import Card from "../../components/reusable-components/card"
import { MissionCard, VisionCard, TeamCard } from "../../variables/About/cards"

export default function AboutUs() {
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
        About Us
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
            title={MissionCard.title}
            description={MissionCard.description}
            sx={{ maxWidth: 300 }}
          />
        </Grid>
        <Grid item>
          <Card
            title={VisionCard.title}
            description={VisionCard.description}
            sx={{ maxWidth: 300 }}
          />
        </Grid>
        <Grid item>
          <Card
            title={TeamCard.title}
            description={TeamCard.description}
            sx={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>
      <br />
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: 20,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h3"
          sx={{
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
          Our Story
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
            borderRadius: 20,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            border: "0.05rem solid #daa520"
          }}
        >
          <Typography
            variant="body1"
            sx={{
              paddingBottom: 2,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 4,
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#daa520",
              textAlign: "center"
            }}
          >
            In the quiet of a humble room, amidst the glow of a computer screen,
            the seeds of a dream were sown. It was here, in the heart of
            innovation, that SinLess Gaming and Programming began its journey.
            Picture a young dreamer, Timothy A. Pierce, pondering the state of
            modern gaming. Frustration seeped into his soul as he longed for
            immersive experiences that seemed lost in a sea of profit-driven
            ventures. But one pivotal moment changed everything.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              paddingBottom: 2,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 2,
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#daa520",
              textAlign: "center"
            }}
          >
            In the midst of doubt, a whisper echoed in his mind, &apos;Do
            something about it. You&apos;ve found a need in an industry. Now,
            you can fix it.&apos; With those words igniting a fire within him,
            Timothy embarked on a quest to redefine gaming. He is gathering
            like-minded souls, forming a team driven by passion and innovation.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              paddingBottom: 2,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 2,
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#daa520",
              textAlign: "center"
            }}
          >
            SinLess Gaming and Programming wasn&apos;t just about creating
            games; it was about crafting experiences that transcended reality.
            Through sleepless nights and tireless dedication, they honed their
            craft, blending cutting-edge technology with timeless storytelling.
            Their journey wasn&apos;t without challenges. Doubt crept in,
            setbacks threatened to derail them, but their resolve remained
            unyielding. With every obstacle conquered, their vision grew
            clearer, their purpose stronger.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              paddingBottom: 2,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 2,
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#daa520",
              textAlign: "center"
            }}
          >
            Today, SinLess Gaming and Programming stands as a tiny beacon of
            inspiration in the gaming industry. Their games are meant to
            transport players to worlds beyond imagination, where dreams are
            realized and boundaries are shattered. But their story is far from
            over. With every game created, they strive for greater heights,
            pushing the boundaries of what&apos;s possible and inspiring others
            to follow their dreams.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              paddingBottom: 2,
              paddingRight: 4,
              paddingLeft: 4,
              paddingTop: 2,
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#daa520",
              textAlign: "center"
            }}
          >
            Join us on this awe-inspiring journey, where passion meets purpose,
            and impossibility is merely a stepping stone to greatness. This is
            our story. This is SinLess Games LLC.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
