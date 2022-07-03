import { Modal, Header, Image, Button } from "semantic-ui-react";

const SponsorModal = ({
  sponsorModalIsOpen,
  selectedSponsorData,
  handleSponsorModalClose,
}) => {
  if (selectedSponsorData.length === 0) return;

  const DisplayDescription = () => {
    return selectedSponsorData?.modal_description.map((paragraph, index) => {
      if (selectedSponsorData.id === 3 && index === 7 || index === 13) {
        return <p style={{ color: "red" }}><b>{paragraph}</b></p>
      }

      return <p key={index}>{paragraph}</p>;
    });
  };

  const displayVideo = selectedSponsorData.video_url !== undefined;

  return (
    <>
      <Modal onClose={handleSponsorModalClose} open={sponsorModalIsOpen}>
        {!displayVideo ? (
          <Image
            className="sponsor-modal-image"
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
        <Modal.Header>
          {!!selectedSponsorData.title && selectedSponsorData.title}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{selectedSponsorData.subtitle}</Header>
            <DisplayDescription />
            {selectedSponsorData.title === "Endace" && (
              <a
                href="https://www2.endace.com/sharkfest-register-2022"
                rel="noopenner noreferrer"
                target="_blank"
              >
                <Image
                  className="sponsor-modal-image"
                  alt="sponsor-banner"
                  src="/assets/sponsors/endace-competition.png"
                />
              </a>
            )}
            {selectedSponsorData?.links.length === 1 ? (
              <Button
                primary
                className="sponsor-button"
                target="_blank"
                href={selectedSponsorData.links[0]}
              >
                Learn More
              </Button>
            ) : (
              selectedSponsorData?.links?.map((link) => (
                <Button
                  key={link.text}
                  primary
                  className="sponsor-button"
                  target="_blank"
                  href={link.link}
                >
                  {link.text}
                </Button>
              ))
            )}
            {selectedSponsorData?.title === "Endace" && (
              <Button
                primary
                target="_blank"
                href="https://www2.endace.com/sharkfest-register-2022"
              >
                SharkFest Competition
              </Button>
            )}
            {selectedSponsorData?.title === "G-Net Solutions, Inc." && (
              <>
                <Button
                  primary
                  target="_blank"
                  href="https://gnet-inc.com/services-111320/"
                >
                  Services
                </Button>
                <Button
                  primary
                  target="_blank"
                  href="https://gnet-inc.com/vaas-031521/"
                >
                  G-Net Visibility as a Service (GvaaS)
                </Button>
                <Button
                  primary
                  target="_blank"
                  href="https://gnet-inc.com/gnet-sharkfest-sept2021/"
                >
                  G-Net Videos Packet Videos
                </Button>
              </>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SponsorModal;
