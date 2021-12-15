import tw, { styled } from 'twin.macro'

export const Button = styled.button(({ $spaced }) => [
  tw`rounded-md m-0 px-8 py-4 font-bold no-underline transition width[max-content]`,
  tw`text-center text-indigo-200 bg-indigo-700 hocus:bg-indigo-600`,
  $spaced && tw`m-4`
])

export const Container = styled.section(
  tw`my-4 mx-auto p-8 rounded-xl w-10/12 bg-gray-700 max-w-screen-lg`
)

export const Text = styled.p(({ $error, $info, $spaced, $success, $title }) => [
  tw`my-2 text-gray-100`,
  $error && tw`text-red-300`,
  $info && tw`text-blue-300`,
  $spaced && tw`p-4`,
  $success && tw`text-green-300`,
  $title && tw`text-center text-4xl font-bold`
])
