import React from 'react';
import {Card, Form, Container, Row, Col, Button} from 'react-bootstrap';

const LongCard = (props) => {

    return (
        <Container fluid>
            <Row>
            <Col>
            <Card>
                
                <Form>
                    <Form.Group controlId="formLong">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">
                        (example : -4.4203400)
                        </Form.Text>
                    </Form.Group>

                </Form>

            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default LongCard;