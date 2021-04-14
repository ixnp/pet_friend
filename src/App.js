import PetsContainer from './containers/PetsContainer'
import FilterSelect from './components/FilterSelect'
import React, {useState} from 'react'
const data = [{
  petType:"dog", 
  image:'https://images.dog.ceo/breeds/doberman/n02107142_17450.jpg',
  name:"Tod"
},
{
  petType:"rose", 
  image:'https://images.dog.ceo/breeds/doberman/n02107142_17450.jpg',
  name:"cat"
}
]

function App() {
 const [petIndex, updatePetIndex] = useState(0)
  return (
    <>
      <FilterSelect />
      <PetsContainer pets={data} petIndex={petIndex}/>
    </>
  );
}

export default App;
