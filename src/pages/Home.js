import React from 'react'
import Container from  "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SideBar from "../components/SideBar"
import "../index"


const Home = () => {
    return (
        <Container>
            <Row>
            <Col><SideBar></SideBar></Col>
            </Row>
        </Container>
    )
}

export default Home
