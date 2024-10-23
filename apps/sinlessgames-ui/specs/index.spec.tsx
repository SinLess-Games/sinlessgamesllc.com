import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Index from "../src/app/page"

describe("Homepage", () => {
  it("renders the title", () => {
    const { getByText } = render(<Index />)
    expect(getByText("Welcome to SinLess Games!")).toBeInTheDocument()
  })

  it("renders the description", () => {
    const { getByText } = render(<Index />)
    expect(
      getByText(/SinLess Games is a game development studio/i)
    ).toBeInTheDocument()
  })

  it("renders the image", () => {
    const { queryAllByAltText } = render(<Index />)
    const images = queryAllByAltText("Welcome to SinLess Games!")
    expect(images.length).toBeGreaterThan(0)
  })

  it("renders the colored line", () => {
    const { container } = render(<Index />)
    expect(container.querySelector(".coloredLine")).toBeInTheDocument()
  })
})
