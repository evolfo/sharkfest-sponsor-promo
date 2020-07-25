/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Image, Container, Card } from 'semantic-ui-react'

import HomeModal from './HomeModal'

class HomePage extends React.Component {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <>
        <HomeModal />
        <div
          sx={{
            fontWeight: 'bold',
          }}
        >
          <Container className="grid-container">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column className="same-height-column">
                  <Card>
                    <Image src="/sponsor-banner.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Matthew</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville. Matthew is a
                        musician living in Nashville. Matthew is a musician
                        living in Nashville. Matthew is a musician living in
                        Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column className="same-height-column">
                  <Card>
                    <Image src="/sponsor-banner.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Matthew</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column className="same-height-column">
                  <Card>
                    <Image src="/sponsor-banner.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Matthew</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column className="same-height-column">
                  <Card>
                    <Image src="/sponsor-banner.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Matthew</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column className="same-height-column">
                  <Card>
                    <Image src="/sponsor-banner.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Matthew</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </>
    )
  }
}

export default HomePage
