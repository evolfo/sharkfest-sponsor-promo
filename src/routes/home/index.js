import { h } from 'preact';

import { Grid, Image, Container, Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

import SponsorModal from '../../components/sponsorModal'

const Home = () => {
  const [firstTimeClickingOnSponsor, setFirstTimeClickingOnSponsor] = useState(true)
  const [sponsorData, setSponsorData] = useState([])
  const [selectedSponsorData, setSelectedSponsorData] = useState([])
  const [sponsorModalIsOpen, setSponsorModalIsOpen] = useState(false)

  useEffect(() => {
    fetch('/assets/sponsor-data.json')
      .then((resp) => resp.json())
      .then((sponsorData) => {
        setSponsorData(sponsorData)
      })
  }, [])

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
    }
  }

  const handleSponsorModalClose = () => {
    setSponsorModalIsOpen(false)
  }

  const renderTitleDescription = (title_description) => {
    console.log(title_description)
    return title_description.map((sentence, idx) => (
      <p key={idx}>{sentence}</p>
    ))
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
              <Card.Header>{sponsor.id !== 3 && sponsor.id !== 4 && sponsor.title}</Card.Header>
              <Card.Meta>
                <span className="date">{sponsor.subtitle}</span>
              </Card.Meta>
              <Card.Description>{!!sponsor.title_description && renderTitleDescription(sponsor.title_description)}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    }
  })

  return (
    <>
      <SponsorModal
        sponsorModalIsOpen={sponsorModalIsOpen}
        selectedSponsorData={selectedSponsorData}
        handleSponsorModalClose={handleSponsorModalClose}
      />
      <div>
        <Container className="grid-container">
          <Grid stackable>
            <Grid.Row columns={2}>{renderSponsorDataBig}</Grid.Row>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Home
