import { useSyncFilter } from './customFilterHooks';
import React, { ReactNode } from 'react';
import style from './Filters.module.css';

const Filters = () => {

  const { categories, price, filterChanges, resetFilter, skeletonArray, takeValue } = useSyncFilter();

  return (
    <form onSubmit={(e) => filterChanges(e)} onReset={() => resetFilter()}>
      <div className={style.filters76Sidebar}>
        <div className={style.filters90TitleWithReset}>
          <h2>Filters</h2>
          <input type='Reset' className={style.filters65Buttons} />
        </div>
        <div className={style.filters65Sort}>
          <h3><label>Sort</label></h3>

          <h4 className={style.filters31SortType}><label>By Name</label></h4>
          <div className={style.sort91Radios}>
            <div>
              <input type="radio" value="asc" name='sort' /> <label>Ascending</label>
            </div>
            <div>
              <input type="radio" value="dec" name='sort' /> <label>Descending</label>
            </div>
          </div>

          <h4 className={style.filters31SortType}><label>By Price</label></h4>
          <div className={style.sort91Radios}>
            <div>
              <input type="radio" value="lowHigh" name='sort' /> <label>Low to High</label>
            </div>
            <div>
              <input type="radio" value="highLow" name='sort' /> <label>High to Low</label>
            </div>
          </div>
        </div>

        <div className={style.filters56Categories}>
          <h3><label>Select Category</label></h3>
          <div className={style.filters23AllCategories}>

            {
              categories.length ?
                categories.map((category, index): ReactNode => {
                  return <li key={index}> <input type='checkbox' name='category' value={category} /> {category} </li>
                })
                :
                skeletonArray.map((_, index): ReactNode => {
                  return <span className={style.skeleton_loader_background} key={index}></span>
                })
            }
          </div>
        </div>

        <div className={style.filters34PriceFilter}>
          <h3> Price Filter </h3>
          <input type='range' className={style.filters32PriceRange} onChange={(event) => takeValue(event)} value={price / 10} />
          <h5>&#x20b9; {price}</h5>
        </div>

        <input type='Submit' className={style.filters65Buttons} />
      </div>
    </form>
  )
}

export default Filters;
