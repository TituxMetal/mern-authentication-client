import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from '~/core'

const element = document.getElementById('root')

render(
  <GlobalStyle>
    <h1>Mern Authentication Client</h1>
  </GlobalStyle>,
  element
)
