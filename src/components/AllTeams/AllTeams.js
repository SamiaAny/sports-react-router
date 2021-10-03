import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Team from '../Team/Team';
import './AllTeams.css';

const AllTeams = () => {
    const [teams, setTeams] = useState([]);
    const [allTeams,setAllteams] = useState([]);
    const handleChange = (event) => {
        // console.log(event.target);
        const searchText = event.target.value;
        console.log(searchText);
        setTeams(searchText);
    }
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teams}`)
            .then(res => res.json())
            .then(data => setAllteams(data?.teams));
    }, [teams]);

    return (
        <div >
            <h1>Our Teams</h1>
            
            <div className="search-box">
                <input type="search"  onChange={handleChange} className="mt-2 me-2" />
               
                <Button  varient="success">Search</Button>
                
            </div>

            <div className="teams-container mt-5">
                <Row xs={1} md={3} className="g-5">
                    {
                        allTeams?.map(team => <Team
                        key={team.idTeam}
                        team={team}
                        ></Team>)
                    }
                    {/* {teams.map(team=> (
                        <Col>
                        <Card className="p-3">
                            <Card.Img variant="top" src={team.strTeamBadge} />
                            <Card.Body>
                                <Card.Title>Team Name: {team.strTeam}</Card.Title>
                                <p>Country: {team.strCountry}</p>
                                <small>Gender: {team.strGender}</small><br/>
                                <Link to={`/details/${team.idTeam}`}>
                                    <Button varient="info">Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))} */}
                </Row>
            </div>
        </div>
    );
};

export default AllTeams;