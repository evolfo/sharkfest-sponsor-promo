import { Modal, Header, Image } from 'semantic-ui-react'

const SponsorModal = (props) => {
  return (
    <>
      <Modal
        onClose={props.handleSponsorModalClose}
        open={props.sponsorModalIsOpen}
      >
        <Image alt="sponsor-banner" src={props.selectedSponsorData.img_url} />
        <Modal.Header>{props.selectedSponsorData.title}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{props.selectedSponsorData.subtitle}</Header>
            {props.selectedSponsorData.modal_description}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default SponsorModal
