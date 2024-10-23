import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Services from "../src/app/Services/page"

describe("Services Page", () => {
  it("renders the title", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Services")).toBeInTheDocument()
  })

  it("Renders the description", () => {
    const { getByText } = render(<Services />)
    expect(
      getByText(
        "At SinLess Games, we are dedicated to providing a diverse range of services tailored to the gaming community. We strive to make high-quality gaming experiences accessible to everyone, whether you're looking for budget-friendly options or top-of-the-line equipment. Our commitment to affordability means that we work hard to keep our services accessible without compromising on quality. Above all, we are here to cater to your needs and ensure that your gaming experience is nothing short of exceptional. Join us, and let the fun begin with your own custom gaming experience."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Game Design Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Game Design")).toBeInTheDocument()

    expect(
      getByText(
        "First and foremost, we are a game design studio, dedicated to creating immersive and unforgettable gaming experiences. While game design is our primary focus, we are also committed to supporting and helping the gaming community in any way we can. Our specialties include game design, development, testing, hosting (providing servers for other games), and modding."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Web Design Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Web Design")).toBeInTheDocument()

    expect(
      getByText(
        "We are also a web design studio, dedicated to creating beautiful and functional websites. Our specialties include web design, development, testing, hosting, and modding. We are also committed to supporting and helping the web design community in any way we can."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Custom PCs Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Custom PCs")).toBeInTheDocument()

    expect(
      getByText(
        "We are a custom PC building studio, dedicated to creating high-performance, custom-built PCs for gamers, designers, and developers. We offer custom gaming PCs built to your specifications, working within your budget to provide you with the best gaming PC possible. Additionally, we provide a 1-year parts warranty on all PCs. Each of our PCs comes installed with a small selection of great free utilities to help you get the most out of your computer. Our specialties include custom PC design, assembly, testing, and support. We are committed to providing top-of-the-line hardware and exceptional customer service to ensure that you have the best gaming experience possible."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Community Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Community")).toBeInTheDocument()

    expect(
      getByText(
        "'There is no power for change greater than a community discovering what it cares about.' - Margaret J. Wheatley"
      )
    ).toBeInTheDocument()

    expect(
      getByText(
        "At SinLess Games, we are more than just a game development studio; we are a vibrant community of gamers, developers, and designers united by our passion for immersive gaming experiences. While we are here to enhance your gaming journey, we also understand that true transformation requires collective effort. We cannot achieve our goals alone; we need your support to turn dreams into reality. Join us on this extraordinary journey where we collaborate, innovate, and inspire each other to create something truly remarkable. Together, we can make a difference in the world of gaming."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Technology Research Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Technology Research")).toBeInTheDocument()

    expect(
      getByText(
        "In the near future, we are planning to venture into technology research with a focus on advancing technology for the betterment of gaming. As Matt Mullenweg, the founder of WordPress, once said, 'Technology is best when it brings people together.' We believe this sentiment applies to gaming as well, and we are eager to contribute to this vision."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Home Network Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Home Network")).toBeInTheDocument()

    expect(
      getByText(
        "At SinLess Games, we offer comprehensive home network setup services to enhance your gaming and online experiences. Our expert technicians are skilled in setting up and optimizing home networks for seamless connectivity and smooth gaming performance. Whether you're a casual gamer looking to improve your online experience or a streaming enthusiast in need of a robust network for uninterrupted streaming, we can tailor our services to meet your specific needs. Trust us to create a reliable and efficient home network that supports all your gaming and online activities."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Smart Home Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Smart Home")).toBeInTheDocument()

    expect(
      getByText(
        "SinLess Games offers professional smart home setup and configuration services to elevate your living space to the next level of convenience and efficiency. Our expert team specializes in integrating smart devices, such as smart lights, thermostats, security cameras, and voice assistants, to create a seamlessly connected and intelligent home environment. Whether you're looking to automate your home for added comfort and convenience or enhance your home security with smart technology, we can design and implement a customized smart home solution tailored to your lifestyle. Experience the future of home living with our smart home setup and configuration services."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Home Automation Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Home Automation")).toBeInTheDocument()

    expect(
      getByText(
        "At SinLess Games, we provide comprehensive home automation setup using Home Assistant, a powerful and flexible open-source platform. With Home Assistant, we can integrate and automate a wide range of smart devices in your home, including lights, thermostats, locks, and more, to create a fully customized and automated living space. Our expert team will work closely with you to understand your needs and preferences, designing a home automation system that enhances your comfort, convenience, and security. Experience the convenience of controlling your home with just a few taps on your smartphone or through voice commands. Let us transform your home into a smart, connected oasis with our Home Assistant setup services."
      )
    ).toBeInTheDocument()
  })

  it("Renders the Home Security Card", () => {
    const { getByText } = render(<Services />)
    expect(getByText("Home Security")).toBeInTheDocument()

    expect(
      getByText(
        "At SinLess Games, we offer professional home security solutions using Ubiquiti or Roku cameras, providing you with peace of mind and enhanced security for your property. Whether you're looking to monitor your home while you're away or keep an eye on your loved ones and pets, our expert team can design and install a customized security camera system tailored to your needs. With Ubiquiti or Roku cameras, you can enjoy high-definition video quality, advanced motion detection, and remote viewing capabilities, allowing you to keep tabs on your home from anywhere in the world. Protect what matters most with our reliable and efficient home security solutions using Ubiquiti or Roku cameras."
      )
    ).toBeInTheDocument()
  })
})
