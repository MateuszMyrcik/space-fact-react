import React from 'react'

import { noop } from '../../../assets/utils/helpers';

Autocompletion.defaultProps = {
  visible: false,
  searchValue: '',
  completions: [
    'Ada',
    'Adamina',
    'Adela',
    'Adelajda',
    'Adria',
    'Adriana',
    'Adrianna',
    'Agata',
    'Agnieszka',
    'Aida',
    'Alana',
    'Alberta',
    'Albertyna',
    'Albina',
    'Aldona',
    'Aleksa',
    'Aleksandra',
    'Aleksja',
    'Alesja',
    'Alfreda',
    'Alia',
    'Alicja',
    'Alina',
    'Alisa',
    'Alojza',
    'Amalia',
  ],
  clickCompetionAction: noop,
};
function Autocompletion({
  visible,
  searchValue,
  completions,
  clickCompetionAction,
}) {
  const matches = visible
    ? completions
    .filter((completion) =>  completion.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
    .map((match, index) => (
      <li key={index} onClick={() => clickCompetionAction(match)}>
        {match}
      </li>
    ))
    : [];

  return (<ul className="autocompletion">{matches}</ul>)
}

export default Autocompletion

