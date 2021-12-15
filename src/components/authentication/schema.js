import * as yup from 'yup'

export const authFields = { email: '', password: '', username: '' }

export const authSchema = {
  email: yup.string().email().trim().required().label('Email'),
  password: yup.string().min(6).required().label('Password'),
  username: yup.string().min(4).required().label('Username')
}

export const getFields = action =>
  action ? { email: authFields.email, password: authFields.password } : { ...authFields }

export const getSchema = action =>
  yup
    .object()
    .shape(action ? { email: authSchema.email, password: authSchema.password } : { ...authSchema })
