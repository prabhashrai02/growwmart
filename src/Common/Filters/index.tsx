import { updateShowList } from '@/Store/slices/productSlice';
import { useFilters } from '@/utils/customHooks';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import style from './Filters.module.css';
import { FilterData } from './Types';


const Filters = () => {

  const { categories, price, setPrice } = useFilters();
  const { query } = useRouter();

  const dispatch = useDispatch();

  const takeValue = (event: any) => {
    setPrice(event.currentTarget.value * 10);
  }


  const resetFilter = () => {

    const filterCategory: Set<FormDataEntryValue> = new Set();

    const sort = '';

    setPrice(1000);

    const filter: FilterData = {
      priceFilter: 1000,
      sort: sort,
      selectCategory: filterCategory
    }

    dispatch(updateShowList(filter));
  }

  const filterChanges = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = new FormData(event.currentTarget);

    const filterCategory: Set<FormDataEntryValue> = new Set(target.getAll('category'));
    const sort = target.get('sort');

    const filter: FilterData = {
      priceFilter: price,
      sort: sort,
      selectCategory: filterCategory
    }

    dispatch(updateShowList(filter));
  }

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
              categories.map((category, index): ReactNode => {
                return <li key={index}> <input type='checkbox' name='category' value={category} /> {category} </li>
              })
            }
          </div>
        </div>

        <div className={style.filters34PriceFilter}>
          <h3> Price Filter </h3>
          <input type='range' className={style.filters32PriceRange} onChange={takeValue} value={price / 10} />
          <h5>&#x20b9; {price}</h5>
        </div>

        <input type='Submit' className={style.filters65Buttons} />
      </div>
    </form>
  )
}

export default Filters;
