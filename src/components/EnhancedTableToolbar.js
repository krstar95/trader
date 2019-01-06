import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterListIcon from '@material-ui/icons/FilterList';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import FilterChip from './FilterChip';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Done from '@material-ui/icons/Done';
import { connect } from 'react-redux';

class EnhancedTableToolbar extends Component {

    state = {
        open: false,
        anchorEl: null
    };
    
    handleToggle  = placement =>event => {
      const { currentTarget } = event;
      this.setState(state => ({ 
        open: !state.open,
        anchorEl: currentTarget
      }));
      
    };
    
    handleClose = event => {
      
      this.setState({ open: false });
    };

    handleSelect = event => {
      
      this.props.selectItem(event.target.value);
      this.setState({ open: false });
    };

    render() {
  
      const { selected, cancelOrders, classes } = this.props;
      const { menus } = this.props;
      const { open } = this.state;
  
      return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: selected.length > 0,
        })}
      >
        <div className={classes.title}>
          {selected.length > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {selected.length} selected
            </Typography>
          ) : ("")}
        </div>
        <div className={classes.spacer} />
        {
          !selected.length > 0 ? (<div> <FilterChip /> </div>) : (<React.Fragment></React.Fragment>)
        }
        <div className={classes.actions}>
          {selected.length > 0 ? (
            <div className={classes.inline_container}>
              <div className={classes.middle}>

              <Button variant="contained" className={classes.button} onClick={cancelOrders}>
                Cancel {selected.length} {selected.length > 1? 'Orders': 'Order'}
                <CancelIcon className={classes.rightIcon} />
              </Button>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <Tooltip title="Filter list">
                <IconButton aria-label="Filter list" onClick={this.handleToggle('bottom-end')}>
                  <FilterListIcon />
                </IconButton>
              </Tooltip>

              <Popper open={open} anchorEl={this.state.anchorEl} transition disablePortal={true} placement="bottom-end">
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper placement="bottom-end">
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList>
                        {
                          menus.map ( (item) => {
                            return (
                              <MenuItem key={item.id} onClick={this.handleSelect} value={item.id}>
                                {item.title}
                                {item.selected? (<ListItemIcon className={classes.icon}>
                                  <Done />
                                </ListItemIcon>) : ""}
                              </MenuItem>
                            )
                          })
                        }
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            </React.Fragment>
          )}
        </div>
      </Toolbar>
      )
    }
}

// TODO: What is the proper definition or import for this function?
const lighten = color => color

const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: '#FF5722',
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      zIndex: 100,
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
    button: {
      width: 200,
      margin: theme.spacing.unit,
      backgroundColor: '#D81B60',
      color: 'white',
    },
    inline_container: {
      display: 'inline-flex',
    },
    middle: {
      alignSelf: 'center',
    },
    icon: {},
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
});

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  cancelOrders: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    menus: state.filterMenus.menus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: (id) => {
      dispatch({type: 'SELECT_ITEM', id: id})
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(withStyles(toolbarStyles)(EnhancedTableToolbar));
