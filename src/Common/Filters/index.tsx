import { useFilters } from '@/utils/customHooks';
import React, { ReactNode } from 'react';
import style from './Filters.module.css';


const Filters = () => {

  const { categories, price, setPrice } = useFilters();

  const takeValue = (event: any) => {
    setPrice(event.currentTarget.value * 10);
  }

  return (
    <div className={style.filters76Sidebar}>
      <div className={style.filters65Sort}>
        <h3><label>Sort</label></h3>
        <div className={style.sort91Radios}>
          <div>
            <input type="radio" value="Asc" name='sort' /> Asc
          </div>
          <div>
            <input type="radio" value="Desc" name='sort' /> Desc
          </div>
        </div>
      </div>

      <div className={style.filters56Categories}>
        <h3><label>Select Category</label></h3>
        <div className={style.filters23AllCategories}>

          {
            categories.map((category, index): ReactNode => {
              return <li key={index}> <input type='checkbox' /> {category} </li>
            })
          }
        </div>
      </div>

      <div className={style.filters34PriceFilter}>
        <h3> Price Filter </h3>
        <input type='range' className={style.filters32PriceRange} onChange={takeValue} step={10} min={10} value={price / 10} />
        <h5>&#x20b9; {price}</h5>
      </div>
    </div>
  )
}

export default Filters;
