import React,{useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function NewCakeContainer({ numOfCakes, buyCake }) {
    const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <input type="text" value={number} onChange={e =>setNumber(e.target.value)} /><br/>
      <button onClick={()=>buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state.numberOfCakes);
  return {
    numOfCakes: state.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake:(number)=>dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
