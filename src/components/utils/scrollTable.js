import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardHeader, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import classNames from 'classnames';


import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const getSorting = (order, orderBy) =>
      order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)

const formatPrice = (market, val) =>
      val ? val / Math.pow(10, market.quote_asset.decimals) : ''



const styles = theme => ({

  rowSmall: {
    height: "auto",
  },

  rowBanded:{
    whiteSpace: 'nowrap',
    '&:nth-of-type(odd)': {
    backgroundColor: "rgb(50,50,50)",
     },
     '&:nth-of-type(even)': {
     backgroundColor: "rgb(56,56,56)",
      },
  },


  headRow:{
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  rowRed:{
    color: theme.palette.primary.main,
  },

  rowGreen:{
    color: theme.palette.secondary.main,
  },


  rowWhite:{
    color:"white"
  },

  flex:{
    display:"flex",
    flexDirection:"column"
  },

  flexFill:{
    flex:1
  },
  tableLayout:{
    tableLayout:"fixed"
  },
  marketColumn:{
    whiteSpace: 'nowrap'
  },

});


class Section extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
                  order: this.props.order ? this.props.order : 'desc',
                  orderBy: this.props.orderBy ? this.props.orderBy : 0,
                }
    if(this.props.rows)
      this.state.rows = this.getRowData(this.props.rows)
    this.clickHandler = () => {}
    if(this.props.clickHandler)
      this.clickHandler = this.props.clickHandler
  }



  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc"
    if(this.state.orderBy == property && this.state.order == 'desc'){
      order = 'asc'
    }
    this.setState({order, orderBy})
  }


  getRowData(rows){
    return rows.map((row, index, array) => {
      return this.props.rowData(row)
    })
  }


  getRowsDisplay(){
    let rows
    rows = stableSort(this.state.rows, getSorting(this.state.order, this.state.orderBy))
    let last_color = this.props.classes.rowGreen

    let row
    let previous_row
    let formated_rows = []
    let color

    for(var i=rows.length-1;i>=0;i--){
      row = rows[i]
      previous_row = i < rows.length - 1  ? rows[i+1] : row

      if(this.props.rowColor){
        color = this.props.rowColor(row, previous_row, last_color)
        last_color = color
      }
      else
        color = this.props.classes.rowWhite
      if(this.props.rowDataFormating)
        row = this.props.rowDataFormating(row, previous_row)
      formated_rows.unshift([row, color])
    }

    return formated_rows

  }



  componentWillReceiveProps(nextProps){

    //if(this.state.rows.length != nextProps.rows.length){
      this.setState({rows:this.getRowData(nextProps.rows)})
    //}
  }

  componentDidMount(){

    Events.scrollEvent.register('begin', (to, element) => {
      console.log("begin", arguments)
    })
    Events.scrollEvent.register('end', (to, element) => {
      console.log("end", arguments)
    })

    scrollSpy.update()

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  scrollToTop() {
    scroll.scrollToTop()
  }
  scrollToBottom() {
    scroll.scrollToBottom()
  }
  scrollTo() {
    scroll.scrollTo(100)
  }
  scrollMore() {
    scroll.scrollMore(100)
  }
  handleSetActive(to) {
    console.log(to)
  }

  keyHack = 0

  render() {

    let rows
    let row_class
    let td_class = ""
    rows = this.getRowsDisplay().map((row, index) => {

      row_class = []

      if(this.props.rowSmall)
        row_class.push(this.props.classes.rowSmall)
      if(this.props.rowBanded){
        row_class.push(this.props.classes.rowBanded)
      }

      this.keyHack += 1

      return (
        <TableRow key={this.keyHack} hover className={classNames(...row_class)} onClick={event => this.clickHandler(event, row)}>
        {row[0].map(column => {
          this.keyHack += 1
          return <TableCell key={this.keyHack} className={row[1]} style={{padding:"5px 10px 5px 10px"}}>{column}</TableCell>
        })}
        </TableRow>
      )

    })


    let me = this;

    return (
      <div className={classNames("no-drag", this.props.classes.flex, this.props.classes.flexFill)} >

      <Table className={this.props.classes.tableLayout}>
        <TableHead>
          <TableRow>
            {this.props.headers.map((header, index) => {
              return (<TableCell key={header} onClick={(event) => this.handleRequestSort(event, index)} style={{padding:"5px 10px 5px 10px"}}>

                      <Tooltip
                        title="Sort"
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={this.state.orderBy === index}
                          direction={this.state.order}
                        >
                          {header}
                        </TableSortLabel>
                      </Tooltip>
              </TableCell>)
            })}
          </TableRow>
        </TableHead>

      </Table>

      <Element name="test7" className={classNames("element", this.props.classes.flexFill)} id="containerElement" style={{
        position: 'relative',
        overflowY: 'auto'
      }}>
        <Table className={this.props.classes.tableLayout}>

        <TableHead style={{visibility:"collapse"}}>
          <TableRow>
            {this.props.headers.map(header => {
              return (<TableCell key={header}>{header}</TableCell>)
            })}
          </TableRow>
        </TableHead>
        <TableBody>

          {rows}

        </TableBody>
      </Table>
      </Element>
      </div>
    );
  }
}


export default withStyles(styles)(Section)
