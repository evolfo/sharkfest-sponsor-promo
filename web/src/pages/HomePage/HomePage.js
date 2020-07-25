/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Image, Container, Card } from 'semantic-ui-react'

import HomeModal from './HomeModal'
import SponsorModal from './SponsorModal'

class HomePage extends React.Component {
  state = {
    sponsorData: [],
    selectedSponsorData: [],
    sponsorModalIsOpen: false,
  }

  componentDidMount() {
    fetch('/sponsor-data.json')
      .then((resp) => resp.json())
      .then((sponsorData) => {
        this.setState({ sponsorData })
      })
  }

  handleModalClick = (e) => {
    // TODO: Get this to work
    // this means get the e.target.id to populate correctly
    // so that a different modal can be opened for each sponsor
    // dynamically
    const selectedSponsor = this.state.sponsorData.find((sponsor) => {
      return sponsor.id === parseInt(e.target.id)
    })

    console.log(e.target)
    // console.log(sponsor.id)

    this.setState({
      sponsorModalIsOpen: true,
      selectedSponsorData: selectedSponsor,
    })
  }

  render() {
    const renderSponsorDataBig = this.state.sponsorData.map((sponsor) => {
      if (sponsor.big_card) {
        return (
          <Grid.Column
            id={sponsor.id}
            key={sponsor.id}
            className="same-height-column"
            onClick={this.handleModalClick}
          >
            <Card>
              <Image src={sponsor.img_url} wrapped ui={false} />
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

    const renderSponsorDataSmall = this.state.sponsorData.map((sponsor) => {
      if (!sponsor.big_card) {
        return (
          <Grid.Column
            id={sponsor.id}
            key={sponsor.id}
            className="same-height-column"
            onClick={this.handleModalClick}
          >
            <Card>
              <Image src={sponsor.img_url} wrapped ui={false} />
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
        <SponsorModal />
        <div
          sx={{
            fontWeight: 'bold',
          }}
        >
          <Container className="grid-container">
            <Grid>
              <Grid.Row columns={2}>{renderSponsorDataBig}</Grid.Row>
              <Grid.Row columns={3}>{renderSponsorDataSmall}</Grid.Row>
            </Grid>
          </Container>
        </div>
      </>
    )
  }
}

export default HomePage
