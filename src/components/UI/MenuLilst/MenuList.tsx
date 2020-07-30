import React from 'react'

const MenuList = (props: any) => {
    const { results, getSearchResult } = props;
    return (
        <menu data-ts="Menu" className="ts-user-menu">
            {
                Array.isArray(results) && results.length > 0 ? (
                    results.map((data: any, index: number) => (
                        <li key={"LIST_RESULT_KEY_" + index + "_" + data.id}>
                            <a data-user={data.name} onClick={() => getSearchResult(data)} >
                                <span>{data.name}</span>
                                <sub>{data.address}</sub>
                            </a>
                        </li>
                    ))
                ) : "No results found"
            }

        </menu>
    )
}

export default MenuList
