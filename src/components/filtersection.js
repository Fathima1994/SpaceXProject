import React, {useState} from 'react';
import '../css/filtersection.css';
import { connect  } from 'react-redux';
import  * as actions from '../spaceXActions/actions';

function FilterSection(props) {
    const [yearClicked, setyearClicked] = useState();
    const [launchClicked, setlaunchClicked] = useState();
    const [landClicked, setlandClicked] = useState();
    const setYear = (val) => {
        setyearClicked(val);
        if(landClicked && launchClicked) {
            props.fetchLaunchYearLandandLaunchSpaceXList(landClicked, launchClicked, val);
        }
        else if(landClicked){
            props.fetchLaunchYearandLandSpaceXList(landClicked, val);
        }else if(launchClicked){
            props.fetchLaunchYearandLaunchspaceXList(launchClicked, val);
        }
        else{
            props.fetchLaunchYearSpaceXList(val);
        }
    };
    const setLand = (val) => {
        val = val.toLowerCase();
        setlandClicked(val);
        if(yearClicked && launchClicked) {
            props.fetchLaunchYearLandandLaunchSpaceXList(val, launchClicked, yearClicked);
        }
        else if(yearClicked){
            props.fetchLaunchYearandLandSpaceXList(yearClicked, val);
        }else if(launchClicked){
            props.fetchLaunchandLandspaceXList(launchClicked, val);
        }
        else{
            props.fetchLandSpaceXList(val);
        }
    };
    const setLaunch = (val) => {
        val = val.toLowerCase();
        setlaunchClicked(val);
        if(landClicked && launchClicked) {
            props.fetchLaunchYearLandandLaunchSpaceXList(landClicked, launchClicked, val);
        }
        else if(landClicked){
            props.fetchLaunchandLandspaceXList(val, landClicked);
        }else if(yearClicked){
            props.fetchLaunchYearandLaunchspaceXList(val, yearClicked);
        }
        else{
            props.fetchlaunchSpaceXList(val);
        }
    };
    return (
        <div class="row">
            <div class="column">
                <div class="filterCard">
                    <h3 style={{textAlign:'left',width:'100%'}}>Filters</h3>
                    <div>
                        <h4 style={{marginBottom:'0'}}>Launch Year</h4>
                        <hr />
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2006" onClick = {(e) => setYear(e.target.value)} />
                            <input type="button" class="buttonStyle" value="2007" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2008" onClick = {(e) => setYear(e.target.value)}/>
                            <input type="button" class="buttonStyle" value="2009" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2010" onClick = {(e) => setYear(e.target.value)}/>
                            <input type="button" class="buttonStyle" value="2011" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2012" onClick = {(e) => setYear(e.target.value)} />
                            <input type="button" class="buttonStyle" value="2013" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2014" onClick = {(e) => setYear(e.target.value)}/>
                            <input type="button" class="buttonStyle" value="2015" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2016" onClick = {(e) => setYear(e.target.value)}/>
                            <input type="button" class="buttonStyle" value="2017" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2018" onClick = {(e) => setYear(e.target.value)}/>
                            <input type="button" class="buttonStyle" value="2019" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="2020" onClick = {(e) => setYear(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <h4 style={{marginBottom:'0'}}>Successfull Launch</h4>
                        <hr />
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="True" onClick = {(e) => setLaunch(e.target.value)}/>
                            <input type="button" class="buttonStyle" value="False" onClick = {(e) => setLaunch(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <h4 style={{marginBottom:'0'}}>Successfull Landing</h4>
                        <hr />
                        <div class="divStyle">
                            <input type="button" class="buttonStyle" value="True" onClick = {(e) => setLand(e.target.value)} />
                            <input type="button" class="buttonStyle" value="False" onClick = {(e) => setLand(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}
const mapStateToProps = state => ({
    spaceXLists: state.spaceX.spaceXList,
});

export default connect(mapStateToProps,  actions )(FilterSection);
