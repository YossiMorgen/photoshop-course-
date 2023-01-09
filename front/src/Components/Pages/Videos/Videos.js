import './Videos.css'
import 'react-html5video/dist/styles.css'
import VideosList from '../../VideosArea/VideosList/VideosList'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"
import appConfig from '../../Config/appConfig';

function Videos(){
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        axios.get(appConfig.videos)
        .then(res => setVideos(res.data))
        .catch(err => console.log(err))
    },[])

    let {id} = useParams();
    console.log(videos);
    id == undefined && (id = 1);
    
    console.log(id);
    const video = videos[id - 1];
    return(
        <div className='Videos'>            
            <h3>{video?.videoName }</h3>
            <hr/>
            <VideosList videos={videos}/>
        </div>
    )
}

export default Videos