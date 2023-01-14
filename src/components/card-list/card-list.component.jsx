import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='card-list'>
        {
          data.map((agen, i) => {
            if(i!==8)
            {
              const {uuid} = agen;
            return (
              <Card agen={agen} key={uuid}/>
            )
          }
          })  
        }
      </div>
    );
  }
}
export default CardList;
