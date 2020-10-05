/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Image, Container, Card } from 'semantic-ui-react'
import { useMutation, useQuery } from '@redwoodjs/web'
import { useState, useEffect } from 'react'

import HomeModal from './HomeModal'
import SponsorModal from './SponsorModal'

// had to do this here because couldn't figure out how to do the equivalent
// of .then in graphql
let sponsorsClickedOn

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      sponsor
    }
  }
`

const GET_USERS_QUERY = gql`
  query users {
    users {
      id
      sponsor
    }
  }
`

const HomePage = () => {
  const [firstTimeClickingOnSponsor, setFirstTimeClickingOnSponsor] = useState(true)
  const [sponsorData, setSponsorData] = useState([])
  const [selectedSponsorData, setSelectedSponsorData] = useState([])
  const [sponsorModalIsOpen, setSponsorModalIsOpen] = useState(false)
  const [user, setUser] = useState({})

  // This is getting the user ID so we know which one to update.
  // Could probably do this better by just storing the ID once the user logs in somewhere
  const {
    data: data,
    error: getUsersError,
    loading: getUsersLoading,
  } = useQuery(GET_USERS_QUERY, {
    onCompleted: () => {
      if (!error) {
        // Getting the newest user
        setUser(data.users[data.users.length - 1])
      }
    },
  })

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: (data) => {
      if (!error) {
        console.log(data)
      }
    },
  })

  // use effect runs when the page is loaded, similar to
  // componentDidMount
  useEffect(() => {
    fetch('/sponsor-data.json')
      .then((resp) => resp.json())
      .then((sponsorData) => {
        setSponsorData(sponsorData)
      })
  }, [])

  // this is opening the correct sponsor
  // and updating the user to include
  // the sponsor that they clicked on
  const handleSponsorModalClick = (e) => {
    let correctElement = e.target

    while (!correctElement.id) {
      correctElement = correctElement.parentNode
    }

    const selectedSponsor = sponsorData.find((sponsor) => {
      return sponsor.id === parseInt(correctElement.id)
    })

    setSponsorModalIsOpen(true)
    setSelectedSponsorData(selectedSponsor)

    if (firstTimeClickingOnSponsor) {
      setFirstTimeClickingOnSponsor(false)
      sponsorsClickedOn = selectedSponsor.title

      updateUser({
        variables: {
          // not sure why I have to add 1 here,  I think I'm getting
          // all the users before the new user is registered
          id: user.id + 1,
          input: {
            sponsor: selectedSponsor.title,
          },
        },
      })
    } else {
      sponsorsClickedOn = sponsorsClickedOn + ", " + selectedSponsor.title

      updateUser({
        variables: {
          id: user.id + 1,
          input: {
            sponsor: sponsorsClickedOn,
          },
        },
      })
    }
  }

  const handleSponsorModalClose = () => {
    setSponsorModalIsOpen(false)
  }

  const renderSponsorDataBig = sponsorData.map((sponsor) => {
    if (sponsor.big_card) {
      return (
        <Grid.Column
          id={sponsor.id}
          key={sponsor.id}
          className="same-height-column"
          onClick={handleSponsorModalClick}
        >
          <Card>
            <Image
              alt="sponsor-banner"
              src={sponsor.img_url}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{sponsor.title}</Card.Header>
              <Card.Meta>
                <span className="date">{sponsor.subtitle}</span>
              </Card.Meta>
              <Card.Description>{sponsor.title_description}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    }
  })

  const renderSponsorDataSmall = sponsorData.map((sponsor) => {
    if (!sponsor.big_card) {
      return (
        <Grid.Column
          id={sponsor.id}
          key={sponsor.id}
          className="same-height-column"
          onClick={handleSponsorModalClick}
        >
          <Card>
            <Image
              alt="sponsor-banner"
              src={sponsor.img_url}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{sponsor.title}</Card.Header>
              <Card.Meta>
                <span className="date">{sponsor.subtitle}</span>
              </Card.Meta>
              <Card.Description>{sponsor.title_description}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    }
  })

  return (
    <>
      <HomeModal />
      <SponsorModal
        sponsorModalIsOpen={sponsorModalIsOpen}
        selectedSponsorData={selectedSponsorData}
        handleSponsorModalClose={handleSponsorModalClose}
      />
      <div
        sx={{
          fontWeight: 'bold',
          pb: '5rem',
        }}
      >
        <Container className="grid-container">
          <Grid stackable>
            <Grid.Row columns={2}>{renderSponsorDataBig}</Grid.Row>
            <Grid.Row columns={3}>{renderSponsorDataSmall}</Grid.Row>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default HomePage
