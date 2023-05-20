import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null)

  // Recopila toda la informacion de la API
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    console.log(characterApi);
  // Toda la informacion que queremos tratar
    setCharacters(characterApi.results);
  };

  // console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/* Recibe toda la informacion de los props */}
        {characters ? (
        <Characters  characters={characters} setCharacters={setCharacters}/>
        ) : (
        <>
          <img src={imageRickMorty} className="img-home" alt="Rick & Morty" />
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
        </>
        )}


      </header>
    </div>
  );
}

export default App;
