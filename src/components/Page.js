import React, {Component} from 'react';

class Page extends Component {

  componentDidMount() {
    this.props.fetchPage(this.props.page);
  }

  render() {
    const {Body} = this.props;
    return (
      <div dangerouslySetInnerHTML={{__html: Body}} />
    )
  }
  
  // componentDidMount() {
  //   const {fetchPage, page} = this.props;
  //   fetchPage(page);
  // }
  //
  // render() {
  //   console.log('this.props', this.props);
  //   if (this.props.Body) {
  //     const {Body} = this.props;
  //
  //     return (
  //       <div dangerouslySetInnerHTML={{__html: Body}} />
  //     );
  //   }
  //
  //   return (
  //     <div>
  //       Body not set yet.
  //     </div>
  //   );
  // }

}

export default Page;