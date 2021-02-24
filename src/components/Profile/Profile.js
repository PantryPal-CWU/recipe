import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import ReactDOM from "react-dom";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";





class Profile extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <>
                <div className="main">
                    <Container fluid style={{ paddingTop: 60, fontSize: 20 }}>
                        <Form>
                            <Form.Group controlId="formUser">
                                <Form.Label>Name: </Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email: </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password: </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Dietary Preferences: </Form.Label>
                                <Form.Check type="checkbox"
                                    label="Vegetarian"
                                    name="checkboxes"
                                    id="checkbox1"
                                />
                                <Form.Check type="checkbox"
                                    label="Vegan"
                                    name="checkboxes"
                                    id="checkbox2"
                                />
                                <Form.Check type="checkbox"
                                    label="Gluten Free"
                                    name="checkboxes"
                                    id="checkbox3"
                                />
                                <Button variant="primary" onClick={this.handleShow}  >
                                    Edit
                        </Button>
                            </Form.Group>
                        </Form>
                    </Container>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>
                        <Form.Group>
                            <Form.Label>Name: </Form.Label> 
                            <Form.Control type="text" placeholder="First Name Last Name" />
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="text" placeholder="name@example.com"/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            <Form.Label>Dietary Preferences</Form.Label>
                            <Form.Check type="checkbox"
                                    label="Vegetarian"
                                    name="checkboxes"
                                    id="checkbox1"
                                />
                                <Form.Check type="checkbox"
                                    label="Vegan"
                                    name="checkboxes"
                                    id="checkbox2"
                                />
                                <Form.Check type="checkbox"
                                    label="Gluten Free"
                                    name="checkboxes"
                                    id="checkbox3"
                                />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                        </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </>
        )
    }

}
export default Profile;


