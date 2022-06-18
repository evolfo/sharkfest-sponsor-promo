import { Modal, Header, Image, Button } from 'semantic-ui-react'

const SponsorModal = ({ sponsorModalIsOpen, selectedSponsorData, handleSponsorModalClose }) => {
    const DisplayDescription = () => {

      return selectedSponsorData?.modal_description.map(
        (paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        }
      )
    }

    const displayVideo = selectedSponsorData.video_url !== undefined || selectedSponsorData.video_url !== ""

    return (
      <>
        <Modal
          onClose={handleSponsorModalClose}
          open={sponsorModalIsOpen}
        >
          {displayVideo ? (
            <Image
              alt="sponsor-banner"
              src={selectedSponsorData.img_url}
            />
          ) : (
            <iframe
              width="900"
              height="510"
              src={selectedSponsorData.video_url}
              frameBorder="0"
              allowFullScreen
            />
          )}
          <Modal.Header>{selectedSponsorData.title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>{selectedSponsorData.subtitle}</Header>
              <DisplayDescription />
              <Button
                primary
                className="sponsor-button"
                target="_blank"
                href={selectedSponsorData.link}
              >
                Learn More
              </Button>
              {selectedSponsorData.title === 'Endace' && (
                <Button primary target="_blank" href="https://bit.ly/3l7tXxT">
                  SharkFest Competition
                </Button>
              )}
              {selectedSponsorData.title === 'G-Net Solutions, Inc.' && (
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

export default SponsorModal