import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Contact from "../src/app/Contact/page"

describe("About Us Page", () => {
  it("renders the title", () => {
    const { getByText } = render(<Contact />)
    expect(getByText("Contact Us")).toBeInTheDocument()
  })

  it("renders the story section", () => {
    const { getByText } = render(<Contact />)

    expect(getByText("Welcome to Our Community!")).toBeInTheDocument()

    expect(
      getByText(
        "We're incredibly excited to welcome you into our community! Whether you're a gamer, a developer, or simply someone who loves immersive experiences, we're thrilled to have you here. At SinLess Games, we're more than just a game development studio; We're a family of passionate individuals dedicated to creating unforgettable experiences. If you're interested in joining our team, we're always on the lookout for talented individuals who share our passion for immersive gaming. Whether you're a skilled developer, a creative designer, or just someone with a love for gaming, we'd love to hear from you. Reach out to us via Discord or Email to learn more about joining our team."
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "And if you're just here to enjoy our games and be a part of our community, we're glad to have you! Follow us on GitHub to stay updated on our latest projects and join us on Discord to chat with fellow gamers and developers. If you have any questions or would like to inquire about our services, please don't hesitate to give us a call. We're here to help in any way we can, and we're always happy to hear from you."
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "Once again, welcome to our community. We're excited to have you here, and we can't wait to embark on this journey together!"
      )
    ).toBeInTheDocument()
  })

  it("renders the email card", () => {
    const { getByText } = render(<Contact />)
    expect(getByText("Email")).toBeInTheDocument()
    expect(
      getByText(
        "We love to hear from our Fans and Are always looking to help. We will try to respond to all emails within 24 hours. Please be patient with us wait time may vary You can contact us by email."
      )
    ).toBeInTheDocument()
  })

  it("renders the discord card", () => {
    const { getByText } = render(<Contact />)
    expect(getByText("Discord")).toBeInTheDocument()
    expect(
      getByText(
        "We Have A wonderful community on discord. We are always looking for new members to join us. We have a great community of people that are always willing to help. We also have a great group of people that are always willing to play games with you."
      )
    ).toBeInTheDocument()
  })

  it("renders the team card", () => {
    const { getByText } = render(<Contact />)
    expect(getByText("GitHub")).toBeInTheDocument()
    expect(
      getByText(
        "We have repositories on github for all of our projects. We are always looking for new people to help us out, or just follow the development process of our projects. all projects are subject to copyright and licensing."
      )
    ).toBeInTheDocument()
  })
})
