import { useState } from "react"

import { Comment, getComments, saveComment } from "~src/data/comments"

const getCurrentTimestamp = async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  const response = await chrome.tabs.sendMessage(tab.id, {
    operation: "getCurrentTimestamp"
  })
  console.log(response)
  return response.timeStamp as number
}

const IndexPopup = () => {
  const comments = getComments()

  // TODO: "Tab" is not updated unless the mouse enters, find out
  // why that is
  const handleCreateCommentClick = async () => {
    const timeStamp = await getCurrentTimestamp()
    const comment: Comment = {
      text: "foo",
      timeStamp
    }
    saveComment(comment)
    window.close()
  }

  return (
    <>
      <div>Here be dragons</div>
      {comments.map((comment) => (
        <div key={comment.timeStamp}>
          {comment.text}@{comment.timeStamp}
        </div>
      ))}
      <button onClick={handleCreateCommentClick}>Create comment</button>
    </>
  )
}

export default IndexPopup
