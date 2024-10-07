import { MagnifyingGlass } from "phosphor-react";
import { SearchFormCointainer } from "./styles";

export function SearchForm(){
    return (
        <SearchFormCointainer>
            <input type="text" placeholder="Busque por transações"/>
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormCointainer>
    )
}