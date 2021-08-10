
import classes from "./Popup.module.css";

export default function Popup({ handlePopup, setPopup }) {
  function handleExit() {
    setPopup(false);
  }

  return (
    <div>
      {handlePopup && (
        <div className={handlePopup ? true : false}>
          <div className="modalContainer">
            <div className="header --blue">
              <h3>Læs dette, inden du bestiller</h3>
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
                <a href="">tømrerhallen på Øster Uttrup Vej 1, 9000 Aalborg.</a>
                &nbsp; Der er numre på husene, og vi opfordrer til, at du kører
                forbi og ser, hvilket nummer du gerne vil have.
              </p>
              <button className="popup-btn" onClick={() => handleExit()}>
                FORSÆT
              </button>
            </main>
          </div>
        </div>
      )}
        <div
    className="overlay"
  ></div>
    </div>
  );
}