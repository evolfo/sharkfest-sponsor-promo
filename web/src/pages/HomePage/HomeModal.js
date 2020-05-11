import { Modal, Header } from 'semantic-ui-react'

import HomeModalForm from './HomeModalForm'

class HomeModal extends React.Component {
  state = {
    name: '',
    email: '',
  }

  componentDidMount() {
    document.querySelector('button').click()
  }

  handleTextInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <Modal trigger={<button className="hidden-button"></button>}>
        <Modal.Header>Welcome</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Please enter your info</Header>
            <HomeModalForm
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
