import {colors, Grid} from '@material-ui/core'
import {useEffect, useState} from 'react'
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


const Map = (props) => {
  const [activeRegionId, setActiveRegionId] = useState(null)
  const [activeRegion, setActiveRegion] = useState(null)
  const [coords, setCoords] = useState({})
  const classes = useStyles()

  const getRegionById = (id) => {
    setActiveRegion(regions.find(item => item[0] === id))
  }
  useEffect(() => {
    return () => {
      getRegionById(activeRegionId)
    }
  }, [activeRegionId])

  const handleClick = (regionId, e) => {
    setActiveRegionId(regionId)
    setCoords({'x': e.pageX, 'y': e.pageY})
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" version="1.2" x="0px" y="0px"
             height="620px" viewBox="0 0 1090 620" xmlSpace="preserve">
          {regionPaths.map((item, index) => {
            return (
              <path
                key={index}
                className={item.id === activeRegionId ? [classes.activePath] : classes.path}
                d={item.path}
                stroke={item.id === activeRegionId ? colors.lime.A100 : colors.lime.A700}
                strokeWidth="0.5"
                id={item.id}
                onClick={(e) => handleClick(item.id, e)}
                onMouseOver={(e) => handleClick(item.id, e)}
                onTouchStart={(e) => handleClick(item.id, e)}
              />
            )
          })}
        </svg>
        <div
          className={!!activeRegion ? classes.indicatorActive : classes.indicator}
          style={{top: `${coords.y}px`, left: `${coords.x}px`}}
        >
          <img src="" alt=""/>
          {!!activeRegion && activeRegion[1]}
        </div>
      </Grid>
    </Grid>
  )
}

export default Map
