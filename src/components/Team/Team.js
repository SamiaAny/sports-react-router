import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { idTeam,strTeamBadge, strTeam, strCountry, strGender} = props.team;
    return (
        <div>
            <Col>
                <Card className="p-3">
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>Team Name: {strTeam}</Card.Title>
                        <p>Country: {strCountry}</p>
                        <small>Gender: {strGender}</small><br/>
                        <Link to={`/details/${idTeam}`}>
                            <Button varient="info">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Team;