import React, { ReactNode, useState } from 'react';

import { useSyncFilter } from './customFilterHooks';

import Button from '../Button';

import style from './Filters.module.css';

const Filters = () => {

  const { categories, price, filterChanges, resetFilter, skeletonArray, takeValue, prefetchedData } = useSyncFilter();

  const [hideMenu, sethideMenu] = useState(`${style.filter63HideMenu}`);
  const handleHamburger = () => {
    if (hideMenu === `${style.filter63HideMenu}`) {
      sethideMenu(`${style.filter63ShowMenu}`);
    }
    else {
      sethideMenu(`${style.filter63HideMenu}`);
    }
  }

  return (
    <form id="filter" onChange={(e) => filterChanges(e)} onReset={() => resetFilter()}>
      <div className={style.filters76Sidebar}>
        <div className={style.filters90TitleWithReset}>
          <h2>Filters</h2>
          <div className={style.filter56TopButtons}>
            {
              hideMenu.length ?
                <Button value="&#9660;" type="button" className={style.filter45HamburgerButon} func={() => handleHamburger()} />
                :
                <Button value="&#9650;" type="button" className={style.filter45HamburgerButon} func={() => handleHamburger()} />
            }
            <input type='Reset' className={`${style.filters65Buttons} ${hideMenu}`} />
          </div>
        </div>
        <div className={hideMenu}>
          <div className={style.filters65Sort}>
            <h3>Sort</h3>

            <h4 className={style.filters31SortType}>By Name</h4>
            <div className={style.sort91Radios}>
              <div>
                <input readOnly type="radio" id='asc' value="asc" name='sort' checked={prefetchedData?.sort === "asc"} onChange={() => { }} /> <label htmlFor='asc' >Ascending</label>
              </div>
              <div>
                <input readOnly type="radio" id='dec' value="dec" name='sort' checked={prefetchedData?.sort === "dec"} /> <label htmlFor='dec' >Descending</label>
              </div>
            </div>

            <h4 className={style.filters31SortType}>By Price</h4>
            <div className={style.sort91Radios}>
              <div>
                <input readOnly type="radio" id='lowHigh' value="lowHigh" name='sort' checked={prefetchedData?.sort === "lowHigh"} /> <label htmlFor='lowHigh' >Low to High</label>
              </div>
              <div>
                <input readOnly type="radio" id='highLow' value="highLow" name='sort' checked={prefetchedData?.sort === "highLow"} /> <label htmlFor='highLow' >High to Low</label>
              </div>
            </div>
          </div>

          <div className={style.filters56Categories}>
            <h3>Select Category</h3>
            <div className={style.filters23AllCategories}>

              {
                categories ?
                  categories.map((category, index): ReactNode => {
                    return <li key={index}>
                      <input readOnly type='checkbox' id={category} name='category' value={category} checked={prefetchedData?.filterCategories.has(category)} />
                      <label htmlFor={category}> {category} </label>
                    </li>
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
        </div>
      </div>
    </form>
  )
}

export default Filters;
