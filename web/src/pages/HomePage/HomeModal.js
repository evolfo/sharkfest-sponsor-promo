import { Modal, Header } from 'semantic-ui-react'

import HomeModalForm from './HomeModalForm'

class HomeModal extends React.Component {
  state = {
    name: '',
    email: '',
    modalOpen: true,
    closeOnEscape: false,
    closeOnDimmerClick: false,
  }

  componentDidMount() {
    this.setState({
      modalOpen: false,
    })
    document.querySelector('button').click()
  }

  handleTextInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        closeOnEscape={this.state.closeOnEscape}
        closeOnDimmerClick={this.state.closeOnDimmerClick}
        trigger={<button className="hidden-button"></button>}
      >
        <Modal.Header>Welcome</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Please enter your info</Header>
            <HomeModalForm
              handleModalClose={this.handleModalClose}
              handleTextInput={this.handleTextInput}
              name={this.state.name}
              email={this.state.email}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default HomeModal
