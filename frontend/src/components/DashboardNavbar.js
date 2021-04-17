import {useState} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import {AppBar, Badge, Box, colors, Hidden, IconButton, Toolbar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import Logo from './Logo'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  toolBar: {
    backgroundColor: colors.common.white
  },
  logo: {
    height: '44px'
  },
  btn: {
    color: colors.common.black
  }
})

const DashboardNavbar = ({onMobileNavOpen, ...rest}) => {
  const [notifications] = useState([])
  const classes = useStyles()

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolBar}>
        <RouterLink to="/region_all">
          <Logo className={classes.logo}/>
        </RouterLink>
        <Box sx={{flexGrow: 1}}/>
        <Hidden lgDown>
          <IconButton color="default" className={classes.btn}>
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <IconButton  color="default" className={classes.btn}>
            <InputIcon/>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="default" className={classes.btn}
            onClick={onMobileNavOpen}
          >
            <MenuIcon/>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
}

export default DashboardNavbar
