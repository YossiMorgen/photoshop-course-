import { NavLink, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SingleVideo from '../SingleVideo/SingleVideo';
import './VideosList.css'
function VideosList(props){
    const videos = props.videos;

    let {id} = useParams();
    id == undefined && (id = 1);

    const video = videos[id - 1];
    return(
        <div className='VideosList'>
            <SingleVideo video={video}/>
            
            <div className='VideoSmallList'>
                {
                    videos.map(v => {
                        return (
                            <div key={v.id}>
                                <NavLink to={`/coursearea/videos/${v.id}`}>{v.videoName}</NavLink>
                                <hr/>
                            </div>
                        );
                    })
                }
            </div>
        </div>    
    )
}

export default VideosList;