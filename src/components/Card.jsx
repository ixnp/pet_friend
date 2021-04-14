import 'semantic-ui-css/semantic.min.css'

function Card({pet}) {
    return (
      <div className="ui card two column centered grid" >
          <div class="ui slide masked reveal image">
            <img src={pet.image} />
          </div>
          <div class="content">
            <a class="header">{pet.name}</a>
            <div class="meta">
                <span>{pet.petType}</span>
            </div>
            <button class="circular ui icon button left floated"><i class="heart icon"></i></button>
            <button class="circular ui icon button right floated"><i class="times circle icon"></i></button>
          </div>
       
        
      </div>
    );
  }
  
  export default Card;
  