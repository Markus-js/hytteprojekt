export default function Success({ setSuccesToggle, setSliderToggle }) {
  function handleExit() {
    setSuccesToggle(false);
  }
  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <div>
      {setSuccesToggle && (
        <div className={setSuccesToggle ? true : false}>
          <div className="modalContainer">
            <div className="close" onClick={() => handleExit()}>
              <span>&#10005;</span>
            </div>
            <div className="header --green" style={{ background: "#00C851" }}>
              <div>
                <h3>SECCES</h3>
              </div>
              <div className="close--small" onClick={() => handleExit()}>
                <span>&#10005;</span>
              </div>
            </div>
            <main className="popup-modal-content">
              <p>
                Alle produkter er lavet af elever under undervisningsforløb på
                TECHCOLLEGE:
              </p>
              <ul>
                <li>Du kan derfor ikke bestille varer</li>
                <li>
                  Vi kan ikke garantere, at alle produkter er helt færdige
                </li>
                <li>Der kan forekomme små fejl</li>
                <li>Der medfølger ikke materialer</li>
              </ul>
              <p>
                <b>
                  Vær opmærksom på, at du selv skal sørge for afhentning af
                  huset, og at det kræver en lastbil med kran at fragte det.
                </b>
              </p>
              <p>
                Husene står uden for &nbsp;
                <a href="https://maps.google.com/?ll=57.048001,9.970166" target="_blank" rel="noopener noreferrer">tømrerhallen på Øster Uttrup Vej 1, 9000 Aalborg.</a>
                &nbsp; Der er numre på husene, og vi opfordrer til, at du kører
                forbi og ser, hvilket nummer du gerne vil have.
              </p>
              <button
                className="popup-btn"
                style={{ background: "#00C851", color: "#fff" }}
                onClick={() => handleExit()}
              >
                FORSTÅET
              </button>
            </main>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          handleExit();
          handleSlider(false);
        }}
        className="overlay"
      ></div>
    </div>
  );
}
