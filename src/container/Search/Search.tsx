import React, { Fragment, useState, useEffect, useCallback } from 'react'
import Heading from '../../components/Heading/Heading'
import SearchForm from './SearchForm/SearchForm';
import MenuList from '../../components/UI/MenuLilst/MenuList';
import SearchResult from './SearchResult/SearchResult';
import Modal from '../../components/UI/Modal/Modal';
import ResultView from './ResultView/ResultView';

const TITLE = "Tradeshift Global Search";
const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const Search = () => {
    const [searchState, setSearchState] = useState({
        search: '',
        country: ''
    });
    const [selectedUser, setSelectedUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const handleSearchState = useCallback((data) => {
        setSearchState(data);
    }, [searchState])
    return (
        <Fragment>
            <Heading title={TITLE} description={DESCRIPTION} />
            <SearchForm setSearchState={handleSearchState} />
            {
                (!!searchState.search || !!searchState.country) &&
                < SearchResult
                    {...searchState}
                    getSearchResult={(data: any) => {
                        setSelectedUser(data);
                        setOpenModal(true);
                    }}
                />
            }
            <Modal open={openModal} onCloseClicked={setOpenModal}>
                {
                    !!selectedUser &&
                    <ResultView user={selectedUser} />
                }
            </Modal>
        </Fragment >
    )
}

export default Search
