import React, { useEffect, useRef, useState } from "react"
import Card, { CardProps } from "./card"

interface CarouselProps {
  items: CardProps[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const newIndex = (currentIndex + 1) % items.length
        setCurrentIndex(newIndex)
        carouselRef.current.scrollTo({
          left: newIndex * carouselRef.current.offsetWidth,
          behavior: "smooth"
        })
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [currentIndex, items.length])

  return (
    <div style={{ maxHeight: "300px", overflowX: "scroll" }} ref={carouselRef}>
      {items.map((item, index) => (
        <div key={index} style={{ display: "inline-block" }}>
          <Card
            title={item.title}
            description=""
            image={item.image}
            link={item.link}
          />
        </div>
      ))}
    </div>
  )
}

export default Carousel
