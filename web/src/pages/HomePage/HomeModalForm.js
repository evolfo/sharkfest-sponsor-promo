import { Form as RedwoodForm, Label, TextField, Submit } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const HomeModalForm = (props) => {
  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (done) => {
      document.querySelector('.modals').className =
        'ui page modals dimmer transition'
    },
  })

  const onSubmit = (input) => {
    createUser({ variables: { input } })
  }

  return (
    <RedwoodForm onSubmit={onSubmit}>
      <Label>Full Name</Label>
      <TextField
        name="name"
        value={props.name}
        onChange={props.handleTextInput}
        placeholder="Full Name"
        validation={{ required: true }}
      />
      <Label>Email</Label>
      <TextField
        name="email"
        value={props.email}
        onChange={props.handleTextInput}
        placeholder="Email"
        validation={{ required: true, pattern: { value: /[^@]+@[^.]+\..+/ } }}
      />
      <Submit>Submit</Submit>
    </RedwoodForm>
  )
}

export default HomeModalForm
