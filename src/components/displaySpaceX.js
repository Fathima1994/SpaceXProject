import React from 'react';
import '../css/displayarea.css';

function displaySpaceX(props) {
    const {is_tentative, launch_year, launch_success} = props.spaceXList;
    return (
            <div className="displayCard">
                <img src={props.spaceXList.links.mission_patch_small} alt="Avatar" style={{width:'100%'}} />
                <div className="container">
                    <h6 style={{marginBottom:'10px', marginTop:'0'}}><b>{props.spaceXList.mission_name} #{props.spaceXList.flight_number}</b></h6>
                    <h6 className='setHeaderStyle'>Mission Ids:</h6>
                    <ul className='setHeaderStyle'>
                        {props.spaceXList.mission_id.map(function(name, index){
                            return <li style={{fontSize:'12px'}}key={ index }>{name}</li>;
                        })}
                    </ul>
                    <h6 className='setHeaderStyle'>Launch Year:{launch_year}</h6>
                    <h6 className='setHeaderStyle'>Successfull Launch:{props.spaceXList.launch_success + ''}</h6>
                    <h6 className='setHeaderStyle'>Successfull Landing:{props.spaceXList.rocket.first_stage.cores[0].land_success + ''}</h6>
                </div>
            </div>
    )
}
export default displaySpaceX;
