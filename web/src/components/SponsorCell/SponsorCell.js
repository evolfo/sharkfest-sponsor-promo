import Sponsor from 'src/components/Sponsor'

export const QUERY = gql`
  query FIND_SPONSOR_BY_ID($id: Int!) {
    sponsor: sponsor(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Sponsor not found</div>

export const Success = ({ sponsor }) => {
  return <Sponsor sponsor={sponsor} />
}
