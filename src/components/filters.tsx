import { useState } from "react"

export default function Filters({ onChangeFilters }: any) {

    const ingredients: string[] = [
        "Galliano",
        "Ginger ale",
        "Ice",
        "Gin",
        "Grand Marnier",
        "Lemon Juice",
        "Grenadine",
        "Amaretto",
        "Baileys irish cream",
        "Cognac",
        "Creme de Cassis",
        "Champagne",
        "Kahlua",
        "Frangelico",
        "151 proof rum",
        "Wild Turkey",
        "Heavy cream",
        "Milk",
        "Egg White",
        "Dark rum",
        "Lemon juice",
        "Sambuca",
        "Absolut Vodka",
        "Tonic water",
        "Whisky",
        "Coffee",
        "Red wine",
        "Peach schnapps",
        "Pepsi Cola",
        "Orange juice",
        "Dry Vermouth",
        "Apricot brandy",
        "Powdered sugar",
        "Applejack",
        "Grapefruit juice",
        "gin",
        "Peach Bitters",
        "Mint",
        "Grain alcohol",
        "Espresso",
        "Honey",
        "Cocoa powder",
        "Vanilla vodka",
        "White Creme de Menthe",
        "Orange Bitters",
        "Green Chartreuse",
        "Sweet Vermouth",
        "Strawberry schnapps",
        "Cranberry juice",
        "Club soda",
        "Triple sec",
        "Egg white",
        "Creme de Cacao",
        "Vodka",
        "Light cream"
    ]

    const [ingredientValues, setIngredientValues] = useState<string[]>([])

    const [filters, setFilters] = useState<IFilter>({
        Shot: false,
        Cocktail: false,
        Analcolico: false,
        OrdinaryDrink: false,
        ingredients: []
    })

    function handleChange(e: any, key: FilterEnum) {
        filters[key] = e.target.checked
        setFilters(filters)

        onChangeFilters(filters)
    }

    function handleChangeIngredients(e: any, ingredient: string) {

        const checked = e.target.checked

        if (checked) {
            filters.ingredients.push(ingredient)
        }
        else {
            filters.ingredients = filters.ingredients.filter((ing: string) => ing != ingredient)
        }
        setFilters(filters)

        onChangeFilters(filters)
    }

    return (
        <div className="Filters">

            <div className="inputs">

                <div className="input-wrap">
                    <input type="checkbox" id="Shot" name="Shot" onChange={(e) => handleChange(e, FilterEnum.Shot)} />
                    <label htmlFor="Shot">Shot</label>
                </div>

                <div className="input-wrap">
                    <input type="checkbox" id="Cocktail" name="Cocktail" onChange={(e) => handleChange(e, FilterEnum.Cocktail)} />
                    <label htmlFor="Cocktail">Cocktail</label>
                </div>

                <div className="input-wrap">
                    <input type="checkbox" id="Analcolico" name="Analcolico" onChange={(e) => handleChange(e, FilterEnum.Analcolico)} />
                    <label htmlFor="Analcolico">Analcolico</label>
                </div>

                <div className="input-wrap">
                    <input type="checkbox" id="OrdinaryDrink" name="OrdinaryDrink" onChange={(e) => handleChange(e, FilterEnum.OrdinaryDrink)} />
                    <label htmlFor="OrdinaryDrink">Ordinary drink</label>
                </div>

                <div className="ingredient-input">
                    {
                        ingredients.map((ingredient: string) => {
                            return (
                                <div className="input-wrap">
                                    <input type="checkbox" id={ingredient} name={ingredient} onChange={(e) => handleChangeIngredients(e, ingredient)} />
                                    <label htmlFor={ingredient}>{ingredient}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export enum FilterEnum {
    Shot = "Shot",
    Cocktail = "Cocktail",
    Analcolico = "Analcolico",
    OrdinaryDrink = "OrdinaryDrink"
}

export interface IFilter {
    Shot: boolean,
    Cocktail: boolean,
    Analcolico: boolean,
    OrdinaryDrink: boolean

    ingredients: string[]

}