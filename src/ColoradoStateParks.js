import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { wildlife } from "./parks/RockyMountain";
// import {trees,wildlife} from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  wildlife(); //=>"Elk, Bighorn Sheep, Moose"


  return <div>
    
  <h1>Colorado State Parks!</h1>
  <MesaVerde />
 

  </div>
}
 export default ColoradoStateParks