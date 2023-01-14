import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
      const {displayIcon,displayName,description} = this.props.agen;
      return (
          <div className='card-container'>
                <img src={displayIcon} alt={`agen ${displayName}`} />
                <h2>{displayName}</h2>
                <p>{description}</p>
          </div>
      );
    }
}
export default Card;
