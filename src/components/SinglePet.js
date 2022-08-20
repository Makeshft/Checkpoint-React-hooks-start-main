import React from 'react';

function SinglePet(props) {
  const [status, setStatus] = React.useState(false);
  console.log('Made it to SinglePet!')
  return (
    <div className={status ? 'single-pet adopted' : `single-pet`}>
      <h1>{props.pet.name}</h1>
        <p>{props.pet.description}</p>
        <p>{props.pet.species}</p>
      <h2>{status ? 'Adopted!' : 'Available'}</h2>
      <button onClick={() => setStatus(!status)}>Toggle Status</button>
    </div>
  );
}

export default SinglePet;
