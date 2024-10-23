import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import Grid from "@mui/material/Grid"

export interface CardProps {
  title: string
  description: string
  image: string
}

export const HomeCard: React.FC<CardProps> = ({
  title,
  description,
  image
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        border: "0.05rem solid #daa520",
        borderRadius: 10,
        padding: 4
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Italianno", cursive',
          fontWeight: 550,
          fontSize: "8rem",
          textAlign: "center",
          color: "#daa520"
        }}
      >
        {title}
      </Typography>
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/** Image 1 Large */}
        <Grid
          item
          sx={{
            maxWidth: "50%",
            display: { xs: "none", sm: "none", md: "none", lg: "flex" }
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image src={image} alt={title} width={400} height={300} />
          </Box>
        </Grid>
        {/** Image 2 Medium */}
        <Grid
          item
          sx={{
            maxWidth: "50%",
            display: { xs: "none", sm: "none", md: "flex", lg: "none" }
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={image} alt={title} width={350} height={250} />
          </Box>
        </Grid>
        {/** Image 3 small and smaller */}
        <Grid item sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
          <Box>
            <Image src={image} alt={title} width={350} height={250} />
          </Box>
        </Grid>

        <Grid
          item
          sx={{ maxWidth: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
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
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
