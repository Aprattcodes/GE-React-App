import React, {useState} from 'react';
import LongCard from './longitude';
import LatCard from './latitude';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';

const Coordinates = () => {
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');

    const onSearch = () => {
    
        fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
        // fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400')
        .then((response) => response.json())
        .then((result) => console.log(result));
    } 

    return(
        <>
        <Row>
        <Col>
          <h1>Search your area:</h1>
        </Col>
        </Row>
        <Row>
            {/* xs={4} takes the one third  of the page*/}
            <Col xs={4} className="text-center">
                <Card>
                
                <Form>
                    <Form.Group controlId="formLat">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="text"
                        onChange={(event) => setLat(event.target.value)}
                        value={lat}
                        />
                        <Form.Text className="text-muted">
                        (example : 36.7201600)
                        </Form.Text>
                    </Form.Group>
                </Form>

                </Card>
                </Col>

                <Col xs={4} className="text-center">
                <Card>
                
                <Form>
                    <Form.Group controlId="formLong">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="text"
                        onChange={(event) => setLong(event.target.value)}
                        value={long}
                        />
                        <Form.Text className="text-muted">
                        (example : -4.4203400)
                        </Form.Text>
                    </Form.Group>
                </Form>

                </Card>
                </Col>
                <Col>
                    <Button onClick={onSearch}>Check Coordinates</Button>
                </Col>
        </Row>
        
       

        </>
    );
};

export default Coordinates;