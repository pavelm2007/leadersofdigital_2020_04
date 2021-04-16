import {Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography} from '@material-ui/core'
import {orange} from '@material-ui/core/colors'

const InfoProgress = (props) => {
  const {title, indicatorValue, icon} = props
  return (
    <Card
      sx={{height: '100%'}}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{justifyContent: 'space-between'}}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {indicatorValue}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: orange[600],
                height: 56,
                width: 56
              }}
            >
              {icon}
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{pt: 3}}>
          <LinearProgress
            value={indicatorValue}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default InfoProgress
