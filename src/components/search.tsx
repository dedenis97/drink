import { faMartiniGlass, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Search({ onSearch }: any) {

    const [value, setValue] = useState('')

    function handleChange(e: any) {
        setValue(e.target.value)
    }

    function handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            onSearch(value)
        }
    }

    return (
        <div className="search">
            <input className="search-text" type="text" onChange={handleChange} onKeyPress={handleKeyPress}></input>
            <button onClick={() => { onSearch(value) }}>
            <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )

}