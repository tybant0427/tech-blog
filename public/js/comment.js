const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const commentBody = document.querySelector('textarea[name="comment-body"]').value;
  // console.log(postId.value);
  // console.log(commentBody.value);

  if (commentBody) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentBody
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
