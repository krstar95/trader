import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing.unit / 2,
    },
    chip: {
      margin: theme.spacing.unit / 2,
    },
});

class FilterChip extends React.Component {

    handleDelete = data => () => {
        
        this.props.selectItem(data.id);
    };

    render() {
        const { classes, menus } = this.props;

        return (
            <Paper className={classes.root}>
            {
                menus.map( (data) => {
                    
                    if (data.selected) {
                        return (
                            <Chip
                                key={data.key}          
                                label={data.title}
                                onDelete={this.handleDelete(data)}
                                className={classes.chip}
                            />
                        )
                    }
                })
            }
            </Paper>
        );
    }
}
  
FilterChip.propTypes = {
    classes: PropTypes.object.isRequired,
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
  
export default connect( mapStateToProps, mapDispatchToProps)(withStyles(styles)(FilterChip));

