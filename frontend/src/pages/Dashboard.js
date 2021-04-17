import {Helmet} from 'react-helmet'
import {Box, Container, Grid} from '@material-ui/core'
import InfoBlock from 'src/components/dashboard/InfoBlock'
import {useState} from 'react'
import {useColumnRegionDataSet, useFetchRegionInfo, useFetchSalaryGraduates} from '../components/charts/utils'
import Map from '../components/map/map'
import ColumnChart from '../components/charts/Column'
import ScatterChart from '../components/charts/Scatter'

const Dashboard = () => {
  const [activeRegion, setActiveRegion] = useState(null)
  const [columnItems, setColumnDataSet] = useColumnRegionDataSet(activeRegion)
  const [salaryGraduates] = useFetchSalaryGraduates()
  const [regionInfos] = useFetchRegionInfo(activeRegion)

  const handleSetRegion = (region) => {
    setActiveRegion(region)
    setColumnDataSet(region)

  }

  return (
    <>
      <Helmet>
        <title> Развитие кадров | EdTech</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              alignContent={'center'}
            >
              <Map activeRegion={activeRegion} handleChoiceRegion={(x) => handleSetRegion(x)}/>
            </Grid>
            {regionInfos.map(x => {
              return (
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <InfoBlock
                    title={x.title}
                    indicatorValue={x.indicatorValue}
                    icon={x.icon}
                  />
                </Grid>
              )
            })}
            {!!activeRegion && (
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
                alignContent={'center'}
              >
                <ColumnChart dataSet={columnItems}/>
              </Grid>
            )}
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={12}
              alignContent={'center'}
            >
              <ScatterChart dataSet={salaryGraduates}/>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Dashboard
