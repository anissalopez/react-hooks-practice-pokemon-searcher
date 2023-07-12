import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {

  const pokemonList = pokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemonName={pokemon.name} pokemonHP={pokemon.hp} backImg={pokemon.sprites.back} frontImg={pokemon.sprites.front}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
