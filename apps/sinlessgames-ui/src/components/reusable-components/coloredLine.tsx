import React from "react"
import styles from "./coloredLine.module.scss"

interface ColoredLineProps {
  color: string
}

const ColoredLine = ({ color }: ColoredLineProps) => {
  return (
    <hr
      className={styles.coloredLine}
      style={{
        border: 0,
        height: "0.5rem",
        width: "auto",
        borderRadius: "1rem",
        backgroundColor: `${color}`
      }}
    />
  )
}

export default ColoredLine
