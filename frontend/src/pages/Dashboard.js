import {Helmet} from 'react-helmet'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import InfoBlock from 'src/components/dashboard/InfoBlock'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import InfoProgress from '../components/dashboard/InfoProgress'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import Map from 'src/components/map/map'
import ColumnChart from '../components/charts/Column'
import {useState} from 'react'
import {useColumnRegionDataSet} from '../components/charts/utils'

const Dashboard = () => {
  const [activeRegion, setActiveRegion] = useState(null)
  const [columnItems, setColumnDataSet] = useColumnRegionDataSet(activeRegion)

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
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <InfoBlock
                title="Абитуриенты"
                indicatorValue="55 200 чел."
                changeIndicator={15}
                measureChangeIndicator={'%'}
                period={'Сентябрь'}
                icon={<PeopleIcon/>}
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <InfoBlock
                title="Выпускники"
                indicatorValue="55 200 чел."
                changeIndicator={-15}
                measureChangeIndicator={'%'}
                period={'Май'}
                icon={<PeopleIcon/>}
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <InfoProgress title="Выпускники" indicatorValue={75.5} icon={<InsertChartIcon/>}/>
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <InfoBlock
                title="Средняя зарплата"
                indicatorValue="55 200 руб."
                icon={<PeopleIcon/>}
              />
            </Grid>

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

            {!!activeRegion && (
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
                alignContent={'center'}
              >
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="h6"
                >
                  {(activeRegion||{}).id}
                </Typography>
                <ColumnChart dataSet={columnItems}/>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Dashboard
