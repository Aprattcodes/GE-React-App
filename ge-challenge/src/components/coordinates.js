import React, {useState} from 'react';
import LongCard from './longitude';
import LatCard from './latitude';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

// const onSearch = () => {
//     fetch(``)
// }

const Coordinates = () => {
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');
    return(
        <>
            <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
                {/* xs={4} takes the one third  of the page*/}
                <Col xs={4} className="text-center">
                <LongCard
                    placeholder="Enter Longitude"
                    // update long value with the user's input
                    onChange={(event) => setLong(event.target.value)}
                    // value will be the currently selected long
                    value={long}
                />
                </Col>

                <Col xs={4} className="text-center">
                <LatCard
                    placeholder="Enter Latitude"
                    // update lat value with the user's input
                    onChange={(event) => setLat(event.target.value)}
                    // value will be the currently selected lat
                    value={lat}
                />
                </Col>

            </Row>

            <Row>
                <Col>
                {/* event handler for button click */}
                <Button >Check Coordinates</Button>
                </Col>
            </Row>
        </>
    );
};

export default Coordinates;