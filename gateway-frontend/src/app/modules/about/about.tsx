import './about.scss'

import React from 'react'

import { Row, Col } from 'reactstrap'

export const About = () => {
    return (
        <Col className="About Center">
            <Row>
                <h1 className="PageTitle">About Us</h1>
            </Row>
            <Row className="img">
                <img src="../../../content/images/Logo.png" alt="Logo" />
            </Row>
            <Row className="SubTitle">
                <h2>Where immersion and Dreams come true.</h2>
            </Row>
            <br />
            <Row className="Content">
                <p>
                    SinLess Games LLC was founded February 2018 by Timothy A.
                    Pierce, after a life changing discussion with a previous
                    roommate. During this conversation, Timothy was complaining
                    about how most modern games lack immersion and how he wished
                    he could play a game that was more immersive. His roommate
                    had said:
                    <br />
                    <br />
                    <blockquote cite="Roommate requested to be unnamed">
                        <p>
                            Well, do something about, you found a need in a
                            industry. Now you can fix it.
                        </p>
                    </blockquote>
                    <figcaption>—Anonymous</figcaption>
                    <br />
                    Timothy took this to heart and decided to start SinLess
                    Games LLC. This roommate would become a close friend and a
                    trusted advisor in the early days of his company. Timothy
                    Sat down and began a tedious task of filling out all the
                    necessary paperwork to start a LLC. After a few months of
                    hard work, SinLess Games LLC was born. Timothy then began to
                    research what he would need to be successful. And started
                    going to collage at FullSail University to learn the skills
                    he would need to be successful. At this current time,
                    Timothy is just 1 year away from graduating and setting out
                    on the journey of his dreams.
                </p>

                <p>
                    We at SinLess Games have dedicated ourselves to the
                    construction of highly immersive games. We put forth 100% of
                    our effort everyday to bring the gaming industry what we
                    feel it needs. What is it that it needs? Well the list is a
                    short one, Immersive games with well thought out storylines,
                    and great graphics. we feel as though games now days have
                    become more for profit than they were originally back in the
                    80s. BAck then the graphics weren&apos;t very good, thus
                    they relied on the story of the game to keep you interested.
                    Now days, the graphics are amazing, but the story is
                    lacking. We at SinLess Games are here to change that. We are
                    here to fix this problem, and even do what we can to advance
                    the technology of gaming.
                </p>

                <p>
                    At SinLess Games, we strive to make games that are immersive
                    and fun. We want to make games that you can get lost in and
                    forget about the real world for a while. We treasure the
                    feedback we get from our players and use it to make our
                    games better. We are always looking for new ideas and new
                    ways to make our games better for you, our fans and
                    community. We hope you enjoy our games and we look forward
                    to hearing from you.
                </p>
            </Row>
            <Row className="PageTitle">
                <h1>
                    Come join us, Where immersion in to the world of games ranks
                    supreme, and dreams come true!
                </h1>
            </Row>
            <br />
        </Col>
    )
}

export default About
