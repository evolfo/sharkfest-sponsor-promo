import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import Users from 'src/components/Users'

export const QUERY = gql`
  query USERS {
    users {
      id
      email
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
      {'No users yet. '}
      <Link
        to={routes.newUser()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ users }) => {
  const [userList, setUserList] = useState(users)
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])

  const sortByName = () => {
    setUserList(userList.sort((a, b) => a.name.localeCompare(b.name)))
    forceUpdate()
  }

  const sortByEmail = () => {
    setUserList(userList.sort((a, b) => a.email.localeCompare(b.email)))
    forceUpdate()
  }

  const sortById = () => {
    console.timeLog(userList)
    setUserList(userList.sort((a, b) => a.id > b.id))
    forceUpdate()
  }

  return (
    <Users
      users={userList}
      sortByEmail={sortByEmail}
      sortByName={sortByName}
      sortById={sortById}
    />
  )
}
