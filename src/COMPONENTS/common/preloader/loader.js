import React from "react";
import preloader from "../../../asets/imgages/loader.gif"
function Preloader(props) {
    return <div>
        <img style={{width:'150px'}} src={preloader} alt="loading.."/>
    </div>
}
export default Preloader