/* eslint-disable camelcase */
import { Modal, Header, Image, Button } from 'semantic-ui-react'

class SponsorModal extends React.Component {
  render() {
    const DisplayDescription = () => {

      return this.props?.selectedSponsorData?.modal_description.map(
        (paragraph, index) => {
          // TODO: Add link somewhere in the paragraph if necessary
          // if (paragraph.includes("SharkFest competition")) {
          //     paragraph.split(" ").map((word, index) => {
          //       // debugger
          //       if (word === "SharkFest" && paragraph.split(" ")[index+1] === "competition") {
          //         paragraph = paragraph.split(" ")
          //         paragraph[index] = `<a href='https://bit.ly/33wqwJq'>${word}</a>`
          //         paragraph[index+1] = `<a href='https://bit.ly/33wqwJq'>${paragraph[index+1]}</a>`
          //         paragraph = paragraph.join(" ")
          //       }
          //     })
          // } else {

          // }
          return <p key={index}>{paragraph}</p>
        }
      )
    }

    return (
      <>
        <Modal
          onClose={this.props.handleSponsorModalClose}
          open={this.props.sponsorModalIsOpen}
        >
          {this.props.selectedSponsorData.video_url === undefined ? (
            <Image
              alt="sponsor-banner"
              src={this.props.selectedSponsorData.img_url}
            />
          ) : (
            <iframe
              width="900"
              height="510"
              src={this.props.selectedSponsorData.video_url}
              frameBorder="0"
              allowFullScreen
            />
          )}
          <Modal.Header>{this.props.selectedSponsorData.title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>{this.props.selectedSponsorData.subtitle}</Header>
              <DisplayDescription />
              <Button
                primary
                className="sponsor-button"
                target="_blank"
                href={this.props.selectedSponsorData.link}
              >
                {this.props.selectedSponsorData.title === 'G-Net Solutions, Inc.' ? 'Visit our Website' : 'Learn More'}
              </Button>
              {this.props.selectedSponsorData.title === 'Endace' && (
                <Button primary target="_blank" href="https://bit.ly/3l7tXxT">
                  SharkFest Competition
                </Button>
              )}
              {this.props.selectedSponsorData.title === 'G-Net Solutions, Inc.' && (
                <>
                  <Button primary target="_blank" href="https://gnet-inc.com/services-111320/">
                    Services
                  </Button>
                  <Button primary target="_blank" href="https://gnet-inc.com/vaas-031521/">
                    G-Net Visibility as a Service (GvaaS)
                  </Button>
                  <Button primary target="_blank" href="https://gnet-inc.com/gnet-sharkfest-sept2021/">
                    G-Net Videos Packet Videos
                  </Button>
                </>
              )}
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </>
    )
  }
}

export default SponsorModal
