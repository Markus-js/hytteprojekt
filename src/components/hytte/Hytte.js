
// handleClick = context
export default function Hytte({ handleClick, data, setSliderToggle }) {

  const priceFixed = parseInt(data.price).toFixed(0);

  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <div key={data.id} className="card">
      <div
        className="imageContainer"
        onClick={() => handleSlider(true)}
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <div className="flexWrap">
        <div>
          <p>Hus nr. {data.number}</p>
          <br />
          <p>Pris: {priceFixed}kr.</p>
        </div>
        <div className="btnContainer">
          <button
            className="btn btn-small"
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
