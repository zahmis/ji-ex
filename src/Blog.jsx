import React from 'react';
import Article from './Article';

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isPublished: false,
    };
  }

  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  render() {
    return (
        <div>
            <Article title={'ji-boys'}
                     contents={'hgoe'}
                     isPublished={this.state.isPublished}
                     toggle={() => this.togglePublished()}
          />
        </div>
    );
  }

}

export default Blog;
