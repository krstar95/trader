import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Wrapper} from '../../containers/App'



class WrapperTab extends React.Component {
  render() {
      var that = this;
      var style = {}
      if(this.props.hide){
        style.display = "none"
      }
      var newChildren = React.Children.map(this.props.children, function(child) {
          return React.cloneElement(child, { width: that.props.style.width,
              height: that.props.style.height})
      });

      return (
          <div style={style}>
              {newChildren}
          </div>
      );
  }
}

WrapperTab.propTypes = {
  hide: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
}


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  },
  c:{
    backgroundColor: "#212a2f"
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, components, labels, height, width } = this.props;
    const { value } = this.state;

    const style = {}
    style.width = width
    style.height = Number(height.slice(0,height.search("px"))) - 50
    style.height = style.height + "px"

    let tab_labels = labels.map(label => {
        return <Tab key={label} label={label} />
    })


    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.c}>
          <Tabs value={value} onChange={this.handleChange}>
            {tab_labels}
          </Tabs>
        </AppBar>


        {components.map((element, i) => {
          return (<WrapperTab key={'WrapperTab-' + i} style={style} hide={i!=value}>{element}</WrapperTab>)
        })}


      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
