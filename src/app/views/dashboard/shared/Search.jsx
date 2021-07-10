import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Icon } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
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
});

class Search extends Component {
  constructor(props) {
    super(props);
    
    // We declare the state as shown below
    this.state = {
      value: ''
    }
  }
  
  render() {
    const { classes } = this.props;

    return(
      <Paper action="/farmer" component="form" className={classes.root}>
        <IconButton disabled="True" className={classes.iconButton} aria-label="menu">
          <Icon>
          arrow_forward_ios
          </Icon>
        </IconButton>
        <InputBase
          className={classes.input}
          type="text"
          name="id"
          
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="Search farmer"
          inputProps={{ 'aria-label': 'search farmer' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon className="mx-10"/>
        </IconButton>
      </Paper>
    );
  }
}
export default withStyles(styles)(Search);