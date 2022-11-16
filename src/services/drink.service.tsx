import { DRINK_API } from '../config/drink.api';
import { IDrink } from '../interfaces/drink';
import { adapt } from '../utils';

export default class DrinkService {

    constructor() { }

    getDrinksByName(name: string): Promise<IDrink[]> {

        const map = {
            "idDrink": "id",
            "strDrink": "drinkName",
            "strAlcoholic": "isAlcolic",
            "strCategory": "category",
            "strDrinkThumb": "thumb",
            "strInstructions": "instructions",
            "strVideo": "urlVideo"
        }

        return new Promise((res, rej) => {
            fetch(DRINK_API.searchByName + name)
                .then(data => {
                    return data.json()
                })
                .then((result: any) => {
                    if (result.drinks != null) {
                        res(result.drinks.map((x: any) => this.mapDrink(x, map)))
                    }
                    else {
                        res([])
                    }
                })

        })

    }

    private mapDrink(obj: any, map: any) {

        let start = 1
        let end = 15

        let ingredients = []
        let measures = []

        // - put ingredients and measure to arrays
        for (let i = start; i < end; i++) {

            if (obj['strIngredient' + i] != null) {
                ingredients.push(obj['strIngredient' + i])
            }

            if (obj['strMeasure' + i] != null) {
                measures.push(obj['strMeasure' + i])
            }

        }

        let drink: IDrink = adapt(obj, map)

        drink.ingredients = ingredients
        drink.measures = measures

        drink.isAlcolic = obj.strAlcoholic == "Alcoholic"

        return drink

    }

}


