import React, { useState, useEffect } from 'react'
import MenuList from '../../../components/UI/MenuLilst/MenuList'
import Board from '../../../components/UI/Board/Board'
import { api_constant } from '../../../constants/Api';

const SearchResult = (props: any) => {
    const { search, country, getSearchResult } = props;
    const [results, setresults] = useState([]);

    const filterData = (values:Array<any>) => {
        console.log(values);
        setresults(values.filter((value: any) => {
            const companyname = value.name.toLowerCase();
            // FILTER LOGIC ACCORDING TO COUNTRIES
            if(companyname.includes(search.toLowerCase())) {
                return true;
            }
            return false;
        }))
    }

    useEffect(() => {
        fetch(api_constant.results)
        .then((response: any) => response.json())
        .then((data: any) => filterData(data));
    }, [search, country])

    return (
        <div className="searchresult-container">
            <div className="searchresult-wrapper">
                <Board>
                    <strong>
                        Search Result for "{search}"...
                    </strong>
                </Board>
                <Board>
                    <MenuList getSearchResult={getSearchResult} results={results} />
                </Board>
            </div>
        </div >
    )
}

export default SearchResult
