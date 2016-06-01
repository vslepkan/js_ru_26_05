import React, { PropTypes, Component } from 'react'

class Comments extends Component {

  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    const { comments=[] } = this.props.article;
    const { isOpen } = this.state;
    //все хорошо, но Comment лучше вразу вынести в отдельный компонент
    const commentList = isOpen ? comments.map((item) => <li key={item.id}><p>{item.name}</p>{item.text}</li> ) : null;
    let btn;

    if (isOpen) {
      btn = <button onClick = {this.toggleOpen}>Hide comments</button>
    } else if (comments.length == 0) {
      btn = null;
    } else {
      btn = <button onClick = {this.toggleOpen}>Show {comments.length} comments</button>
    }

    return (
      <div>
        {btn}
        <ul>
          {commentList}
        </ul>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.object.isRequired
};

export default Comments
