import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/info" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/preise" className="navigation-links1-navlink1">
        {props.text1}
      </Link>
      <Link to="/team" className="navigation-links1-navlink2">
        {props.text2}
      </Link>
      <Link to="/kontakt" className="navigation-links1-navlink3">
        {props.text3}
      </Link>
      <Link to="/impressum" className="navigation-links1-navlink4">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text3: 'Kontakt',
  text4: 'Impressum',
  rootClassName: '',
  text: 'Info',
  text2: 'Team',
  text1: 'Preise',
}

NavigationLinks1.propTypes = {
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks1
