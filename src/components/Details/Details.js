import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Menubar from '../Menubar/Menubar';
import './Details.css';
import male from '../../img/male.png';
import female from '../../img/female.png';

const Details = () => {
    const {teamId} = useParams();
    const [details,setDetails] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]));
    },[])
    return (
        <div>
            <Menubar></Menubar>
            <div className="details-container">
                <div className="gender-img">
                    {details.strGender ==="Male" ? ( 
                        <img src={male} alt="" />
                        ) : (
                        <img src={female} alt=""/> 
                        )   
                }
                </div>
                <div className="team-details">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div>
                                    <img className="w-50" src={details.strTeamBadge} alt="" />
                                </div>
                                <div>
                                    <h1>{details.strTeam}</h1>
                                    <p>{details.strAlternate}</p>
                                    <p>{details.strLeague}</p>
                                </div>
                            </Col>
                            <Col md={8}>
                                <p>{details.strStadiumDescription}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Details;