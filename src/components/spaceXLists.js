import React from 'react';
import DisplaySpaceX from './displaySpaceX';

function SpaceXLists(props) {
    return props.spaceXLists.map((spaceXList) => (
        <DisplaySpaceX key={spaceXList.flight_number} spaceXList={ spaceXList}/>
    ));
}
export default SpaceXLists;
