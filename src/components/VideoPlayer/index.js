import './index.css'

import ReactPlayer from 'react-player'

const VideoPlayer = props => {
  console.log(props)
  const {urlVideos} = props
  const {title, urls} = urlVideos

  return (
    <div className="video-container">
      <h1 className="heading">{title}</h1>
      <ReactPlayer url={urls} />
    </div>
  )
}

export default VideoPlayer
