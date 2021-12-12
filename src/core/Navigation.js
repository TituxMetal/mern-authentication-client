import React from 'react'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

const Button = styled.button(({ $spaced }) => [
  tw`rounded-xl m-0 p-2 mx-2 font-bold no-underline transition width[max-content]`,
  tw`text-center text-indigo-200 border-2 border-indigo-200 bg-transparent hover:bg-indigo-600`,
  $spaced && tw`m-4`
])
const Nav = styled.nav(tw`flex flex-1 justify-end items-center`)
const NavItem = styled.span(tw`px-4 py-2 font-bold text-indigo-200`)

const Navigation = () => (
  <Nav>
    <NavItem as={Link} to='/'>
      Home
    </NavItem>
    <NavItem as={Link} to='/about'>
      About
    </NavItem>
    <NavItem as={Link} to='/auth'>
      Auth
    </NavItem>
    <NavItem as={Link} to='/dashboard'>
      Dashboard
    </NavItem>
    <Button>Logout</Button>
  </Nav>
)

export default Navigation
