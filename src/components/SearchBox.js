import React from 'react'


import TextField from '@material-ui/core/TextField';
import { useStyles } from '../index';

const SearchBox = ({ searchfield, searchChange }) => {
    const classes = {... useStyles() };


    return (
        <>

        <form className={classes.root} noValidate autoComplete="off" align="center" mb={3}>

        <TextField
          id="filled-textarea"
          label="Teacher Search"
          placeholder="Search Teacher"
          multiline
          variant="filled"
          onChange={searchChange}
        />
        </form>

        </>
    )
}

export default SearchBox
