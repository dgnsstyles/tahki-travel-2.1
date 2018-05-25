import React, {Component} from 'react';
import HeroContacto from './HeroContacto'
import {Container, Form, Button, TextArea} from 'semantic-ui-react';



class Contacto extends Component {
    render() {
        return (
            <div>
                <HeroContacto/>
                <Container>

                    <Form style={{ paddingBottom: '3em' }}>
                        <Form.Field>
                            <label>Nombre</label>
                            <input placeholder='Nombre' />
                        </Form.Field>
                        <Form.Field>
                            <label>Apellido</label>
                            <input placeholder='Apellido' />
                        </Form.Field>
                        <Form.Field>
                            <label>Mensaje</label>
                            <TextArea placeholder="Mensaje" style={{ minHeight: 100 }} />
                        </Form.Field>

                        <Button  color='red' fluid type='submit' style={{ minHeight: 53 }}>Enviar</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Contacto;
