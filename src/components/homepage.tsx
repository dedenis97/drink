import React, { useState } from "react";
import { IDrink } from "../interfaces/drink";
import DrinkService from "../services/drink.service";
import DrinkCard from "./drink-card/drink-card";
import Filters, { FilterEnum, IFilter } from "./filters";
import HeaderDrink from "./header";
import Search from "./search";

export default function Homepage() {
  const [, updateState] = React.useState<any>();
  const __forceUpdate = React.useCallback(() => {
    console.log('force update');
    updateState({})
  }, []);

  let savedDrinkList: IDrink[] = []
  const drinkService: DrinkService = new DrinkService()

  const [drinks, setDrinks] = useState<IDrink[]>([])

  const [drinksView, setDrinksView] = useState<any[]>([])

  const [searched, setSearched] = useState(false)

  function updateDrinkView(list: IDrink[]) {

    buildDrinkList(list)

    __forceUpdate()
  }

  function onSearch(value: string) {
    searchDrink(value)

    __forceUpdate()
  }

  function onFilterChange(filters: IFilter) {

    let drinkListCopy = drinks

    if (filters.Shot) {
      drinkListCopy = drinkListCopy.filter((x: IDrink) => x.category == "Shot")
    }

    if (filters.Cocktail) {
      drinkListCopy = drinkListCopy.filter((x: IDrink) => x.category == "Cocktail")
    }

    if (filters.Analcolico) {
      drinkListCopy = drinkListCopy.filter((x: IDrink) => !x.isAlcolic)
    }

    updateDrinkView(drinkListCopy)

  }

  function searchDrink(value: string) {
    drinkService.getDrinksByName(value)
      .then(res => {

        if (res.length > 0) {
          setSearched(true)
        } else {
          setSearched(false)
        }

        setDrinks(res)

        updateDrinkView(res)
      })
  }

  function buildDrinkList(res: IDrink[]) {
    let list: any[] = []
    for (let i = 0; i < res.length; i++) {

      list.push(
        <span className='drink-wrapper'>
          <DrinkCard drink={res[i]}></DrinkCard>
        </span>
      )

      setDrinksView(list)
    }
  }

  return (
    <div className="App">
      <div className='body gradient'>

        <div className={"search-wrapper " + (searched ? 'searched' : '')}>
          {!searched && <h1 className="title">Trova alcolismo</h1>}
          <Search onSearch={onSearch}></Search>
        </div>

        <div className='drinks-wrapper'>
          <div className='filters-wrapper'>
            <Filters onChangeFilters={onFilterChange}></Filters>
          </div>

          <div className="result">
            {drinksView}
          </div>
        </div>

      </div>
    </div >
  );
}