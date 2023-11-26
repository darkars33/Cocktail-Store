import React from 'react';
import { useGlobalContext } from '../context';

export default function Search() {
  const {setSearchTerm} = useGlobalContext();
  const searchValue= React.useRef('');

  const changeCocktail= () =>{
      setSearchTerm(searchValue.current.value)
  }
  return (
    <section className='section search'>
        <form className='search-form' onSubmit={(e) =>{
          e.preventDefault();
        }}>
          <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            <input type="text" ref={searchValue} id='name' onChange={changeCocktail}/>
          </div>
        </form>
    </section>
  )
}
