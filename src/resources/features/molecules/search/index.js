import React, { useState } from 'react';

import { iconsModules, icon } from '../../atoms/icon/iconsConfig';
import Icon from '../../atoms/icon';
import AutocompletionAtom from '../../atoms/autocompletion';
import SearchResultsAtom from '../../atoms/search-results';

function SearchMolecule() {
  const [searchText, setSearchText] = useState('');
  const [searchResultsVisibility, setSearchResultsVisibility] = useState(false);

  function onSearchTextChange(event) {
    const value = event.currentTarget.value;
    setSearchText(value);
  }

  function isAutocompletionVisible(searchText) {
    return searchText.length > 1;
  }

  return (
    <div className="search">
      <div className="search__bar">
        <input type="text" value={searchText} onChange={onSearchTextChange} placeholder="Search..."/>
        <Icon iconName={ icon.SEARCH } clickAction={(state) => setSearchResultsVisibility(state)}/>
      </div>
      <AutocompletionAtom
        visible={isAutocompletionVisible(searchText)}
        searchValue={searchText}
        clickCompetionAction={(value) => setSearchText(value)}/>
      <SearchResultsAtom
        visible={searchResultsVisibility}
        clickResultAction={(state) => setSearchResultsVisibility(state)}
        searchValue={searchText}/>
    </div>
  );
}

export default SearchMolecule;
