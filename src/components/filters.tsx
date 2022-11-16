import { useState } from "react"

export default function Filters({ onChangeFilters }: any) {

    const [filters, setFilters] = useState({
        Shot: false,
        Cocktail: false,
        Analcolico: false,
    })

    function handleChange(e: any, key: 'Shot' | "Cocktail" | 'Analcolico') {
        filters[key] = e.target.checked
        setFilters(filters)
        
        onChangeFilters(filters)
    }

    return (
        <div className="Filters">

            <div className="inputs">

                <div className="input-wrap">
                    <input type="checkbox" id="Shot" name="Shot" onChange={(e) => handleChange(e, "Shot")} />
                    <label htmlFor="Shot">Shot</label>
                </div>

                <div className="input-wrap">
                    <input type="checkbox" id="Cocktail" name="Cocktail" onChange={(e) => handleChange(e, "Cocktail")} />
                    <label htmlFor="Cocktail">Cocktail</label>
                </div>

                <div className="input-wrap">
                    <input type="checkbox" id="Analcolico" name="Analcolico" onChange={(e) => handleChange(e, "Analcolico")} />
                    <label htmlFor="Analcolico">Analcolico</label>
                </div>

            </div>
        </div>
    )

}

export enum FilterEnum {
    Shot = "Shot",
    Cocktail = "Cocktail",
    Analcolico = "Analcolico",
}

export interface IFilter {
    Shot: boolean,
    Cocktail: boolean,
    Analcolico: boolean,

}