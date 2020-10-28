import React from 'react';

EditableText.defaultProps = {
  placeholderText: 'PLACEHOLDER_TEXT',
  text: '',
  onChange: noop,
};


function EditableText({onChange, text, placeholderText}) {
  return (<input className="atom atom__editable-text" onChange={(value) => 'aaa'} value={text} placeholder={placeholderText} />);
}

function noop() {}

export default EditableText;

