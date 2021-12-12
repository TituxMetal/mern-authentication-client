import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { Ui } from './common'
import Navigation from './Navigation'

const Footer = ({ text }) => (
  <Ui.Bar as='footer'>
    <Ui.Wrapper $centered>
      <Ui.Text>{text}</Ui.Text>
    </Ui.Wrapper>
  </Ui.Bar>
)

const Header = ({ children, siteTitle }) => (
  <Ui.Bar as='header'>
    <Ui.Wrapper>
      <Ui.Text as={Link} to='/' $brand>
        {siteTitle}
      </Ui.Text>
      {children}
    </Ui.Wrapper>
  </Ui.Bar>
)

const Layout = () => (
  <Ui>
    <Header siteTitle='Mern Auth'>
      <Navigation />
    </Header>
    <Ui.Main>
      <Outlet />
    </Ui.Main>
    <Footer text='Created with love and lots of coffee by Titux Metal' />
  </Ui>
)

export default Layout
