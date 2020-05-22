import React from 'react';
import { useSelector } from 'react-redux';
import classes from './VideoContainer.module.css';
import LoadSkeletonVideo from './LoadSkeletonVideo/LoadSkeletonVideo';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import EmptyListWrapper from '../../../components/EmptyListWrapper/EmptyListWrapper';

export default function VideoContainer() {
    const loadVideo = useSelector(state => state.movieVideos.loading)
    const videos = useSelector(state => state.movieVideos.videos)
    const error = useSelector(state => state.movieVideos.error)
    return (
        <div className={classes.VideoContainer} >
            {loadVideo ?
                <LoadSkeletonVideo />
                :
                error ? <ErrorWrapper width="560px" height="315px" />
                    :
                    videos.results.length === 0 ?
                    <EmptyListWrapper width="560px" height={315} />
                    :
                    <div className={classes.Video}>
                        <iframe title="VideoPlayer" src={`https://www.youtube.com/embed/${videos.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
            }
        </div >
    );
};

