import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";

// core components
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'clsx';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";


// Scheduler imports
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AllDayPanel,
  Toolbar,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

import fotoEvento from "assets/img/events/react_hackathon.jpg";

import { appointments } from "demo-data/appointments";


// Styles of Dashboard
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const currentDate = '2021-04-27';

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  root: {
    flexGrow: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  campinas: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
  },
  header: {
    height: '260px',
    backgroundSize: 'cover',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
  paper: {
    //padding: palette.spacing(2),
    textAlign: 'center',
    color: palette.text.secondary,
    margin: '2 rem'
  },
  formControl:{
    //margin: palette.spacing(1),
    minWidth: 120,
  },

});


export default function Dashboard() {

  const classes = useStyles();
  const [data, setData] = React.useState();

  const [cidade, setCidade] = React.useState('');

  const handleChange = (event) => {setCidade(event.target.value);}
  
  const getClassByLocation = (classes, location) => {
    if (location === 'Campinas') return classes.campinas;
  };


  const Header = withStyles(style, { name: 'Header' })(({
    children, appointmentData, classes, ...restProps
  }) => (
    <AppointmentTooltip.Header
      {...restProps}
      className={classNames(getClassByLocation(classes, appointmentData.location), classes.header)}
      appointmentData={appointmentData}
    >
      <IconButton
        /* eslint-disable-next-line no-alert */
        onClick={() => alert(JSON.stringify(appointmentData))}
        className={classes.commandButton}
      >
        <MoreIcon />
      </IconButton>
    </AppointmentTooltip.Header>
  ));
  
  const Content = withStyles(style, { name: 'Content' })(({
    children, appointmentData, classes, ...restProps
  }) => (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
      <Grid container alignItems="center">
        <Grid item xs={2} className={classes.textCenter}>
          <Room className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{appointmentData.location}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  ));
  
  const CommandButton = withStyles(style, { name: 'CommandButton' })(({
    classes, ...restProps
  }) => (
    <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
  ));

    

React.useEffect(()=>{
  setTimeout(()=>{
    setData(appointments)

  },2000)

},[])




  return (
    <div className={classes.root}>

          <Grid container spacing={3}>
            <Grid item xs={6}>
            <Card className={classes.paper}>
            <CardHeader color="rose">            <h4 className={classes.cardTitleWhite}s>Cidade</h4>
              <FormControl className={classes.formControl}>
                <InputLabel fullWidth id="demo-simple-select-label"></InputLabel>
                  <Select fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cidade}
                        onChange={handleChange}>
                     
                        <MenuItem className={classes.formControl} value={10}>Campinas</MenuItem>
                        <MenuItem className={classes.formControl} value={20}>Indaiatuba</MenuItem>
                        <MenuItem className={classes.formControl} value={30}>Valinhos</MenuItem>
                  </Select>
              </FormControl>
              </CardHeader>
              </Card>
            </Grid>

            <Grid item xs={6}>
            <Card className={classes.paper}>
            <CardHeader color="warning">            <h4 className={classes.cardTitleWhite}s>Categoria</h4>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={cidade}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Esportivo</MenuItem>
                      <MenuItem value={20}>Musical</MenuItem>
                      <MenuItem value={30}>Festa</MenuItem>
                  </Select>
              </FormControl>
              </CardHeader>
              </Card>
            </Grid>
          </Grid>

    <Grid item xs={12}>
      <Paper>
        <Scheduler
      data= {data}
      height={660}
      >
      <ViewState
        defaultCurrentDate={currentDate}
      />
      <WeekView
        startDayHour={9}
        endDayHour={19}
      />
      <Toolbar/>
      <DateNavigator />
      <TodayButton />
      <Appointments />
      <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            showCloseButton
      />
      <AllDayPanel />
      </Scheduler>
      </Paper>
    </Grid>
    </div>
  );
}
