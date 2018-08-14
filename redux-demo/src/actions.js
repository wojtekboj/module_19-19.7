import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}

function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

export {addComment, thumbUpComment};