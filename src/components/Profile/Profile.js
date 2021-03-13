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
import { Alert } from 'bootstrap';

const axios = require('axios').default;

class Profile extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.getName = this.getName.bind(this);

        this.state = {
            show: false,
            preferences: [],
            selectedRemove: null,
            showEdit: true,
            name: '',
            email: '',
            oldPassword1: '',
            oldPassword2: '',
            newPassword1: '',
            newPassword2: '',
            currName: ''
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

        this.getName();
        
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    async handleEdit() {
        //Check if user entered in inputs
        let newPass = '', oldPass = '', newEmail = '', newName = '', refreshPage = false, logOut = false;

        if (this.state.oldPassword1 !== this.state.oldPassword2 || this.state.newPassword1 !== this.state.newPassword1) {
            alert("ERROR: Password does not match");
        } else if (this.state.newPassword1 !== '') {
            newPass = this.state.newPassword1;
            oldPass = this.state.oldPassword1;
        }

        if (this.state.email !== '') {
            newEmail = this.state.email;
        }

        if (this.state.name !== '') {
            newName = this.state.name;
        }

        //-----Set what was given-----

        if (newName !== '') {
            await axios.get(`http://localhost:4003/setName?email=${cookie.load("email")}&name=${newName}`)
                .then(data => {
                    if (!data['data']) {
                        alert("Something went wrong setting your name. Name not changed.");
                    }
                    console.log(data)
                });
            
            refreshPage = true;
        }

        if (newPass !== '') {
            await axios.get(`http://localhost:4003/setPassword?email=${cookie.load("email")}&oldPassword=${oldPass}&newPassword=${newPass}`)
                .then(data => {
                    if (!data['data']) {
                        alert("Error: Incorrect old password. Password not changed.")
                        return false;
                    } else {
                        return true;
                    }
                }).then(prev => {if (prev) logOut = true});
        }

        if (newEmail !== '') {
            logOut = await axios.get(`http://localhost:4003/setEmail?email=${newEmail}&prevEmail=${cookie.load("email")}`)
                .then(data => {
                    if (!data['data']) {
                        alert(`The email: ${newEmail} is already registered. Email not changed.`);
                        return false;
                    } else {
                        return true;
                    }
                });
                
        }

        if (logOut) { 
            if (newEmail === '') {
                const res1 = await axios.get(`http://localhost:4003/signout?email=${cookie.load("email")}`);
            } else {
                const res2 = await axios.get(`http://localhost:4003/signout?email=${newEmail}`);
            }
            const month = new Date();
            month.setDate(month.getDate()+30);
            cookie.remove("email", { path: '/', expires: month});
            window.location.reload();   
            return;
            
        }

        if (refreshPage) {
            window.location.reload();
        }

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

    async getName() {
        await axios.get(`http://localhost:4003/getName?email=${cookie.load("email")}`)
            .then(data => {
                if (data['data'] === 'FAILED') this.setState({ currName: 'None' });
                else this.setState({ currName: data['data'] });
            });
        
    }

    render() {

        return (
            <>
                <Main>
                    <MainInside>
                    <FloatChild1>
                        <Container  style={{  fontSize: 20, width: 300}}>

                            <Form>
                                <h1>Your Profile </h1>
                                <br />
                                <Form.Group controlId="formUser">
                                    <Form.Label>Name: {this.state.currName}</Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email: {cookie.load("email")}</Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password:   ***********</Form.Label>
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
                            borderWidth: '1px', 
                            borderBottomStyle: 'single', 
                            margin: 'auto', 
                            textAlign: 'center',
                            backgroundColor: 'rgb(233, 233, 233)'
                            }}>
                            Your Saved Recipes
                        </h1>

                        {this.state.preferences.map(ele => {
                            
                            return (
                                // Lol why did write all this -- Alek
                                // <>
                                //     {/* <div style={{ 
                                //     fontSize: 12, 
                                //     borderStyle: 'solid',
                                //     border: 50, 
                                //     bottomBorderWidth: '10px' }}> */
                                //     }
                                //     <div style={{
                                //         borderStyle: 'groove',
                                //         borderTop: 0, 
                                //         fontSize: 12,
                                //         borderBottomStyle: 'groove', 
                                //         }}>
                                //         <span style={{ float: 'left' }}>
                                //             <a className="RecipeTitle" 
                                //             href={ele["href"]} 
                                //             target="_blank" 
                                //             rel="noopener noreferrer"
                                //             style={{ marginRight: '10px' }}
                                //             >
                                //                 {ele["title"]}
                                //             </a>
                                //             <span style={{ textAlign: 'center' }}>|</span>
                                //         </span>
                                        
                                //         <span style={{ fontWeight: 'bolder' }}>
                                //             <a className="removeX" 
                                //             href="javascript:void(0);" 
                                //             onClick={() => this.setState({ selectedRemove: ele["href"] })}
                                //             style={{ marginLeft: '15px' }}>
                                //                 Remove
                                //             </a>
                                //         </span>
                                //     </div>
                                    
                                // </>
                                <Recipe>
                                    <a className="RecipeTitle" href={ele["href"]} target="_blank" rel="noopener noreferrer">{ele["title"]}</a>
                                    <>
                                    <button placeholder = 'Search for recipe' className="removeX"  href="javascript:void(0);" onClick={() => this.setState({ selectedRemove: ele["href"] })}>
                                       <> X </>
                                    </button>
                                    </>
                                </Recipe>
                            );
                        })}
                    </FloatChild2>
                    <Modal show={this.state.show} onHide={this.handleClose} style={{ fontSize: 20 }}>
                        <>
                            <Modal.Header closeButton >
                                <Modal.Title>Edit Profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group>
                                    <Form.Label>Name: </Form.Label>
                                    <Form.Control type="text" placeholder="First Name Last Name" size="lg" onChange={(e) => this.setState({ name: e.target.value })} />
                                    <br />
                                    <Form.Label>Set New Email: </Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" size="lg" onChange={(e) => this.setState({ email: e.target.value })} />
                                    <br />
                                    
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" size="lg" onChange={(e) => this.setState({ newPassword1: e.target.value })} />
                                    <br />
                                    <Form.Control type="password" placeholder="Confirm Password" size="lg" onChange={(e) => this.setState({ newPassword2: e.target.value })} />
                                    <br />
                                    <Form.Label>Old Password</Form.Label>
                                    <Form.Control type="password" placeholder="Old Password" size="lg" onChange={(e) => this.setState({ oldPassword1: e.target.value })}/>
                                    <br />
                                    <Form.Control type="password" placeholder="Confirm Old Password" size="lg" onChange={(e) => this.setState({ oldPassword2: e.target.value })}/>
                                    <br />
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.handleEdit}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </>
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
    padding-left: 35%;
    padding-top: 2%;   
    
    
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
    width: 95%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1));
    text-align: left;
    margin: 15px auto;
    background-color: rgb(233, 233, 233);
    padding: 4px;
    border-radius: 10px;
    border: .5px solid grey;
    font-size: 14px;
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