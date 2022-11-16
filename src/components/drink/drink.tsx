import { useLocation } from 'react-router-dom';
import { IDrink } from '../../interfaces/drink';

import './drink.scss';

export default function Drink() {

    const { state } = useLocation();

    const drink: IDrink = state

    const measures = drink.measures.map(
        (mea, index) => {
            return (
                <>
                    <span className="chip">
                        <label>{drink.ingredients[index]}</label> - {mea}</span>
                </>
            )
        }
    )

    return (
        <div className='drink'>

            <div className="info">

                <div className='name'>{drink.drinkName}</div>
                <div className='category'>Category <span>{drink.category}</span></div>

                <div className="separator"></div>

                {
                    drink.urlVideo != null &&
                    <iframe width="420" height="315"
                        src={drink.urlVideo}>
                    </iframe>
                }

                <div className='ingredients'>

                    <label>Ingredients</label>
                    <div className='chip-wrapper'>
                        {measures}
                    </div>
                </div>

                <div className='instruction'>
                    {drink.instructions}
                </div>

            </div>

            <div className="photo-wrap">
                <img src={drink.thumb}></img>
            </div>
        </div>

    )
}