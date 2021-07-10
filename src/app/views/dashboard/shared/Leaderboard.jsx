import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
  gold: {
    color: '#fff',
    backgroundColor: '#ffd54f',
  },
  silver: {
    color: '#fff',
    backgroundColor: '#A9A9A9',
  },
  bronze: {
    color: '#fff',
    backgroundColor: '#d4ac6e',
  },
  other: {
    color: '#fff',
    backgroundColor: '#c2b0e2',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Leaderboard() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Card elevation={3} className="p-20 mb-24">
        <h2>Leaderboard (Soon)</h2>
        <List dense={dense}>
            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.gold}>
                    1
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                  secondary='xch1vxxefupflqzkn64whzt738v5qfsek0lvupyrpgf50hwurkj4q9xsvs43tq'
                />
                <h3>
                  1.25 PiB
                  <IconButton edge="end" aria-label="delete">
                      <Icon>info</Icon>
                  </IconButton>
                </h3>
            </ListItem>

            <Divider />
            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.silver}>
                    2
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                  secondary='xch1vxxefupflqzkn64whzt738v5qfsek0lvupyrpgf50hwurkj4q9xsvs43tq'
                />
                <h3>
                  0.95 PiB
                  <IconButton edge="end" aria-label="delete">
                      <Icon>info</Icon>
                  </IconButton>
                </h3>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.bronze}>
                    3
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                  secondary='xch1vxxefupflqzkn64whzt738v5qfsek0lvupyrpgf50hwurkj4q9xsvs43tq'
                />
                <h3>
                  0.75 PiB
                  <IconButton edge="end" aria-label="delete">
                      <Icon>info</Icon>
                  </IconButton>
                </h3>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.other}>
                    4
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                  secondary='xch1vxxefupflqzkn64whzt738v5qfsek0lvupyrpgf50hwurkj4q9xsvs43tq'
                />
                <h3>
                  0.25 PiB
                  <IconButton edge="end" aria-label="delete">
                      <Icon>info</Icon>
                  </IconButton>
                </h3>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                <Avatar className={classes.other}>
                    5
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776'
                  secondary='xch1vxxefupflqzkn64whzt738v5qfsek0lvupyrpgf50hwurkj4q9xsvs43tq'
                />
                <h3>
                  125 TiB
                  <IconButton edge="end" aria-label="delete">
                      <Icon>info</Icon>
                  </IconButton>
                </h3>
            </ListItem>
            <Divider />
        </List>
    </Card>
  );
}
