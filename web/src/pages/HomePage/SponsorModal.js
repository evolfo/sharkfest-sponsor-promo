/* eslint-disable camelcase */
import { Modal, Header, Image, Button } from 'semantic-ui-react'

class SponsorModal extends React.Component {
  render() {
    const DisplayDescription = () => {
      return this.props?.selectedSponsorData?.modal_description.map(
        (paragraph, index) => {
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
                target="_blank"
                href={this.props.selectedSponsorData.link}
              >
                Learn More
              </Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </>
    )
  }
}

export default SponsorModal
