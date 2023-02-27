import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as AllFuncions from "./parks/RockyMountain";

function ColoradoStateParks() {
    howManyParks(); // => "42 parks!"

    return <h1 > Colorado State Parks! < /h1>;
    console.log(AllFuncions.trees);
    AllFuncions.wildlife();
    return ( <
        div >
        <
        h1 > Colorado State Parks! < /h1> <
        MesaVerde / >
        <
        /div>
    );
}

export default ColoradoStateParks;