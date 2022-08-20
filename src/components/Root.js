import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {


  const [pets, setPets] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      try {
        const data = [];
        const res = await axios.get('/api/pets');
        res.data.forEach(el => {
          data.push(el)
        });
        console.log(res);
        setPets(data);
      } catch (e) {
        console.error(e.stack);
        <h1>Error</h1>
      }
    };
    getData();
  }, [])

  return (
    <>
      <h1>Adoption Center</h1>
      <h2>{console.log('Hello!')}</h2>
      <PetList pets={pets} />
    </>
  )
}

export default Root;
