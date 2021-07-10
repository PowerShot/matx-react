import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton disabled="True" className={classes.iconButton} aria-label="menu">
        <Icon>
          arrow_forward_ios
        </Icon>
      </IconButton>
      <InputBase
        className={classes.input}
        typer="text"
        name="wallet"
        placeholder="Search farmer"
        inputProps={{ 'aria-label': 'search farmer' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon className="mx-10"/>
      </IconButton>
    </Paper>
  );
}
