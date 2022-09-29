import React from 'react';
import mission from '../../../assets/images/mission.png';

const Mission = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  items-center my-10 mx-2">
            <div className="col md-6">
                <img className="img-fluid" src={mission} alt="#" />
            </div>
            <div className="col md-6">
                <h2 style={{ fontSize: '48px' }} className="">
                    Mission
                </h2>
                <p className="text-justify">
                    Our exclusive focus is on service and support quality is our
                    priority.
                </p>
            </div>
        </div>
    );
};

export default Mission;
