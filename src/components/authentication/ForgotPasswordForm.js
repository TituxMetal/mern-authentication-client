import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Field, Form } from '~/components'

import { authSchema } from './schema'

const ForgotPasswordForm = () => {
  const schema = { email: authSchema.email }
  const {
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(yup.object().shape(schema))
  })

  const onHandleSubmit = handleSubmit(async data => setTimeout(console.log('data', data), 500))

  return (
    <Form onSubmit={handleSubmit(onHandleSubmit)}>
      <Form.Title>You have forgot your password?</Form.Title>
      <Field control={control} label='Email' name='email' type='email' />
      <Form.Button type='submit' disabled={!isValid}>
        Submit
      </Form.Button>
    </Form>
  )
}

export default ForgotPasswordForm
