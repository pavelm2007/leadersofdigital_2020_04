import {useEffect} from 'react'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Avatar, Box, Divider, Drawer, Hidden, List, Typography} from '@material-ui/core'
import {BarChart as BarChartIcon} from 'react-feather'
import NavItem from './NavItem'
import {makeStyles} from '@material-ui/styles'

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Специалист по работе с выпускниками',
  name: 'Катерина Смит'
}

const items = [
  {
    href: '/region_all',
    icon: BarChartIcon,
    title: 'Аналитика'
  },
  {
    href: '/region_ekb',
    icon: BarChartIcon,
    title: 'Профиль'
  },
  {
    href: '/region_ekb',
    icon: BarChartIcon,
    title: 'Настройки'
  },
  {
    href: '/region_ekb',
    icon: BarChartIcon,
    title: 'Техническая поддержка'
  }
]

const useStyles = makeStyles({
  jobTitle: {
    textAlign: 'center'
  }
})


const DashboardSidebar = ({onMobileClose, openMobile}) => {
  const location = useLocation()
  const classes = useStyles()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [location.pathname])

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/region_all"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          className={classes.jobTitle}
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider/>
      <Box sx={{p: 2}}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{flexGrow: 1}}/>
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
}

DashboardSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
}

export default DashboardSidebar
