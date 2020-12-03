import React, {useEffect} from 'react';
import '../css/displayarea.css';
import SpaceXLists from './spaceXLists';
import { connect  } from 'react-redux';
import  * as actions from '../spaceXActions/actions';

function DisplayArea(props) {

    useEffect(() => {
        props.fetchSpaceXList();
      }, []);

    return (
        <React.Fragment>
            <div className='displayContainer'>
                <SpaceXLists spaceXLists={props.spaceXLists}/>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    spaceXLists: state.spaceX.spaceXList,
});

export default connect(mapStateToProps,  actions )(DisplayArea);
