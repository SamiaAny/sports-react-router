import React from 'react';
import { Button } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import './Banner.css';

const Banner = () => {
    const handlechange = e => {
        console.log(e.target);
    }
    return (
        <div>
            <Menubar></Menubar>
            <div className="banner-container">
                <div className="row ">
                    <div className="col-md-6 banner-details">
                        <div className="banner-title">
                            <h1>BE THE BASKETBALL
                                STAR AND SHINE</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium.</p>
                            <Button variant="danger">About us</Button>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;