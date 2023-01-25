import { useState, useEffect } from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';


import './App.css';

const App=() =>{
  const [searchField,setSearchField] = useState('');
  const [data, setData] = useState([]);
  const [filteredAgents,setFilteredAgents] = useState(data);
  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
    .then(res => res.json())
    .then(json => {
      setData(json.data);
    })
  }, [])
  useEffect(() => {
    console.log(data);
  })

  useEffect(()=>{
    const newFilteredAgents = data.filter((agen) => {
      return agen.displayName.toLocaleLowerCase().includes(searchField);
    });
    setFilteredAgents(newFilteredAgents)
  },[data,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log("searchField: ",searchFieldString);
  }
  return (
    <div className="App"  >
      <h1  className='app-title'>VALORANT CHARACTERS</h1>
      <SearchBox 
      onChangeHandler={onSearchChange }
        placeholder='search agents'
        className='search-box'
        />
      <CardList data={filteredAgents} />
    </div>
  );
}
export default App;
