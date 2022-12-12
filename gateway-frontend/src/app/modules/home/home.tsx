import './home.scss'

import React from 'react'

import { Row, Col } from 'reactstrap'

export const Home = () => {
    return (
        <Col>
            <Col md="9" className="pad Showcase">
                <Row className="row">
                    <h1 className="Welcome">Welcome to SinLess Games</h1>
                </Row>
                <Row>
                    <img
                        src="../../../content/images/Logo.png"
                        alt="SinLess Games Logo"
                        className="logo"
                    />
                </Row>

                <Row>
                    <Col className="sColumn60">
                        <Row>
                            <h2 className="CallToAction">
                                Where Dreams Become Reality
                            </h2>
                        </Row>
                        <Row>
                            <p className="pad Intro">
                                SinLess Games is a small game development studio
                                based in Montana. Here at SinLess Games we
                                strive to create highly immersive games that
                                will make you never want to put them down. Our
                                philosophy and motto is &quot;A world where
                                immersion ranks Supreme&quot;. We strive to
                                follow this motto in every game we make for you;
                                our friends, family, fans, and Community. All of
                                you matter, and so do your opinions. We want to
                                hear from you, and we want to make your dreams;
                                in the world of games; become a reality.
                            </p>
                            <p className="pad Intro">
                                We are currently working on our first game,
                                Tainted Kingdoms. Tainted Kingdoms is a 3d
                                Action/ Horror MMORPG set in the fantasy world
                                of Midian. Midian is a world where the Gods,
                                Goddesses, and Fiends WAR with each other,
                                leaving the mortal races and monsters to fight
                                each other for the scraps left behind. The game
                                is Currently in Development and has no release
                                date as of yet. We are looking for talented
                                individuals to aid in the development of the
                                game. If you are interested in joining the team,
                                please contact us at{' '}
                                <a href="mailto:support@sinlessgamesllc.com">
                                    {' '}
                                    Support.
                                </a>
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Col>
    )
}

export default Home
