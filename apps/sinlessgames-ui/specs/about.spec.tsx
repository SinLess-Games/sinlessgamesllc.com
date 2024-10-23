import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import AboutUs from "../src/app/About/page"

describe("About Us Page", () => {
  it("renders the title", () => {
    const { getByText } = render(<AboutUs />)
    expect(getByText("About Us")).toBeInTheDocument()
  })

  it("renders the mission card", () => {
    const { getByText } = render(<AboutUs />)
    expect(getByText("Our Mission")).toBeInTheDocument()
    expect(
      getByText(
        "At SinLess Games, our mission is to revolutionize the gaming industry by creating immersive, story-driven games with exceptional graphics. We believe in putting the player first and constantly strive to deliver unforgettable experiences. Through innovation and dedication, we aim to push the boundaries of gaming technology and provide our community with the best gaming experiences possible. Join us on our journey to redefine gaming, where immersion and dreams come true."
      )
    ).toBeInTheDocument()
  })

  it("renders the vision card", () => {
    const { getByText } = render(<AboutUs />)
    expect(getByText("Our Vision")).toBeInTheDocument()
    expect(
      getByText(
        "At SinLess Games, our vision is to create unforgettable games and applications for gamers, influencers, streamers, and businesses alike. We aim to be a leading force in the gaming industry, known for our innovative approach, exceptional quality, and dedication to our community. Through our creations, we seek to inspire and entertain, leaving a lasting impact on the world of gaming and technology."
      )
    ).toBeInTheDocument()
  })

  it("renders the team card", () => {
    const { getByText } = render(<AboutUs />)
    expect(getByText("Our Team")).toBeInTheDocument()
    expect(
      getByText(
        "At SinLess Games, our team is a group of passionate individuals dedicated to creating immersive and unforgettable gaming experiences. Each member brings unique skills and perspectives to the table, contributing to our innovative and collaborative environment. Together, we work tirelessly to push the boundaries of gaming and deliver exceptional quality to our players and community."
      )
    ).toBeInTheDocument()
  })

  it("renders the story section", () => {
    const { getByText } = render(<AboutUs />)

    expect(getByText("Our Story")).toBeInTheDocument()

    expect(
      getByText(
        "In the quiet of a humble room, amidst the glow of a computer screen, the seeds of a dream were sown. It was here, in the heart of innovation, that SinLess Gaming and Programming began its journey. Picture a young dreamer, Timothy A. Pierce, pondering the state of modern gaming. Frustration seeped into his soul as he longed for immersive experiences that seemed lost in a sea of profit-driven ventures. But one pivotal moment changed everything."
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "In the midst of doubt, a whisper echoed in his mind, 'Do something about it. You've found a need in an industry. Now, you can fix it.' With those words igniting a fire within him, Timothy embarked on a quest to redefine gaming. He is gathering like-minded souls, forming a team driven by passion and innovation."
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "SinLess Gaming and Programming wasn't just about creating games; it was about crafting experiences that transcended reality. Through sleepless nights and tireless dedication, they honed their craft, blending cutting-edge technology with timeless storytelling. Their journey wasn't without challenges. Doubt crept in, setbacks threatened to derail them, but their resolve remained unyielding. With every obstacle conquered, their vision grew clearer, their purpose stronger."
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "Today, SinLess Gaming and Programming stands as a tiny beacon of inspiration in the gaming industry. Their games are meant to transport players to worlds beyond imagination, where dreams are realized and boundaries are shattered. But their story is far from over. With every game created, they strive for greater heights, pushing the boundaries of what's possible and inspiring others to follow their dreams."
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "Join us on this awe-inspiring journey, where passion meets purpose, and impossibility is merely a stepping stone to greatness. This is our story. This is SinLess Games LLC."
      )
    ).toBeInTheDocument()
  })
})
