import { Component } from 'react';
import './search-box.style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

class SearchBox extends Component {
    render() {
        const {onChangeHandler,placeholder,className} = this.props;
        return ( 
            <div className='search'>
                <input type='search'className={className} placeholder={placeholder} onChange={onChangeHandler}></input>
                <div>
                    <button className='button button1'> <FontAwesomeIcon  icon={faMagnifyingGlass} /></button>
                </div>
            </div>
             );          
    } 
    
}
export default SearchBox;