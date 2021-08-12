import { Fragment } from "react";
import Hytte from "./Hytte";


export default function HytteList({ handleClick, hytteListe, setSliderToggle }) {
  return (
    <div className="container">
      {hytteListe.map((data) => {
        // handleClick = context
        // setSliderToggle = context
        if(data.num_reservations == 0) {

    
       console.log(data.num_reservations)

        return (
         <Fragment>
            <Hytte key={data.id} handleClick={handleClick} data={data} setSliderToggle={setSliderToggle}/>

         </Fragment>
        )
      }
      })}
    </div>
  );
}
