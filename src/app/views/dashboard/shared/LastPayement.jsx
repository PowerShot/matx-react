import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Card } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));


export default function LastPayement() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  return (
    <Card elevation={3} className="p-20 mb-24">
        <h2>Payement (Soon)</h2>
        <List dense={dense}>
            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.orange}>
                    <Icon>hourglass_bottom</Icon>
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary='0.349749294378'
                secondary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <Icon>info</Icon>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

            <Divider />
            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.green}>
                    <Icon>done</Icon>
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary='0.349749294378'
                secondary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <Icon>info</Icon>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.green}>
                    <Icon>done</Icon>
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary='0.349749294378'
                secondary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <Icon>info</Icon>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.green}>
                    <Icon>done</Icon>
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary='0.349749294378'
                secondary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <Icon>info</Icon>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.green}>
                    <Icon>done</Icon>
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary='0.349749294378'
                secondary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <Icon>info</Icon>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </List>
    </Card>
  );
}
