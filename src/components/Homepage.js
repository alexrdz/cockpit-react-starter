import React, {Component} from 'react';

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchHomePage()
  }
  renderContent() {
    const {homepage} = this.props;
    if (homepage) {
      return (
        <p>{homepage.Craft}</p>
      );
    }
  }
  render() {

    return (
      <div>
        the homepage component.
        {this.renderContent()}
      </div>
    );
  }
}

export default Homepage;