import React from 'react';
import '../css/displayarea.css';

function displaySpaceX(props) {
    const {is_tentative, launch_year, launch_success} = props.spaceXList;
    return (
        <div>
            <div className="displayCard">
                <img src={props.spaceXList.links.mission_patch_small} alt="Avatar" style={{width:'100%'}} />
                <div className="container">
                    <h6><b>{props.spaceXList.mission_name} #{props.spaceXList.flight_number}</b></h6>
                    <h6>Mission Ids:</h6>
                    <ul>
                        {props.spaceXList.mission_id.map(function(name, index){
                            return <li key={ index }>{name}</li>;
                        })}
                    </ul>
                    <h6>Launch Year:{launch_year}</h6>
                    <h6>Successfull Launch:{props.spaceXList.launch_success + ''}</h6>
                    <h6>Successfull Landing:{props.spaceXList.rocket.first_stage.cores[0].land_success + ''}</h6>
                </div>
            </div>
        </div>
    )
}
export default displaySpaceX;
