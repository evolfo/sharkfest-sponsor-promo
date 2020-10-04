import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SPONSOR_MUTATION = gql`
  mutation DeleteSponsorMutation($id: Int!) {
    deleteSponsor(id: $id) {
      id
    }
  }
`

const Sponsor = ({ sponsor }) => {
  const [deleteSponsor] = useMutation(DELETE_SPONSOR_MUTATION, {
    onCompleted: () => {
      navigate(routes.sponsors())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sponsor ' + id + '?')) {
      deleteSponsor({ variables: { id } })
    }
  }

  return (
    <>
      <div className="bg-white border rounded-lg overflow-hidden">
        <header className="bg-gray-300 text-gray-700 py-3 px-4">
          <h2 className="text-sm font-semibold">Sponsor {sponsor.id} Detail</h2>
        </header>
        <table className="w-full text-sm">
          <tbody>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">id</td>
              <td className="p-3">{sponsor.id}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">name</td>
              <td className="p-3">{sponsor.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="my-4 mx-2 text-center">
        <ul>
          <li className="inline-block ml-2">
            <Link
              to={routes.editSponsor({ id: sponsor.id })}
              className="text-xs bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Edit
            </Link>
          </li>
          <li className="inline-block ml-2">
            <a
              href="#"
              className="text-xs bg-red-600 text-white hover:bg-red-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
              onClick={() => onDeleteClick(sponsor.id)}
            >
              Delete
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sponsor
