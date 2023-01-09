import './SingleVideo.css'

function SingleVideo(props){
    const video = props.video;
    return(
        <div className='SingleVideo'>
            <iframe src={video?.videoLink} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen  >
            </iframe>   
        </div>
    )
}

export default SingleVideo;