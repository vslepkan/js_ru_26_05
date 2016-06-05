import React, { PropTypes } from 'react'

function Comment(props) {
  const {comment: {text, name} } = props;
  console.log(comment);
  return (
    <li>
      <p>{name}</p>
      {text}
    </li>
  )
}

Comment.propTypes = {
  comments: PropTypes.object.isRequired
};

export default Comment