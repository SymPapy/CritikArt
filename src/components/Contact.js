import React from 'react'
import '../style/Contact.css'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Contact = () => {
    return (
            <main>
                <section className='welcome'>
                    <Form>
                            <Form.Group controlId="exampleForm.ControlInput1" className="email">
                                <Form.Control type="email" placeholder="Entrer votre email" />
                                <Form.Text className="text-muted">
                                   **Votre adresse mail est soumise à la loi RGPD**
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1" className="textarea">
                                <Form.Control 
                                        as="textarea" 
                                        rows={2} 
                                        cols="80" 
                                        placeholder="Ecrivez votre message ici" 
                                        style={{ height: '200px' }} 
                                        />
                            </Form.Group>
                            <br></br>
                            <Button variant="danger" type="submit">
                                Envoyer
                            </Button>
                    </Form>
                </section>
            </main>
    )
}

export default Contact