import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemonName, pokemonHP, backImg, frontImg }) {

const [isClicked, setClicked] = useState(true)
function handleClick(e){
  setClicked((isClicked) => !isClicked)
}
 

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt={pokemonName} src={isClicked ? frontImg : backImg} />
        </div>
        <div className="content">
          <div className="header">{pokemonName}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemonHP}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
