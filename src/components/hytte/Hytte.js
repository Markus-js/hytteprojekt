import classes from "./Hytte.module.css";

// handleClick = context
export default function Hytte({ handleClick, data, setSliderToggle }) {

  const priceFixed = parseInt(data.price).toFixed(0);

  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <div key={data.id} className={classes.card}>
      <div
        className={classes.imageContainer}
        onClick={() => handleSlider(true)}
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <div className={classes.flexWrap}>
        <div>
          <p>Hus nr. {data.number}</p>
          <br />
          <p>Pris: {priceFixed}kr.</p>
        </div>
        <div className={classes.btnContainer}>
          <button
            className="btn"
            onClick={() => {
              handleClick(data.id);
              handleSlider(false);
            }}
          >
            Læs mere
          </button>
        </div>
      </div>
    </div>
  );
}
