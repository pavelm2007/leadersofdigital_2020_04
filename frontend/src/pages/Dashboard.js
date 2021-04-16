import {Helmet} from 'react-helmet'
import {Box, Container, Grid} from '@material-ui/core'
import LatestOrders from 'src/components/dashboard/LatestOrders'
import LatestProducts from 'src/components/dashboard/LatestProducts'
import Sales from 'src/components/dashboard/Sales'
import TrafficByDevice from 'src/components/dashboard/TrafficByDevice'
import InfoBlock from 'src/components/dashboard/InfoBlock'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import InfoProgress from '../components/dashboard/InfoProgress'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import Map from 'src/components/map/map'

const Dashboard = () => (
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
              title="Выгода"
              indicatorValue="55 200 руб."
              icon={<PeopleIcon/>}
            />
          </Grid>
          <Grid
            lg={12}
            md={12}
            xl={12}
            xs={12}
            alignContent={'center'}
          >
            <Map/>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{height: '100%'}}/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{height: '100%'}}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)

export default Dashboard
