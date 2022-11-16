import { IDrink } from "../../interfaces/drink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo, faMartiniGlass, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

import './drink-card.scss';

interface Props {
    drink: IDrink
}

export default function DrinkCard({ drink }: Props) {

    const navigate = useNavigate();

    function toDrinkDetail() {
        navigate('/drink', { state: drink });
    }

    return (
        <>
            <div className="drink-card" onClick={() => toDrinkDetail()}>

                <div className="image-wrapper">
                    <img src={drink.thumb}></img>
                    <div className="icon-wrap">
                        <div>
                            {
                                drink.isAlcolic &&

                                <div className="font">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faMartiniGlass} />
                                    </div>
                                </div>

                            }
                        </div>
                    </div>
                </div>

                <div className="info-wrapper gradient">
                    <div className="labels">
                        <label className="name">{drink.drinkName}</label>
                        <label className="category">{drink.category}</label>
                    </div>

                </div>

            </div>
        </>
    )

}