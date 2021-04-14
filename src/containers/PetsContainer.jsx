import Card from '../components/Card'
function PetsContainer({pets, petIndex}) {
  const renderCards = () => <Card pet={pets[petIndex]}/>
    return (
      <div className="PetsContainer">
        {renderCards()}
      </div>
    );
  }
  
  export default PetsContainer;
  