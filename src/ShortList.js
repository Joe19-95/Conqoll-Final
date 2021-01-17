import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './ShortList.css';
import CityList from "./CityList";

import {
    selectShort,
} from './features/city/citySlice';

function ShortList() {
    const short = useSelector(selectShort);
    return (

        <div className="city" >
            <div  className="city__header" >

                <p className="mw" > Name </p>
                <p className="mw" >District</p>
                <p className="mw" >City</p>
                <p className="mw" >Action</p>  
            </div>
        <div>
             {
             short.map((m)=>{
                return <CityList city={m} key={m.alpha2Code} short={true} ></CityList>
             })
         } 
            </div> 
         
        </div>
    )
}

export default ShortList
