import { useState } from "react";

export function FilterPokedex({ onSearch }){
    return(
        <div className='pkmn__pokedex__filters'>
            <h2 className='pkmn__pokedex__filters__title'>Aplicar Filtros</h2>
            <div className='pkmn__pokedex__filters__container'>
                <div className='pkmn__pokedex__filters__container--height'>
                    <label htmlFor="altura">Altura:</label>
                    <input type="range"/>
                </div>
                <div className='pkmn__pokedex__filters__container--search'>
                    <label htmlFor="busqueda">Nombre:</label>
                    <input type="text" placeholder="Nombre:"/>
                    <button><i className="bi bi-search"></i></button>
                </div>
                <div className='pkmn__pokedex__filters__container--tipo'>
                    <label htmlFor="altura">Tipo:</label>
                    <input type="text"/>
                    <button><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    )
}