import React, { useState } from 'react';

import EditableText from '../../atoms/editable-text'

function SearchTextComponent(props) {
  return (<EditableText placeholderText="Search..." text={props.text} />);
}

export default SearchTextComponent;

