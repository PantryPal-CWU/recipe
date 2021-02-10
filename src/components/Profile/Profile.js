import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Profile extends React.Component {
    render() {
        return (
            <div className="main">
            <Main>
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
                        <Button Type="save" className="mb-2">
                            Save
                        </Button>
                    </Form.Group>
                </Form>
            </Main>
        </div>
        )
    }

}
export default Profile;
const Main = styled.div`
  background-color: #eae0c8;
  padding-top: 60px;
  font-size: 30px;
  display: inline-block;
  
`
