"use client"
import React from "react"
import styled from "styled-components"

interface BackgroundProps {
  $image: string // Use $image instead of image
}

const BackgroundContainer = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
`

const Background: React.FC<BackgroundProps> = ({ $image }) => {
  return <BackgroundContainer $image={$image} />
}

export default Background
