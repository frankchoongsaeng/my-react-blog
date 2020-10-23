// check if the user has already interacted with the post
function hasUserInteracted(postid) {
  if ( localStorage?.[postid] ) {
    return true
  }
  
  return false
}

// return the current user interaction on a post
export function getPostVote(postid) {
  return localStorage.getItem(postid);
}

// public function to return true, false, or null depending on the user interaction with a post
export function getCurrentInteractionOnPost(postid) {
  if( hasUserInteracted(postid) ) {
    let vote = getPostVote(postid);
    return vote === "upvote";
  }

  return null;
}

// add a users upvote or downvote action on a post
export function persistUserAction(postid, action, callback) {

  let rt_action = action === "upvote" ? true : false;
  
  if( !hasUserInteracted(postid) ) {
    localStorage[postid] = action;
  } else {
    let vote = getPostVote(postid);
    if(vote === action) {
      localStorage.removeItem(postid);
      rt_action = null;
    } else {
      localStorage[postid] = action;
    }
  }

  callback(rt_action)
}
