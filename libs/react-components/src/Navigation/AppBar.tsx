"use client"
import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Image from "next/image"
import { ExpandMore, ExpandLess } from "@mui/icons-material"
import { StaticImageData } from "next/image"

export type NavPageType = {
  title: string
  url: string
}

export interface AppBarProps {
  pages: NavPageType[]
  logo: string | StaticImageData
}

export const ResponsiveAppBar: React.FC<AppBarProps> = ({ pages, logo }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            borderRadius: "0 0 50px 50px",
            boxShadow: "0 0 5px 5px rgba(218, 165, 32, 0.6)"
          }}
        >
          <Container>
            <Toolbar disableGutters>
              {/** Left section */}
              <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                {/** Logo */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none"
                  }}
                >
                  <Image
                    src={logo}
                    alt="Sinless Games LLC"
                    width={50}
                    height={40}
                  />
                </Typography>
                {/** Title */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "#DAA520",
                    textDecoration: "none"
                  }}
                >
                  SinLess Games LLC
                </Typography>
              </Box>

              {/** Center-aligned section (empty) */}
              <Box sx={{ flexGrow: 1 }} />

              {/** Right section */}
              <Box sx={{ display: "flex", alignItems: "right" }}>
                {/** Pages */}
                <Box
                  sx={{
                    display: isCollapsed ? "none" : { xs: "none", md: "flex" }
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page.title}
                      href={page.url}
                      sx={{ mx: 1, color: "#DAA520" }}
                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>
                {/** Menu icon (for mobile) */}
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left"
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" }
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.title} href={page.url}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <Grid item sx={{ justifyContent: "center" }}>
        {/** Collapse/Expand icon */}
        <IconButton
          size="large"
          aria-label="collapse-expand"
          onClick={toggleCollapse}
          color="inherit"
        >
          {isCollapsed ? <ExpandMore /> : <ExpandLess />}
        </IconButton>
      </Grid>
    </Grid>
  )
}
