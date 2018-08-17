import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => (
<li>
    {text} <span>votes: {votes}</span> <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    {text} <span>votes: {votes}</span> <button onClick={() => thumbDownComment(id)}>Thumb Down</button>
</li>
);

export default Comment;