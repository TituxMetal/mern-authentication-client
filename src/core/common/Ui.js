import React from 'react'
import tw, { styled } from 'twin.macro'

const Bar = styled.section(tw`flex p-2 bg-indigo-700`)
const Container = styled.main(tw`flex flex-col h-screen`)
const Main = styled.div(tw`flex flex-col w-full max-w-screen-lg mx-auto py-4 flex-auto`)
const Text = styled.p(({ $brand, $centered }) => [
  tw`text-indigo-200`,
  $brand && tw`font-bold text-2xl m-0 no-underline flex-auto`,
  $centered && tw`text-center`
])
const Wrapper = styled.div(({ $centered }) => [
  tw`flex flex-row justify-between items-center w-full max-w-screen-lg mx-auto py-4`,
  $centered && tw`justify-center`
])

const Ui = ({ children, ...rest }) => <Container {...rest}>{children}</Container>

Ui.Bar = ({ children, ...rest }) => {
  Ui.Bar.displayName = 'UiBar'

  return <Bar {...rest}>{children}</Bar>
}

Ui.Main = ({ children, ...rest }) => {
  Ui.Main.displayName = 'UiMain'

  return <Main {...rest}>{children}</Main>
}

Ui.Text = ({ children, ...rest }) => {
  Ui.Text.displayName = 'UiText'

  return <Text {...rest}>{children}</Text>
}

Ui.Wrapper = ({ children, ...rest }) => {
  Ui.Wrapper.displayName = 'UiWrapper'

  return <Wrapper {...rest}>{children}</Wrapper>
}

export default Ui
