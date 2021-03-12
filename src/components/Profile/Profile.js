import React from 'react';
import cookie from 'react-cookies';
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
        this.removeItem = this.removeItem.bind(this);

        this.state = {
            show: false,
            preferences: [],
            selectedRemove: null
        };
    }
    
    //Transition selected item to be removed
    componentDidUpdate() {
        if(this.state.selectedRemove !== null) {
            this.removeItem(this.state.selectedRemove);
            this.setState({ selectedRemove: null });
        }
    }

    //get user preferences
    componentDidMount() {
        this.forceUpdate();
        if(cookie.load("UserPreferences") === undefined) {
            this.setState({ show: this.state.show, preferences: [] });
        } else {
            this.setState({ show: this.state.show, preferences: cookie.load("UserPreferences") });
            console.log(cookie.load("UserPreferences"));
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    //Remove selected link 
    removeItem(href) {
        
        const removal = fetch(`http://localhost:4003/removePref?email=${cookie.load("email")}&href=${href}`);
        let newPref = [];
        newPref = this.state.preferences.filter(ele => ele["href"] !== href);
        
        const month = new Date();
        month.setDate(month.getDate()+30);
        cookie.remove("UserPreferences", { path: '/', expires: month });
        cookie.save("UserPreferences", newPref, { path: '/', expires: month });
        this.setState({ preferences: cookie.load("UserPreferences") });
    }

    render() {

        return (
            <>
                <Main>
                    <MainInside>
                    <FloatChild1>
                        <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20 }}>

                            <Form>
                                <h1>Your Profile</h1>
                                <br />
                                <Form.Group controlId="formUser">
                                    <Form.Label>Name: </Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email: </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password: </Form.Label>
                                </Form.Group>
                                <Button variant="primary" onClick={this.handleShow}  >
                                        Edit
                                </Button>                              
                            </Form>
                        </Container>
                    </FloatChild1>
                    <FloatChild2> 
                        <h1 style={{ 
                            borderStyle: 'solid', 
                            borderRadius: '10px', 
                            borderWidth: '5px', 
                            borderBottomStyle: 'double', 
                            margin: 'auto', 
                            textAlign: 'center' 
                            }}>
                            Your Saved Recipes
                        </h1>

                        {this.state.preferences.map(ele => {
                            
                            return (
<<<<<<< HEAD
                                <>
                                    {/* <div style={{ 
                                    fontSize: 12, 
                                    borderStyle: 'solid',
                                    border: 50, 
                                    bottomBorderWidth: '10px' }}> */
                                    }
                                    <div style={{
                                        borderStyle: 'groove',
                                        borderTop: 0, 
                                        fontSize: 12,
                                        borderBottomStyle: 'groove', 
                                        }}>
                                        <span style={{ float: 'left' }}>
                                            <a className="RecipeTitle" 
                                            href={ele["href"]} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ marginRight: '10px' }}
                                            >
                                                {ele["title"]}
                                            </a>
                                            <span style={{ textAlign: 'center' }}>|</span>
                                        </span>
                                        
                                        <span style={{ fontWeight: 'bolder' }}>
                                            <a className="removeX" 
                                            href="javascript:void(0);" 
                                            onClick={() => this.setState({ selectedRemove: ele["href"] })}
                                            style={{ marginLeft: '15px' }}>
                                                Remove
                                            </a>
                                        </span>
                                    </div>
                                    
                                </>
=======
                                <Recipe>
                                    <a className="RecipeTitle" href={ele["href"]} target="_blank" rel="noopener noreferrer">{ele["title"]}</a>
                                    <>
                                    <button placeholder = 'Search for recipe' className="removeX"  href="javascript:void(0);" onClick={() => this.setState({ selectedRemove: ele["href"] })}>
                                       <> X </>
                                    </button>
                                    </>
                                </Recipe>
>>>>>>> 487b59c55631ed49aa1cfa5a7f472dda7c2edae5
                            );
                        })}
                    </FloatChild2>
                    <Modal show={this.state.show} onHide={this.handleClose} style={{ fontSize: 20 }}>
                        <Modal.Header closeButton >
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" placeholder="First Name Last Name" size="lg" />
                                <br />
                                <Form.Label>Email: </Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" size="lg"/>
                                <br />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" size="lg"/>
                                <br />
                                
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    </MainInside>
                </Main>
            </>
        )
    }
}
export default Profile;

const Main = styled.div `
    background-color: #eef0e8;
    min-height: 87vh;
    z-index: -20;
`;

const FloatChild1 = styled.div `
    width: 30%;
    float: left;
    padding-left: 10%;
    border-style: solid;
    border-left: 0;
    border-top: 0;
    border-bottom: 0;
    border-right: 1;
    border-width: 5px;
    padding-right: 50px;    
    margin: auto;
    
`;

const FloatChild2 = styled.div `
    width: 70%;
    float: left;
    padding-left: 20px;
`;
const MainInside = styled.div `
    grid-gap: 10px;
    display: grid;
    grid-template-columns: auto auto;
    padding-top 70px;
    background: #dbdfcd;
    height: auto;
    min-height: 87vh;
    margin: 0 auto;
    width: 80%;
    z-index: 0;
    min-width: 550px;
    max-width: 1400px;
`;
const Recipe = styled.div`
    grid-gap: 10px;
    display: grid;
    grid-template-columns: auto 30px ;
    height: auto;
    width: 90%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1));
    text-align: left;
    margin: 15px auto;
    background-color: rgb(233, 233, 233);
    padding: 12px;
    border-radius: 10px;
    border: .5px solid grey;
    font-size: 18px;
`;

/*
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
                                <Form.Check type="checkbox"
                                    label="Nut Free"
                                    name="checkboxes"
                                    id="checkbox4"
                                    
                                />
                                <Form.Check type="checkbox"
                                    label="Dairy Free"
                                    name="checkboxes"
                                    id="checkbox4"
                                    
                                /> *//*

                                <Form.Group>
                                    <Form.Label>Dietary Preferences: </Form.Label>
                                    <Form.Check type="checkbox"
                                        label="Vegetarian"
                                        name="checkboxes"
                                        id="checkbox1"
                                        disabled
                                    />
                                    <Form.Check type="checkbox"
                                        label="Vegan"
                                        name="checkboxes"
                                        id="checkbox2"
                                        disabled
                                    />
                                    <Form.Check type="checkbox"
                                        label="Gluten Free"
                                        name="checkboxes"
                                        id="checkbox3"
                                        disabled
                                    />
                                    <Form.Check type="checkbox"
                                        label="Nut Free"
                                        name="checkboxes"
                                        id="checkbox4"
                                        disabled
                                    />
                                    <Form.Check type="checkbox"
                                        label="Dairy Free"
                                        name="checkboxes"
                                        id="checkbox4"
                                        disabled
                                    />
                                    <Button variant="primary" onClick={this.handleShow}  >
                                        Edit
                                </Button>
                                </Form.Group>*/