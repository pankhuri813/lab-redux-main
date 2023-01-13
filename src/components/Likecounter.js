

import { increment,decrement } from "./Action";
import React,{useState} from "react";
import Reducer from "./Reducer";
import { legacy_createStore } from "redux";

const Store = legacy_createStore(Reducer)

export default function Button (){
    const [value,setvalue] = useState(0);

    const unsubscribe = Store.subscribe(() => {
        setvalue(Store.getState().count);
      });

     return(
        <div>
            <h1>{value}</h1>
            <button onClick={()=>Store.dispatch(increment())} >Like</button>
            <button onClick={()=>Store.dispatch(decrement())} >DisLike</button>
        </div>
     )
}