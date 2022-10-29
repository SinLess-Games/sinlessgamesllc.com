import './contact.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { FaDiscord, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'

import { Row, Col } from 'reactstrap'

export const Contact = () => {
    return (
        <Col className="Contact Center">
            <Row>
                <h1 className="ContactTitle">Contact Us</h1>
                <p className="ServicesText">
                    Welcome to the Community! We are glad you are here. You can
                    get a hold of us via the ways below. We are always looking
                    for new people to join our team. If you are interested in
                    joining us, please contact us via Discord or Email. If you
                    are interested in joining our Discord, please click join us.
                    Follow our code on github to see what we are working on. Our
                    phone number is for you to call if you are interested in our
                    services.
                </p>
            </Row>
            <Row>
                <Col className="ContactColumn">
                    <Row className="Row">
                        <Card className="ContactCard">
                            <br />
                            <FaEnvelope className="Icons" />
                            <br />
                            <Card.Title className="CardTitle">Email</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    We love to hear from our Fans and Are always
                                    looking to help. We will try to respond to
                                    all emails within 24 hours. Please be
                                    patient with us wait time may vary You can
                                    contact us by{' '}
                                    <a href="mailto:support@sinlessgamesllc.com">
                                        Email
                                    </a>
                                    .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col className="ContactColumn">
                    <Row className="Row">
                        <Card className="ContactCard">
                            <br />
                            <FaPhone className="Icons" />
                            <br />
                            <Card.Title className="CardTitle">Phone</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    We are here for you, we want to talk, and
                                    would love to offer many services for you.
                                    you can see our
                                    <Link to="/Services"> Services</Link> page
                                    for more information. or call us at:
                                    <a href="tel:1-844-799-0078">
                                        {' '}
                                        1-844-799-0078
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col className="ContactColumn">
                    <Row className="Row">
                        <Card className="ContactCard">
                            <br />
                            <FaDiscord className="Icons" />
                            <br />
                            <Card.Title className="CardTitle">
                                Discord
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    We Have A wonderful community on discord. We
                                    are always looking for new members to join
                                    us. We have a great community of people that
                                    are always willing to help. We also have a
                                    great group of people that are always
                                    willing to play games with you.
                                    <br />
                                    <a href="https://discord.gg/qQQpRdZqx8">
                                        Join Us
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col className="ContactColumn">
                    <Row className="Row">
                        <Card className="ContactCard">
                            <br />
                            <FaGithub className="Icons" />
                            <br />
                            <Card.Title className="CardTitle">
                                Github
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    We have repositories on github for all of
                                    our projects. We are always looking for new
                                    people to help us out, or just follow the
                                    development process of our projects. all
                                    projects are subject to copyright and
                                    licensing.
                                    <br />
                                    <a href="https://github.com/SinLess-Games">
                                        SinLess-Games Github
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default Contact
