import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";


function HooksCakeConatainer() {
    const numOfCakes = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeConatainer;
