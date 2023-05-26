const LOCAL_STORAGE_KEY = "yt_timed_comments"

export type Comment = {
  text: string
  timeStamp: number
}

export const saveComment = (comment: Comment): void => {
  const comments = getComments()
  comments.push(comment)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments))
}

export const getComments = (): Comment[] => {
  const comments = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!comments) {
    return []
  }
  return JSON.parse(comments)
}
