import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { iconsModules, icon } from './iconsConfig'
import { noop } from '../../../assets/utils/helpers';

Icon.defaultProps = {
  iconName: icon.DEFAULT,
  clickAction: noop,
};
function Icon({ iconName, clickAction }) {
  return (<FontAwesomeIcon icon={ iconsModules[iconName] } onClick={() => clickAction(true)} />)
}

export default Icon
