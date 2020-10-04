import { Link, routes } from '@redwoodjs/router'

import Sponsors from 'src/components/Sponsors'

export const QUERY = gql`
  query SPONSORS {
    sponsors {
      id
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No sponsors yet. '}
      <Link
        to={routes.newSponsor()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ sponsors }) => {
  return <Sponsors sponsors={sponsors} />
}
