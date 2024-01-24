import { useState } from 'react'

export function CardPokedex({imagenPkmn, namePkmn, tipo1, tipo2, contador, peso, altura}){
    //POSIBLES FUNCIONES DE LAS PROPIEDADES DE LOS POKEMONS
    return (
        <article className='pkmn__pokedex__main__card'>
                <div className='pkmn__pokedex__main__card__image'>
                    <img className="pkmn__pokedex__main__card__image__url" src={imagenPkmn} alt={namePkmn} />
                </div>
                <div className='pkmn__pokedex__main__card__info--main'>
                    <p className='pkmn__pokedex__main__card__info--main__name'>{namePkmn}</p>
                    <div className='pkmn__pokedex__main__card__info--main__container'>
                        <p  className='pkmn__pokedex__main__card__info--main__container__types' id={`tipo_${tipo1}`}>{tipo1.toUpperCase()}</p>
                        <p  className='pkmn__pokedex__main__card__info--main__container__types' id={`tipo_${tipo2}`}>{tipo2.toUpperCase()}</p>
                    </div>
                </div>
                <div className='pkmn__pokedex__main__card__info--adicional'>
                    <p className='pkmn__pokedex__main__card__info--adicional__number'>{contador.padStart(4, "#00")}</p>
                    <div className='pkmn__pokedex__main__card__info--adicional__container__stats'>
                        <p className='pkmn__pokedex__main__card__info--adicional__container__stats--weight'>{peso+"kg"}</p>
                        <p className='pkmn__pokedex__main__card__info--adicional__container__stats--height'>{altura+"m"}</p>
                    </div>
                </div>
        </article>
        )
}
