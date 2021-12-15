import React, { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const Button = styled.button(() => [
  tw`py-1 px-4 mt-2 font-bold rounded-lg`,
  tw`bg-indigo-700 text-indigo-200 border-indigo-200 border-2`,
  tw`hover:bg-indigo-600 disabled:(bg-transparent text-gray-500 border-gray-500 cursor-not-allowed)`
])
const Container = styled.form(tw`max-w-screen-md my-4 mx-auto`)
const Control = styled.div(({ $error }) => [tw`mb-4`, $error && tw`text-red-300`])
const Input = styled.input(({ $error }) => [
  tw`p-2 my-2 w-full rounded-md border-2 border-indigo-200 bg-transparent`,
  tw`placeholder:text-indigo-100`,
  $error && tw`border-red-300 text-red-300 font-bold`
])
const Label = styled.label(({ $error }) => [
  tw`text-indigo-100 mr-4 font-bold`,
  $error && tw`text-red-300`
])
const Message = styled.p(({ $action, $error, $info, $success }) => [
  tw`py-1 font-bold`,
  $action && tw`cursor-pointer text-center`,
  $error && tw`text-red-300`,
  $info && tw`text-blue-300`,
  $success && tw`text-green-300`
])
const Title = styled(Message)([tw`text-3xl text-center`])

const Form = forwardRef(({ children, ...rest }, ref) => {
  Form.displayName = 'Form'

  return (
    <Container {...rest} ref={ref}>
      {children}
    </Container>
  )
})

Form.ActionMessage = ({ children, ...rest }) => {
  Form.ActionMessage.displayName = 'FormActionMessage'

  return (
    <Message $action {...rest}>
      {children}
    </Message>
  )
}

Form.Button = forwardRef(({ children, ...rest }, ref) => {
  Form.Button.displayName = 'FormButton'

  return (
    <Button {...rest} ref={ref}>
      {children}
    </Button>
  )
})

Form.Control = forwardRef(({ children, ...rest }, ref) => {
  Form.Control.displayName = 'FormControl'

  return (
    <Control {...rest} ref={ref}>
      {children}
    </Control>
  )
})

Form.Input = forwardRef(({ name, type, ...rest }, ref) => {
  Form.Input.displayName = 'FormInput'

  return <Input {...rest} id={name} name={name} type={type} ref={ref} />
})

Form.Label = ({ children, name, ...rest }) => {
  Form.Label.displayName = 'FormLabel'

  return (
    <Label htlmFor={name} {...rest}>
      {children}
    </Label>
  )
}

Form.Message = ({ children, ...rest }) => {
  Form.Message.displayName = 'FormMessage'

  return <Message {...rest}>{children}</Message>
}

Form.Title = ({ children, ...rest }) => {
  Form.Title.displayName = 'FormTitle'

  return <Title {...rest}>{children}</Title>
}

export default Form
