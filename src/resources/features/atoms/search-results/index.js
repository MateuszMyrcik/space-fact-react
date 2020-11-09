import React from 'react'

import { noop } from '../../../assets/utils/helpers';

SearchResultsAtom.defaultProps = {
  visible: false,
  searchValue: '',
  results: [
    {
      title: 'title',
      desc: 'desc',
    },
    {
      title: 'title',
      desc: 'desc',
    },
    {
      title: 'title',
      desc: 'desc',
    },
    {
      title: 'title',
      desc: 'desc',
    },
  ],
  clickResultAction: noop,
};
function SearchResultsAtom({
  visible,
  searchValue,
  results,
  clickResultAction,
}) {
  const renderedResults = visible
    ? (results || []).map(({ title, desc }, index) => (
      <li key={index}>
        <h3 onClick={() => clickResultAction()}>
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </li>
    ))
    : [];

  return (<div className="search-results">{searchValue ? 'RESULTS FOR: ' + searchValue : ''}<br />{renderedResults}</div>);
}

export default SearchResultsAtom;
