import SponsorsLayout from 'src/layouts/SponsorsLayout'
import EditSponsorCell from 'src/components/EditSponsorCell'

const EditSponsorPage = ({ id }) => {
  return (
    <SponsorsLayout>
      <EditSponsorCell id={id} />
    </SponsorsLayout>
  )
}

export default EditSponsorPage
