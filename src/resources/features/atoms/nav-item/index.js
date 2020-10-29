import React, { useState } from 'react'
import { joinClasses } from '../../../assets/utils/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { icon } from '../../atoms/icon/iconsConfig'
import Icon from '../../atoms/icon/index'
import './style.scss'


function NavItem(props) {
  console.log(icon)
  const mainClass = 'nav-item'
  const classes = joinClasses('nav-item', props.classes)
  const [isDropdownShown, setDropdown] = useState(false)

  function getAnchor() {
    return (
      <a href={props.url || ''}>
        <span className={`${mainClass}__label`}>{props.label}</span>
      </a>
    )
  }

  function getDropdownTemplate() {
    const additionalIemsObjects = props.dropdownOptions;
    if (additionalIemsObjects) {
      return (
        <>
          <span className={`${mainClass}__icon`} onClick={() => setDropdown(!isDropdownShown)}>
            { getDropDownIcon(isDropdownShown) }
          </span>
          { isDropdownShown ?
            <ul className={`${mainClass}__list`}>
              {getDropdownItems(additionalIemsObjects)}
            </ul> :
            ''
            }
        </>
      )
    }

    return ''
  };

  function getDropdownItems(itemsObject) {
    return itemsObject.map((item) => {
      return <li className={`${mainClass}__item`} key={item.url}><a href={item.url}>{item.itemName}</a></li>
    })
  };

  function getDropDownIcon(isDropdownShown) {
    return  isDropdownShown ? <Icon iconName={ icon.FA_ANGLE_UP }/> : <Icon  iconName={ icon.FA_ANGLE_DOWN } />
  }

  return (
    <div className={classes}>
      { getAnchor() }
      { getDropdownTemplate() }
    </div>
  )
}

export default NavItem;