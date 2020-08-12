import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  remainingChars = () => (this.props.maxChars - this.state.content.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" value={this.state.content} onChange={this.handleContentChange}/>
        <p style={{color: 'grey'}}>{this.remainingChars()} characters left...</p>
      </div>
    );
  }
}

export default TwitterMessage;
