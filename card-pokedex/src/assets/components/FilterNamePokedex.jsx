import { useState } from "react";

function filterPokemonsByName(pokemons, searchTextName) {
    return pokemons.filter(pokemon => pokemon.namePkmn.toLowerCase().includes(searchTextName.toLowerCase()));
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

export default SearchInputName;