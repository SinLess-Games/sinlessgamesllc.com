import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Link from "next/link"
import Image from "next/image"

export interface CardProps {
  title: string
  description?: string
  image?: string
  link?: string
  buttonText?: string
  quote?: string
  sx?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  buttonText,
  quote,
  sx
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        border: "0.05rem solid #daa520",
        borderRadius: 10,
        padding: 4,
        ...(sx || {}) // Merge with any additional styles passed in via `sx`
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mt: 2,
          textAlign: "center",
          color: "#daa520",
          fontFamily: '"Italianno", cursive',
          fontSize: "4rem"
        }}
      >
        {title}
      </Typography>
      {image && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={image} alt={title} width={500} height={400} />
        </Box>
      )}
      <br />
      <Box
        sx={{
          maxHeight: 300,
          overflow: "auto",
          border: "0.05rem solid #daa520",
          borderRadius: 10,
          padding: 2
        }}
      >
        {quote && (
          <>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                textAlign: "center",
                color: "#daa520",
                fontSize: "1.25rem",
                fontFamily: '"Mate SC", serif'
              }}
            >
              {quote}
            </Typography>
            <br />
          </>
        )}
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "#daa520",
            fontSize: "1.25rem",
            fontFamily: '"Mate SC", serif'
          }}
        >
          {description}
        </Typography>
      </Box>
      {link && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center"
          }}
        >
          {link.startsWith("/") ? (
            <Link href={link} passHref>
              <Button component="a" variant="contained" color="primary">
                Read more
              </Button>
            </Link>
          ) : (
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#daa520",
                color: "black",
                fontSize: "1.25rem",
                fontFamily: '"Mate SC", serif',
                borderRadius: 10
              }}
            >
              {buttonText}
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default Card
