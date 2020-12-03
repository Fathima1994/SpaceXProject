import React from 'react';
import FilterSection from './filtersection';
import DisplayArea from './displayarea';

function Space() {
    return (
        <div className='mainContainer'>
            <h1>SpaceX Launch Programs</h1>
            <FilterSection />
            <DisplayArea />
            <h3 style={{textAlign:'center'}} className='footer'>Developed By: Syeda Fathima</h3>
        </div>
    )
}
export default Space;
