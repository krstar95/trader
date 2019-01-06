import React, { Component } from 'react'
import { Card, CardHeader } from '@material-ui/core'
import MarketList from './MarketList'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  rowRed:{
    color: theme.palette.primary.main,
  },

  rowGreen:{
    color: theme.palette.secondary.main,
  },

  flex:{
    display:"flex",
    flexDirection:"column"
  },

});

class Markets extends Component {
  render() {
    return (
      <Card style={{height:this.props.height}} className={this.props.classes.flex}>
        <CardHeader title="DNX Markets" />
	      <MarketList />
      </Card>
    )
  }
}

export default (withStyles(styles)(Markets))
