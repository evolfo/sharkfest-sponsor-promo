import {
  Form,
  Label,
  TextField,
  Submit,
  FieldError,
  FormError,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const HomeModalForm = (props) => {
  const formMethods = useForm()

  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (data) => {
      if (!error) {
        formMethods.reset()
        props.handleModalClose()
      }
    },
  })

  const onSubmit = (input) => {
    createUser({ variables: { input } })
    console.log(input)
  }

  return (
    <Form
      onSubmit={onSubmit}
      validation={{ mode: 'onBlur' }}
      error={error}
      formMethods={formMethods}
    >
      <FormError
        error={error}
        wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
      />
      <Label errorClassName="error" name="name">
        Full Name
      </Label>
      <TextField
        name="name"
        value={props.name}
        onChange={props.handleTextInput}
        placeholder="Full Name"
        errorClassName="error"
        validation={{ required: true }}
      />
      <FieldError name="name" className="error" />
      <Label errorClassName="error" name="email">
        Email
      </Label>
      <TextField
        name="email"
        value={props.email}
        onChange={props.handleTextInput}
        placeholder="Email"
        errorClassName="error"
        validation={{
          required: true,
        }}
      />
      <FieldError name="email" className="error" />
      <Submit disabled={loading}>Submit</Submit>
    </Form>
  )
}

export default HomeModalForm
