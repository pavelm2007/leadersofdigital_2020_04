import {Card, CardContent, colors, Grid} from '@material-ui/core'
import {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {regionPaths, regions} from './map_paths'
import {compareByRegionCode, getRegionTitleById} from '../charts/utils'
import {vacancy} from '../../__mocks__/vacansy'

const useStyles = makeStyles({
  path: {
    transition: 'all .5s',
    stroke: 'rgba(0, 0, 0, 0.5)'
  },
  activePath: {
    transition: 'all .5s',
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
  },
  paletteWrap: {
    display: 'flex',
    alignItems: 'center'
  },
  paletteColor: {
    width: '24px',
    height: '24px',
    marginRight: '8px',
    borderRadius: '4px'
  }
})


const Map = ({handleChoiceRegion, activeRegion = null, showTooltip = true, ...other}) => {
  const [coords, setCoords] = useState({})
  const classes = useStyles()

  const handleClick = (region, e) => {
    setCoords({'x': e.pageX, 'y': e.pageY})
    handleChoiceRegion(region)
  }

  const getRegionPath = () => {
    return regionPaths.map(item => {
      const v = vacancy.find((i) => compareByRegionCode(i, item))
      return {
        ...item,
        title: getRegionTitleById(item),
        vacancy: (v || {}).it
      }
    })
  }

  const getColorByVacancy = ({vacancy}) => {
    let color = colors.blueGrey.A100
    console.log(vacancy, typeof vacancy, vacancy < 400)
    switch (true) {
      case vacancy < 200:
        color = colors.blueGrey.A200
        break
      case vacancy < 400:
        color = colors.blueGrey.A400
        break
      case vacancy < 600:
        color = colors.blueGrey['500']
        break
      case vacancy < 800:
        color = colors.blueGrey['600']
        break
      default:
        color = colors.blueGrey.A700
        break
    }
    return color
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
                 height="320px" viewBox="0 0 1090 620" xmlSpace="preserve">
              {getRegionPath().map((item, i) => {
                const {id} = activeRegion || {}
                return (
                  <path
                    key={i}
                    className={item.id === id ? [classes.activePath] : classes.path}
                    fill={getColorByVacancy(item)}
                    d={item.path}
                    stroke={item.id === id ? colors.lime.A100 : colors.lime.A700}
                    strokeWidth={item.id === id ? '7' : '3'}
                    id={item.id}
                    onClick={(e) => handleClick(item, e)}
                    // onMouseOver={(e) => handleClick(item, e)}
                    onTouchStart={(e) => handleClick(item, e)}
                  />
                )
              })}
            </svg>
            <Grid
              container
              spacing={3}
            >
              <Grid item xs={2} className={classes.paletteWrap}>
                <div className={classes.paletteColor} style={{backgroundColor: colors.blueGrey.A200}}/>
                <div>{'0-200'}</div>
              </Grid>
              <Grid item xs={2} className={classes.paletteWrap}>
                <div className={classes.paletteColor} style={{backgroundColor: colors.blueGrey.A400}}/>
                <div>{'201-400'}</div>
              </Grid>
              <Grid item xs={2} className={classes.paletteWrap}>
                <div className={classes.paletteColor} style={{backgroundColor: colors.blueGrey['500']}}/>
                <div>{'401-600'}</div>
              </Grid>
              <Grid item xs={2} className={classes.paletteWrap}>
                <div className={classes.paletteColor} style={{backgroundColor: colors.blueGrey['600']}}/>
                <div>{'601-800'}</div>
              </Grid>
              <Grid item xs={2} className={classes.paletteWrap}>
                <div className={classes.paletteColor} style={{backgroundColor: colors.blueGrey.A700}}/>
                <div>{'>800'}</div>
              </Grid>
            </Grid>
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
