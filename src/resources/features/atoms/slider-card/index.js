import React from 'react'
import { 
  Loader,
  LoaderOptions,
} from 'google-maps';
import { joinClasses } from '../../../assets/utils/helpers' 

export const TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  MAP: 'map'
};

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
};

SliderCardAtom.defaultProps = {
  visible: false,
  classes: '',
  type: TYPE.IMAGE,
  theme: THEME.DARK,
  config: {
    map: {
      center: {
        lat: -34.397,
        lng: 150.644
      },
    },
    image: {
      src: '',
      theme: THEME.LIGHT,
      // position: {
      //   top: ''
      // }
    },
    text: {
      content: '',
      backgroundImage: '',
      backgroundColor: '#fff',
    }
  }
};
function SliderCardAtom({visible, classes, type, config, theme}) {
  const mainClass = 'slider-card'
  const joinedClasses = joinClasses(mainClass, classes)
  
  function getSliderCard(type, config) {
    switch (type) {
      case TYPE.TEXT:
        return getText(config[type])
      case TYPE.IMAGE:
        return getImage(config[type])
      case TYPE.MAP:
        return getMap(config[type])
      default:
        throw Error('Unsuported slider card type')       
    }
  }

  function getMap(config) {
      //TODO: too much work for pair programming
      return (
        <>
          Map - wip
        </>
      )
  
  }

  function getImage(config) {
    return (
      <div className={`${mainClass}__container ${mainClass}__container--theme-${theme}`}>
        <img className={`${mainClass}__image`} src={config.src} />
      </div>
    )
  }

  function getText(config) {
    return (
      <div className={`${mainClass}__container ${mainClass}__container--theme-${theme}`}>
        <p className={`${mainClass}__text`}>
            {config.content}
        </p>
      </div>
    )
  }

  return ( 
    <div className={joinedClasses}>
       {getSliderCard(type, config)}
    </div>
  );
};

export default SliderCardAtom;