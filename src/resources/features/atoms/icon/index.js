import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconsModules } from './iconsConfig'

function Icon(props) {
    return (
        <FontAwesomeIcon  icon={ iconsModules[props.iconName] } /> 
    )
}
export default Icon