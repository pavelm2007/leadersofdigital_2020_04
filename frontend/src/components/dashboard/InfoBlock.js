import {Avatar, Box, Card, CardContent, Grid, Typography} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import {green, red} from '@material-ui/core/colors'

const InfoBlock = (props) => {
  const {title, indicatorValue, changeIndicator, measureChangeIndicator, period, icon} = props
  return (
    <Card
      sx={{height: '100%'}}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={2}
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
              variant="h5"
            >
              {indicatorValue}
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {changeIndicator > 0 && <ArrowUpwardIcon sx={{color: green[900]}}/>}
          {changeIndicator < 0 && <ArrowDownwardIcon sx={{color: red[900]}}/>}
          <Typography
            sx={{
              color: changeIndicator < 0 ? red[600] : green[600],
              mr: 1
            }}
            variant="body2"
          >
            {changeIndicator} {measureChangeIndicator}
          </Typography>
          {
            !!period && <Typography
              color="textSecondary"
              variant="caption"
            >
              {period}
            </Typography>
          }

        </Box>
      </CardContent>
    </Card>
  )
}

export default InfoBlock
