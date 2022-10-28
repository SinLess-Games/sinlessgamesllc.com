import './services.scss'
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'reactstrap'

export const Services = () => {
    return (
        <Col className="Services Center">
            <Row>
                <h1 className="ServicesTitle">Services</h1>
                <br />
                <p className="ServicesText">
                    Here at SinLess Games we offer a wide variety of services
                    centered around the gaming community. We chose a broad area
                    to help those who may not be able to afford the best items;
                    or those who do; to get them. Thus we make our services as
                    affordable as possible. REMEMBER:{' '}
                    <blockquote>
                        &quot;Above all, We are here for you. The fun starts
                        here with your own custom gaming experience.&quot;
                    </blockquote>
                </p>
            </Row>
            <Row>
                <Col className="ServicesColumn25">
                    <Row className="Row">
                        <Card className="ServicesCard">
                            <Card.Title className="ServicesCardTitle">
                                Game Design
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    First and foremost, we are a game design
                                    studio. That is our original goal, however
                                    we ant to be able to help the community as
                                    much as possible. We Specialize in the
                                    following:
                                    <ul>
                                        <li>Game Design</li>
                                        <li>Game Development</li>
                                        <li>Game Testing</li>
                                        <li>
                                            Game Hosting (our servers for other
                                            games)
                                        </li>
                                        <li>Game Modding</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>

                <Col className="ServicesColumn25">
                    <Row className="Row">
                        <Card className="ServicesCard">
                            <br />
                            <Card.Title className="ServicesCardTitle">
                                Custom Gaming PC&apos;s
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    We offer custom gaming PC&apos;s that are
                                    built to your specifications. We will work
                                    within your budget to build you the best
                                    gaming PC you can get. We offer a 1 year
                                    parts warranty on all PCs. All our PCs come
                                    installed with a small selection of great
                                    free utilities to help get the most out of
                                    your computer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>

                <Col className="ServicesColumn25">
                    <Row className="Row">
                        <Card className="ServicesCard">
                            <br />
                            <Card.Title className="ServicesCardTitle">
                                Technology Research
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    We plan to get into this area in the future,
                                    we want to help bring technology forward for
                                    the benefit of games. “Technology is best
                                    when it brings people together.” ~ Matt
                                    Mullenweg (Founder of WordPress) If that
                                    does speak for games as well; and even if it
                                    does, then we are here to help.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>

                <Col className="ServicesColumn25">
                    <Row className="Row">
                        <Card className="ServicesCard">
                            <br />
                            <Card.Title className="ServicesCardTitle">
                                Community
                            </Card.Title>
                            <Card.Body>
                                <Card.Subtitle>
                                    &quot;There is no power for change greater
                                    than a community discovering what it cares
                                    about.&quot; – Margaret J. Wheatley
                                </Card.Subtitle>
                                <br />
                                <Card.Text>
                                    We are a community of gamers, developers,
                                    and designers. We are here to help you with
                                    your gaming experience. But we can do it
                                    alone, We need your help to make dreams
                                    become reality. Join us on a journey of a
                                    lifetime, where we can all help each other.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>

            <br />

            <Row>
                <Col className="ServicesColumn25">
                    <Row className="Row"></Row>
                </Col>

                <Col className="ServicesColumn25">
                    <Row className="Row"></Row>
                </Col>

                <Col className="ServicesColumn25">
                    <Row className="Row"></Row>
                </Col>

                <Col className="ServicesColumn25">
                    <Row className="Row"></Row>
                </Col>
            </Row>
        </Col>
    )
}

export default Services
