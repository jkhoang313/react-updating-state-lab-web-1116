const React = require('react')

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  updateClicks() {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }

  render() {
    return (
      <button onClick={this.updateClicks.bind(this)}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker
