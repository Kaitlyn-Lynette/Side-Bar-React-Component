import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import Button from 'react-bootstrap/Button'
import './SideBar.css'


const SideBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
    
    <div className="header">
      <h1 onClick={handleShow}>Jane Doe</h1>  
    </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Jane Doe</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav-pages">
              <li>My Story</li>
              <li>My Writing</li>
              <li>Resume/CV</li>
              <li>Contact</li>
              <li>Support</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )
}

export default SideBar
