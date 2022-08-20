import React from 'react';
import SinglePet from './SinglePet';
// import pets from '../petdata';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};


// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [filterBy, setFilterBy] = React.useState("all");
  const [petList, setPetList] = React.useState();

  React.useEffect(() => {
    const pets = props.pets.filter(pet => {
      if(filterBy === "all") {
        return true;
      } else {
        return pet.species === filterBy
      };
    }).map(pet => <SinglePet pet={pet} key={pet.id}/>);

    setPetList(pets);
    }, [filterBy]);

  return (
    <>
      <div className="pet-list">
        {petList}
        <div>
          <select
            defaultValue={filterBy}
            onChange={event => setFilterBy(event.target.value)}
          >
              <option value={"all"}>all</option>
              <option value={"cat"}>cats</option>
              <option value={"dog"}>dogs</option>
          </select>
          <h1>You Selected {filterBy}</h1>
        </div>
      </div>
    </>
  )
}

export default PetList;
