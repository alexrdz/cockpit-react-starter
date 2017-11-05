import React, {Component} from 'react';

export default (props) => {
    console.log('page props', props);
    if (props.Body) {
        const {Body} = props;

        return (
          <div dangerouslySetInnerHTML={{__html: Body}} />
        );
    }

    return (
      <div>
          Body not set yet.
      </div>
    )

}
