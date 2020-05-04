import React from 'react';
import { useSelector } from 'react-redux';
import classes from './SimilarSection.module.css';
import FilmSection from '../../../components/FilmSection/FilmSection';
import LoadSkeletonBackdropCard from '../../../components/Cards/LoadSkeletonBackdropCard/LoadSkeletonBackdropCard';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import BackdropCard from '../../../components/Cards/BackdropCard/BackdropCard';

export default function SimilarSection() {
    const loadSimilar = useSelector(state => state.movieSimilar.loading)
    const similar = useSelector(state => state.movieSimilar.similar)
    const error = useSelector(state => state.movieSimilar.error)
    const fillerLoadItems = [1,2,3,4,5]
    return (
        <div className={classes.SimilarSection} >
            <FilmSection
                // heading="Similar Movies"
                title="Similar Movies"
                subtitle="Movies Similar to this One."
            >
                {loadSimilar ?
                    fillerLoadItems.map((load, key) => {
                        return <LoadSkeletonBackdropCard key={key} />
                    })
                    :
                    error ? <ErrorWrapper width="1366px" height={215} /> :
                        similar.results.map((similar, key) => {
                            return <BackdropCard
                                isSrc={similar.backdrop_path}
                                key={key}
                                id={similar.id}
                                type="movie"
                                src={`https://image.tmdb.org/t/p/original${similar.backdrop_path}`}
                                title={similar.name || similar.title || similar["original_title"]}
                            />
                        })
                }
            </FilmSection>
        </div >
    );
};

