import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SponsorForm from 'src/components/SponsorForm'

export const QUERY = gql`
  query FIND_SPONSOR_BY_ID($id: Int!) {
    sponsor: sponsor(id: $id) {
      id
      name
    }
  }
`
const UPDATE_SPONSOR_MUTATION = gql`
  mutation UpdateSponsorMutation($id: Int!, $input: UpdateSponsorInput!) {
    updateSponsor(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ sponsor }) => {
  const [updateSponsor, { loading, error }] = useMutation(UPDATE_SPONSOR_MUTATION, {
    onCompleted: () => {
      navigate(routes.sponsors())
    },
  })

  const onSave = (input, id) => {
    updateSponsor({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Sponsor {sponsor.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SponsorForm sponsor={sponsor} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
