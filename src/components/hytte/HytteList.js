import { Fragment } from "react";
import Hytte from "./Hytte";
import classes from "./Hytte.module.css"

export default function HytteList({ handleClick, data, hytteListe, setSliderToggle }) {
  return (
    <div className="container">
      {hytteListe.map((data) => {
        // handleClick = context
        // setSliderToggle = context
        return (
         <Fragment>
            <Hytte key={data.id} handleClick={handleClick} data={data} setSliderToggle={setSliderToggle}/>

         </Fragment>
        )
      })}
    </div>
  );
}
