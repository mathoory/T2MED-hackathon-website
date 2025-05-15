import './style.scss';

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="PrizeCard">
      <h2 className="prize-title">{props.title}</h2>
      <div className="prize-bottom-align">
        <img src={props.image} alt="Prize" className="prize-image" />
      </div>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
