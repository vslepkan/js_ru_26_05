import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    const { isOpen } = this.state;
    const {comments} = this.props;
    //все хорошо, но Comment лучше вразу вынести в отдельный компонент
    //let btn;
    //
    //if (isOpen) {
    //  btn = <button onClick = {this.toggleOpen}>Hide comments</button>
    //} else if (comments.length == 0) {
    //  btn = null;
    //} else {
    //  btn = <button onClick = {this.toggleOpen}>Show {comments.length} comments</button>
    //}

    return (
      <div>
        <ul>
          <Comment comments = {comments} />
        </ul>
      </div>
    )
  }

  getList() {
    
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList
