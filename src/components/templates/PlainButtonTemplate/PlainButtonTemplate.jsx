import React from 'react'
import PropTypes from 'prop-types'

import FrontPage from './FrontPage'
import BackPage from './BackPage'

export function PlainButtonTemplate({ editable }) {
  return (
    <div className='flex flex-col gap-[20px] bg-[rgba(253,228,211,0.5)] py-[50px]'>
      <FrontPage editable={editable}/>
      <BackPage editable={editable}/>
    </div>
  )
}

 
PlainButtonTemplate.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}