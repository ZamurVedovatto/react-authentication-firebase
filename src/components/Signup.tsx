import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    return (
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" id="passwordConfirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="passwordConfirmation" ref={passwordConfirmationRef} required/>
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-2">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </div>
    )
}

export default Signup