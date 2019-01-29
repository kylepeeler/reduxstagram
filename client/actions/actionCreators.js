// increment a like
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add a comment
export function addComment(postId, author, comment) {
    console.log('dispatching add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove a comment
export function removeComment(postId, commentIndex) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentIndex
    }
}