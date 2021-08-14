
import Hytte from "./Hytte";


export default function HytteList({ handleClick, hytteListe, setSliderToggle }) {
  return (
    <div className="container">
      {hytteListe.map((data) => {
        // handleClick = context
        // setSliderToggle = context

    
       console.log(data.num_reservations)

        return (
            <Hytte key={data.id} handleClick={handleClick} data={data} setSliderToggle={setSliderToggle}/>

        )
      
      })}
    </div>
  );
}
