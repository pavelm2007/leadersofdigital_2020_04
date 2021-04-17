import {Card, CardContent, colors, Grid} from '@material-ui/core'
import {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {regionPaths, regions} from './map_paths'

const useStyles = makeStyles({
  path: {
    transition: 'all .5s',
    fill: 'rgba(0, 0, 0, 0)',
    stroke: 'rgba(0, 0, 0, 0.5)'
  },
  activePath: {
    transition: 'all .5s',
    fill: '#f6e72d',
    stroke: 'rgba(0, 0, 0, 0.5)'
  },
  indicator: {
    display: 'none'
  },
  indicatorActive: {
    position: 'absolute',
    display: 'inline',
    background: 'rgba(0,0,0,1)',
    color: '#f1f1f1',
    padding: '10px 30px',
    font: '20px Arial',
    borderRadius: '5px',
    minWidth: '300px',
    textTransform: 'capitalize'
  }
})


const Map = ({handleChoiceRegion, activeRegion = null, showTooltip = true, ...other}) => {
  const [coords, setCoords] = useState({})
  const classes = useStyles()

  const handleClick = (region, e) => {
    setCoords({'x': e.pageX, 'y': e.pageY})
    handleChoiceRegion(region)
  }

  return (
    <Card
      {...other}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid item>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.2" x="0px" y="0px"
                 height="620px" viewBox="0 0 1090 620" xmlSpace="preserve">
              {regionPaths.map((item, i) => {
                const {id} = activeRegion || {}
                return (
                  <path
                    key={i}
                    className={item.id === id ? [classes.activePath] : classes.path}
                    d={item.path}
                    stroke={item.id === id ? colors.lime.A100 : colors.lime.A700}
                    strokeWidth="0.5"
                    id={item.id}
                    onClick={(e) => handleClick(item, e)}
                    // onMouseOver={(e) => handleClick(item, e)}
                    onTouchStart={(e) => handleClick(item, e)}
                  />
                )
              })}
            </svg>
            {showTooltip && (
              <div
                className={!!activeRegion ? classes.indicatorActive : classes.indicator}
                style={{top: `${coords.y}px`, left: `${coords.x}px`}}

              >
                {!!activeRegion && regions.find(item => item[0] === activeRegion.id)[1]}
              </div>
            )}

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Map
