import React, { useState } from 'react';

import SearchTextComponent from '../../components/search-text/index'
import DoSearchComponent from '../../components/do-search'
import AutocompletionComponent from '../../components/autocompletion'
import EditableText from '../../atoms/editable-text'

function SearchWidget() {
  //const [searchText, setSearchText] = useState('');

  return (<div className="widget widget__search">
    <SearchTextComponent />
    <AutocompletionComponent />
    <DoSearchComponent />
  </div>);
}

export default SearchWidget;
