import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SponsorForm from 'src/components/SponsorForm'

const CREATE_SPONSOR_MUTATION = gql`
  mutation CreateSponsorMutation($input: CreateSponsorInput!) {
    createSponsor(input: $input) {
      id
    }
  }
`

const NewSponsor = () => {
  const [createSponsor, { loading, error }] = useMutation(CREATE_SPONSOR_MUTATION, {
    onCompleted: () => {
      navigate(routes.sponsors())
    },
  })

  const onSave = (input) => {
    createSponsor({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Sponsor</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SponsorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSponsor
