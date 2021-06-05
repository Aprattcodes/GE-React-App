import React from 'react';
import {Card, Form, Container, Row, Col, Button} from 'react-bootstrap';

const LatCard = (props) => {
    return (
        <Container fluid>
            <Row>
            <Col>
            <Card>
                
                <Form>
                    <Form.Group controlId="formLat">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">
                        (example : 36.7201600)
                        </Form.Text>
                    </Form.Group>

                </Form>

            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default LatCard;