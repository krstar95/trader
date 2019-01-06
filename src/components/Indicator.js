import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  bullish: {
    color: theme.palette.secondary.main
  },
  bearish: {
    color: theme.palette.primary.main
  }
});

class Indicator extends PureComponent {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  render() {
    const { classes, theme, label, fields, actions } = this.props;
    const { open } = this.state

    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h3">{ label }</Typography>
            {
              fields.map(field =>
                <Typography key={field} component="h2">{field()}</Typography>)
            }
          </CardContent>
          <div>
          {actions.map(action =>
            <Button className={classes[action.color]}
              key={action.label}
              size="small"
              variant="text"
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          )}
          </div>
        </div>
      </Card>
    )
  }
}

Indicator.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  market: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
}

export default withStyles(styles, { withTheme: true })(Indicator)
