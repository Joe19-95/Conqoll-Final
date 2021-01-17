import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import instance from "./axios";
import {
    fetch,
    selectCity ,
    addNewCity
} from './features/city/citySlice';

import CityList from "./CityList";

function City() {
    const dispatch = useDispatch();
    const [itemlis, setList] = useState([]);
    const [input, setInput] = useState("");
    const [state, setState1] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [togadder, setTogad] = useState(false);
    const [filter, setFilter] = useState([]);
    const togAdd=()=>{
        setTogad(!togadder)
    }
    const subhandle=(e)=>{
        e.preventDefault()
        dispatch(addNewCity([state,district,city]))
        setCity("")
        setTogad(!togadder)
    }
    useEffect(() => {
        async function call() {
            const ob = await instance.get("/v2/all");
            dispatch(fetch(ob.data))
            setList(ob.data);
            return ob;
        }
        call();
    }, []);
    const citysate = useSelector(selectCity);
    useEffect(() => {
        var temp=[]
        temp=citysate.filter((m)=>{
           return  m.name.toLowerCase().includes(input.toLocaleLowerCase())
        })
        setFilter(temp)
    }, [input,citysate])
   
    return (
        <div className="city" >
            <div className="city__header" >
                <p className="mw" >State <input value={input} onChange={(e)=>setInput(e.target.value)} ></input>  </p>
                <p className="mw" >District</p>
                <p className="mw" >City</p>
                <p className="mw" >Action <button className="add" onClick={togAdd} >Add New City</button> </p>
               
            </div >
            {
                    togadder&&<div  className="city__header space" >
                        <form>
                        <input value={city} onChange={(e)=>setCity(e.target.value)}  className="mw1"  placeholder="City"></input>
                        <label for="cars">State:</label>
<select    value={state} id="cars" onChange={(e)=>setState1(e.target.value)} className="mw1" name="cars">
  <option value="Afghanistan">Afghanistan</option>
  <option value="Islands">Islands</option>
  <option value="Albania">Albania</option>
  <option value="Algeria">Algeria</option>
  <option value="American">American </option>
</select>
                       <label for="cars">District:</label>
<select    value={district} id="cars" onChange={(e)=>setDistrict(e.target.value)}  className="mw1" name="cars">
  <option value="Kabul">Kabul</option>
  <option value="Mariehamn">Mariehamn</option>
  <option value="Tirana">Tirana</option>
  <option value="Algiers">Algiers</option>
</select>
                      
                       <button className="add" onClick={subhandle} >Update City List</button>
                        </form>
                    </div>
                }
<div className="citylistbox" >

            {
                filter.map((v) => {
                    
                    return <CityList city={v} key={v.alpha2Code} ></CityList>
                    
                })
                
            }
            </div>
        </div>
    )
}

export default City
