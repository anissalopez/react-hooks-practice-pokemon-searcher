import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch]  = useState("")


  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then((data) => setPokemons(data))
  }, [])


function updateSearch(searchValue){
  setSearch(searchValue)
}

const filteredPokemons = pokemons.filter((pokemon) => {
  if(search.length > 0){
    return pokemon.name.includes(search)
  }
  else{
    return pokemon
  }
})

function updatePokemon(pokemon){
  const newPokemon = [...pokemons, pokemon]
  setPokemons(newPokemon)
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updatePokemon={updatePokemon}/>
      <br />
      <Search updateSearch={updateSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
