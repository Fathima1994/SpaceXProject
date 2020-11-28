import React from 'react';
import FilterSection from './filtersection';
import DisplayArea from './displayarea';

function Space() {
    return (
        <div className='mainContainer'>
            <h1>SpaceX Launch Programs</h1>
            <FilterSection />
            <DisplayArea />
        </div>
    )
}
export default Space;
