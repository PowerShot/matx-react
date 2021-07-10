import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 80,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776', 0.349749294378, 'paid', '4035d449-4733-4a15-b7b5-3a5e70a0cd23'],
  ['11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776', 0.922651835795, 'paid', 'ec3ac7e9-e328-42ed-b4ea-9860a03706a7'],
  ['11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776', 0.683768994337, 'paid', 'gsrdgd8a-d48c-4ce0-9d5b-e17fa12abf61'],
  ['11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776', 1.072330963967, 'paid', 'ecf1258a-d48c-4ce0-9d5b-e17fa12abf61'],
  ['11ab100c8bdb5cc61a4d5b303486fa581f15e9e741c611b031def50fdc468776', 0.0530963967, 'paid', '4636ee1d-15fc-4234-b841-5689fea1c646'],
];

function createData(id, test, calories, fat, carbs) {
  return { id, test, calories, fat, carbs};
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function ReactVirtualizedTable() {
  return (
      <Card elevation={3} className="p-20 mb-24">
        <Paper style={{ height: 400, width: '100%' }}>
        <VirtualizedTable
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            columns={[
            {
                width: 200,
                label: 'Launcher\u00A0ID',
                dataKey: 'test',
            },
            {
                width: 120,
                label: 'Amount',
                dataKey: 'calories',
                numeric: true,
            },
            {
                width: 30,
                label: 'State',
                dataKey: 'fat',
                numeric: true,
            },
            {
                width: 210,
                label: 'Transaction\u00A0ID',
                dataKey: 'carbs',
                numeric: true,
            }
            ]}
        />
        </Paper>
    </Card>
  );
}