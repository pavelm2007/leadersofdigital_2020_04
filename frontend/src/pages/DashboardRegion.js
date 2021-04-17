import {Helmet} from 'react-helmet'
import {Box, Card, CardContent, Container, Grid} from '@material-ui/core'
import InfoBlock from 'src/components/dashboard/InfoBlock'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import InfoProgress from '../components/dashboard/InfoProgress'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import Map from 'src/components/map/map'
import ColumnChart from '../components/charts/Column'
import {useEffect, useState} from 'react'
import {getSpecialityOptions, useColumnRegionDataSet, useFetchSpecialities} from '../components/charts/utils'
import MultipleSelect from '../components/Inputs/MultipleSelect/MultipleSelect'
import {dynamicsSVE} from '../__mocks__/dinamika_SVE'
import Line from '../components/charts/Line'

const DashboardRegion = () => {
  const defaultRegion = {id: 'RU-SVE'}
  const specialityOptions = getSpecialityOptions(dynamicsSVE)
  const [activeRegion] = useState(defaultRegion)
  const [columnItems, setColumnDataSet] = useColumnRegionDataSet(activeRegion)
  const [specialities, setSpecialities] = useState([specialityOptions[0]])
  const [dynamicsData] = useFetchSpecialities(specialities)

  useEffect(() => {
    setColumnDataSet(defaultRegion)
  }, [])

  return (
    <>
      <Helmet>
        <title> Екатеринбург | EdTech</title>
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
              <Map
                activeRegion={activeRegion}
                showTooltip={false}
                handleChoiceRegion={() => {
                }}
              />
            </Grid>

            {!!activeRegion && !!columnItems && (
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
            >
              <Card>
                <CardContent>
                  <MultipleSelect
                    options={specialityOptions}
                    handleChange={(items) => setSpecialities(items)}
                    title="Специальность"
                  />
                </CardContent>
              </Card>
              {!!dynamicsData && <Line dataSet={dynamicsData}/>}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default DashboardRegion
