import React, {useRef, useState, useAuth} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
// import { useAuth } from '../contexts/AuthContexts'
import { Link } from 'react-router-dom';


const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value!==passwordConfirmationRef.current.value){
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            setError('Failed to create an account: ' + error.message);
        }
        setLoading(false);
    }
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Ups</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmationRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading}
                            className='w-100' 
                            type='submit'>
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to='/login'>Log In</Link>
        </div>
    </>
  )
}

export default Signup;