import React from 'react'
import './CityList.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    deleteRec,adrec
} from './features/city/citySlice';

function CityList({city,key,short}) {
    const dispatch = useDispatch()
    const deletRecord =()=>{
        dispatch(deleteRec(city.name))
    }
    const addRecord =()=>{
        dispatch(adrec(city))
    }

    return (
        <div className="cityList" >
        <p className="cityList__state mw" >{city.name}</p>
        <p className="cityList__district mw" >{city.capital}</p>
        <p className="cityList__city mw " >{city.region}</p>
        <div className="cityList__city mw" >
           { !short&&<button  className="buttonCity green" onClick={addRecord} >Shortlist</button>}
            <button className="buttonCity red" onClick={deletRecord} >Delete</button>
        </div>
    </div>
    )
}

export default CityList
