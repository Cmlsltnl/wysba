import React from 'react'
import PropTypes from 'prop-types'

import './SectionTitle.css'

const SectionTitle = ({ children }) => (
  <h3 className="section-title handwritten">
    <div>{children}</div>
  </h3>
)
SectionTitle.propTypes = {
  children: PropTypes.node,
}

export default SectionTitle
