import SponsorsLayout from 'src/layouts/SponsorsLayout'
import SponsorCell from 'src/components/SponsorCell'

const SponsorPage = ({ id }) => {
  return (
    <SponsorsLayout>
      <SponsorCell id={id} />
    </SponsorsLayout>
  )
}

export default SponsorPage
