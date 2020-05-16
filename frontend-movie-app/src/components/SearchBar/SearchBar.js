import React, { useRef, useEffect, useState, forwardRef } from 'react';
import classes from './SearchBar.module.css'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import { KeyboardArrowDownRounded, MovieRounded, TvRounded } from '@material-ui/icons';
import { Button, ListItem, ListItemText, List, ListItemIcon, TextField, ListItemSecondaryAction, ClickAwayListener } from '@material-ui/core';
import ForwardSearchPopover from '../SearchPopover/SearchPopover';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieSearch } from '../../store/actions/movie';
import { fetchTVSearch } from '../../store/actions/tv';
import QuickResults from './QuickResults/QuickResults';

export default function SearchBar() {
    const dispatch = useDispatch()

    const ref = useRef()
    const [value, setValue] = useState("")
    const type = useSelector(state => state.typeOfFilm.typeOfFilm)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (value) {
                if (value === ref.current.value) {
                    setShow(true)
                    if (type === "movies") {
                        dispatch(fetchMovieSearch(value))
                    } else {
                        dispatch(fetchTVSearch(value))
                    }
                }
            } else {
                setShow(false)
            }
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [value, type])

    function clickAwayQuickResults() {
        setShow(false)
    }

    return (
        <div className={classes.SearchBarContainer}>
            <Paper className={classes.root}>
                <ForwardSearchPopover />
                <div className={classes.indicator}>
                    {type === "movie" ? <div><MovieRounded /></div> : <div><TvRounded /></div>}
                </div>
                <input
                    className={classes.input}
                    placeholder="Search for Films"
                    ref={ref}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        console.log(ref.current.value)
                    }}
                />
                <Button type="submit"
                    className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </Button>
            </Paper>
            <QuickResults type={type} show={show} onClickAway={clickAwayQuickResults} />
        </div>

    );
}