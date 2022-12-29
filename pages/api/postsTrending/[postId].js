import data from '../data'

// api/postsTrending/1
export default function handler(req, res) {
  const { postId } = req.query
  const { Trending } = data

  if (postId) {
    const post = Trending.find(value => value.id == postId)
    return res.status(200).json(post)
  }

  return res.status(404).json({ error: 'Data not found' })
}
