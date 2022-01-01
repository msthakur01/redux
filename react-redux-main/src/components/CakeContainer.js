import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
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
    buyCake:()=>dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
