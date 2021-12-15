import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Field, Form } from '~/components'

import { getFields, getSchema } from './schema'

const LoginRegisterForm = () => {
  const [isLoginAction, toggleLoginAction] = useState(false)
  const fields = getFields(isLoginAction)
  const schema = getSchema(isLoginAction)
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema)
  })

  useEffect(() => reset(fields), [isLoginAction])

  const onHandleSubmit = async data => setTimeout(console.log('data', data), 500)

  return (
    <Form onSubmit={handleSubmit(onHandleSubmit)}>
      <Form.Title>{isLoginAction ? 'Login to your account' : 'Register an account'}</Form.Title>
      {!isLoginAction && <Field control={control} label='Username' name='username' type='text' />}
      <Field control={control} label='Email' name='email' type='email' />
      <Field control={control} label='Password' name='password' type='password' />
      <Form.Button type='submit' disabled={!isValid}>
        {isLoginAction ? 'Login' : 'Register'}
      </Form.Button>
      <Form.ActionMessage $info>
        {isLoginAction && <Link to='forgot'>Have forgot your password?</Link>}
      </Form.ActionMessage>
      <Form.ActionMessage onClick={() => toggleLoginAction(!isLoginAction)} $info>
        {isLoginAction ? 'Create a new account' : 'Login with existing account'}
      </Form.ActionMessage>
    </Form>
  )
}

export default LoginRegisterForm
