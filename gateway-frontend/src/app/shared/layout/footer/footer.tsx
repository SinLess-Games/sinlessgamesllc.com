import './footer.scss'

import React from 'react'

import { Col, Row } from 'reactstrap'

const Footer = () => (
    <Row className="footerBar">
        <Col className="">
            <h3 className="footerTitle">SinLess Games</h3>
            <h4 className="footerSubtitle">Where Dreams Become Reality</h4>
            <p className="footerText">
                We welcome you to our website and community, we hope you enjoy
                your stay. If you have any questions or concerns please feel
                free to contact us!
            </p>
        </Col>
        <Col className="">
            <h3 className="footerTitle">Quote from our CEO</h3>
            <br />
            <p className="footerText">
                &quot; Life is short, and the world is vast. We must do all we
                can to make the world a better place, lest we leave it in worse
                condition, and force our young to deal with it. &quot;
            </p>
        </Col>
        <Col className="">
            <h3 className="footerTitle">A bit of inspiration</h3>
            <br />
            <p className="footerText">
                &quot; The greatest glory in living lies not in never falling,
                but in rising every time we fall. &quot; ~ Ralph Waldo Emerson
            </p>
        </Col>
        <Col className="">
            <h3 className="footerTitle">Contact Us</h3>
            <p className="footerText">
                To contact us you can visit our contact page or call us at:
                <a href="tel:1-844-799-0078"> 1-844-799-0078</a>
            </p>
        </Col>
    </Row>
)

export default Footer
