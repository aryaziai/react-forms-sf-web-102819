import React from 'react';
 
class Form extends React.Component {
  state = { // theres no "this" cuz we aren't using constructor
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }
 
  handleFirstNameChange = () => {
    this.setState({
      firstName: "matt"
    })
  }
  
 
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
 
  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat({firstName: this.state.firstName, lastName: this.state.lastName})
    this.setState({submittedData: dataArray})
  }
 
  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }
 
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={sdfdsfsd => { this.handleFirstNameChange(sdfdsfsd) }}
            value={this.state.firstName}
          />
          <input
            type="text"
            onChange={event => this.handleLastNameChange(event)}
            value={this.state.lastName}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}
 
export default Form;