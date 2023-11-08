import { useState } from 'react';
import './App.css'

/* LISTA POKEMONS */
import { pokemons } from './assets/js/pokemons';

/* COMPONENTES */
import { TitlePokedex } from './assets/components/TitlePokedex';
import { CardPokedex } from './assets/components/CardPokedex';

function filterPokemonsByName(pokemons, searchTextName) {
  return pokemons.filter(pokemon => pokemon.namePkmn.toLowerCase().includes(searchTextName.toLowerCase()));
}

function filterPokemonsByType(pokemons, searchTextType) {
  return pokemons.filter(pokemon => pokemon.tipo1.toLowerCase().includes(searchTextType.toLowerCase()) || pokemon.tipo2.toLowerCase().includes(searchTextType.toLowerCase()));
}

function SearchInputName({ value, onChange }) {
  return (
          <div className='pkmn__pokedex__filters__container--search'>
            <label htmlFor="busqueda">Name:</label>
            <input
                type="text"
                placeholder="Write a name..."
                value={value}
                onChange={e => onChange(e.target.value)}
            />
          </div>
  );
}

function SearchInputType({ value, onChange }) {
  return (
    <div className='pkmn__pokedex__filters__container--tipo'>
      <label htmlFor="altura">Type:</label>
      <input
          type="text"
          placeholder="Write a type..."
          value={value}
          onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

// function SearchInputHeight({ value, onChange }) {
//   return (
//           <div className='pkmn__pokedex__filters__container--height'>
//             <label htmlFor="busqueda">Height:</label>
//             <input
//                 type="number"
//                 placeholder="Write a name..."
//                 value={(value===null)?0:value}
//                 onChange={e => onChange(e.target.value)}
//             />
//           </div>
//   );
// }

function PokemonsList({ pokemons, emptyHeading }) {
  if (pokemons.length === 0) {
    return <p className='pkmn__pokedex__main--no-matches'>{emptyHeading}</p>; //Aplicar estilos a la excepción
  }

  return (
          pokemons.map(({imagenPkmn, namePkmn, tipo1, tipo2, contador, peso, altura}) => (
            <CardPokedex
            key={contador}
            imagenPkmn={imagenPkmn}
            namePkmn={namePkmn}
            tipo1={tipo1}
            tipo2={tipo2}
            contador={contador}
            peso={peso}
            altura={altura}>
            </CardPokedex>
          ))
  );
}

export function App() {
  //Controlamos las modificaciones de los inputs
  const [searchTextName, setSearchTextName] = useState('');
  const [searchTextType, setSearchTextType] = useState('');

  //Guardamos filtrados por el input
  const foundPokemonsByName = filterPokemonsByName(pokemons, searchTextName);
  const foundPokemonsByType = filterPokemonsByType(pokemons, searchTextType);

  const filteredPokemons = foundPokemonsByName.filter(pokemon =>
    foundPokemonsByType.includes(pokemon)
  );

  return(
    <section className='pkmn__pokedex'>
        <TitlePokedex/>
        <div className='pkmn__pokedex__filters'>
            <h2 className='pkmn__pokedex__filters__title'>Aplicar Filtros</h2>
            <div className='pkmn__pokedex__filters__container'>
              <SearchInputName 
              value={searchTextName}
              onChange={newText => setSearchTextName(newText)}/>
              <SearchInputType
              value={searchTextType}
              onChange={newText => setSearchTextType(newText)}/>
            </div>
        </div>
        <main className='pkmn__pokedex__main'>
          <PokemonsList
            pokemons={filteredPokemons}
            emptyHeading={`No matches`}
          />
        </main>
    </section>
  )
}

{/*TIPOS CON SELECT OPTION*/}

export default App



