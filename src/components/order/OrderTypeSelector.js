import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { markets } from '../../protobufs'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const OrderType = markets.OrderType

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  icon:{
    fill: "white"
  },
  listItemText: {
    padding: 0
  },
  noPadding:{
    paddingLeft: 0,
    paddingRight: 0
  }
})

const options = [
  { orderType: markets.OrderType.GTC, code: 'GTC', description: "Good 'til Canceled" },
  { orderType: markets.OrderType.AON, code: 'AON', description: "All or Nothing" },
  { orderType: markets.OrderType.IOC, code: 'IOC', description: "Immediate or Cancel" },
  { orderType: markets.OrderType.FOK, code: 'FOK', description: "Fill or Kill" },
  { orderType: markets.OrderType.STOP, code: 'STOP', description: "Stop Limit" },
]

class OrderTypeSelector extends React.Component {
  state = {
    anchorEl: null,
    orderType: OrderType.GTC,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ orderType: nextProps.orderType })
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, orderType) => {
    this.setState({ orderType: orderType, anchorEl: null })
    this.props.onChange(orderType)
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl, orderType } = this.state

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Order Type"
            onClick={this.handleClickListItem}
            className={classes.noPadding}
          >
            <ListItemText
              className={classes.listItemText}
              primary={options[orderType].code + " Order"}
              secondary={options[orderType].description}
            />
            <MoreVertIcon className={classes.icon}/>
          </ListItem>
        </List>

        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === orderType}
              onClick={event => this.handleMenuItemClick(event, index)}
              className={classes.itemText}
            >
              {option.code + ' - ' + option.description}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

OrderTypeSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  orderType: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(OrderTypeSelector);
