import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({updatePokemon}) {

  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")


function handleSubmit(){
  const newForm = {
    name: name,
    hp: hp,
    sprites:{
      front: front,
      back: back
    }
  }

  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newForm)
  })
  .then((response) => response.json())
  .then((data) => updatePokemon(data))
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=> setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
