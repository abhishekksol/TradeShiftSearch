import React, { useEffect, useState } from 'react';
import { api_constant } from '../../../constants/Api';
declare const ts: any;

const SearchForm = (props) => {
    const {
        setSearchState
    } = props;
    const [options, setOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchCompany, setSearchCompany] = useState('');
    useEffect(() => {
        fetch(api_constant.country)
            .then((response: any) => response.json())
            .then((data: any) => setOptions(data));
    }, [])
    useEffect(() => {
        setSearchState({
            country: selectedCountry, 
            search: searchCompany
        })
    }, [selectedCountry, searchCompany])

    return (
        <div>
            <form className="form-container" data-ts="Form">
                <fieldset className="form-input-box">
                    <label className="form-input-select">
                        <select
                            value={selectedCountry}
                            placeholder="Select Country" 
                            onChange={(event: any) => setSelectedCountry(event.target.value)}
                        >
                            <option value=""></option>
                            {
                                options.map((option: any, index: number) => (
                                    <option key={"COUNTRY_OPTION_" + index} value={option.code}>{option.name}</option>
                                ))
                            }
                        </select>
                    </label>

                    <label className="form-input-search">
                        <input
                            onChange={(event: any) => setSearchCompany(event.target.value)}
                            type="text"
                            {...{ 
                                "data-ts.icon": "ts-icon-search",
                            }}
                            placeholder="Enter company name" 
                            required
                        />
                    </label>
                </fieldset>
            </form>
        </div>
    )
}
export default SearchForm
