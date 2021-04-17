import {Helmet} from 'react-helmet'
import {Box, Card, CardContent, Container, Grid, Typography} from '@material-ui/core'
import {useEffect, useState} from 'react'
import {
  getRegionOptions, getSpecialityOptions,
  useActiveRegion,
  useColumnRegionDataSet,
  useFetchRegionInfo,
  useFetchSalaryGraduates, useFetchSpecialities
} from '../components/charts/utils'
import Map from '../components/map/map'
import ColumnChart from '../components/charts/Column'
import ScatterChart from '../components/charts/Scatter'
import InfoBlock from '../components/dashboard/InfoBlock'
import MultipleSelect from '../components/Inputs/MultipleSelect/MultipleSelect'
import Line from '../components/charts/Line'
import {dynamicsSVE} from '../__mocks__/dinamika_SVE'

const Dashboard = () => {
  const defaultRegion = {id: 'RU-MOW', title: 'Москва'}
  const specialityOptions = getSpecialityOptions(dynamicsSVE)
  const [activeRegion, setActiveRegion] = useActiveRegion(defaultRegion)
  const [columnItems, setColumnDataSet] = useColumnRegionDataSet(activeRegion)
  const [salaryGraduates] = useFetchSalaryGraduates()
  const [regionInfos] = useFetchRegionInfo(activeRegion)
  const regionOptions = getRegionOptions()
  const [specialities, setSpecialities] = useState([specialityOptions[0]])
  const [dynamicsData] = useFetchSpecialities(specialities)

  useEffect(() => {
    handleSetRegion(activeRegion)
    setSpecialities([specialityOptions[0]])
  }, [])

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
            spacing={1}
          >
            {!!activeRegion && (
              <Grid
                item
                lg={6}
                md={6}
                xl={12}
                xs={12}
                alignContent={'center'}
              >
                <Card
                  sx={{height: '100%'}}
                >
                  <CardContent>
                    <Grid
                      sx={{justifyContent: 'space-between'}}
                    >
                      <MultipleSelect
                        value={activeRegion}
                        options={regionOptions}
                        multiple={false}
                        handleChange={(item) => handleSetRegion(item)}
                        title="Регион"
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {!!regionInfos && (
              <Grid
                item
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              >
                <Grid
                  container
                  spacing={1}
                >
                  {regionInfos.map(x => {
                    return (
                      <Grid
                        item
                        lg={3}
                        sm={3}
                        xl={3}
                        xs={3}
                      >
                        <InfoBlock
                          title={x.title}
                          indicatorValue={x.indicatorValue}
                          icon={x.icon}
                        />
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>

            )}
            <Grid
              item
              lg={6}
              md={6}
              xl={12}
              xs={12}
              alignContent={'center'}
            >
              <Map showTooltip={false} activeRegion={activeRegion} handleChoiceRegion={(x) => handleSetRegion(x)}/>
            </Grid>


            {!!activeRegion && (
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
                alignContent={'center'}
              >
                <ColumnChart dataSet={columnItems}>
                  <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Вакансии и выпускники региона
                  </Typography>
                </ColumnChart>
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
              <ScatterChart dataSet={salaryGraduates} activeRegion={activeRegion}>
                <Typography
                  align="center"
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                >
                  Влияние размера заработной платы на трудоустройство выпускников
                </Typography>
              </ScatterChart>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={12}
            >
              <Line dataSet={dynamicsData}>
                <Typography
                  align="center"
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                  marginBottom={3}
                >
                  Влияние размера заработной платы на трудоустройство выпускников
                </Typography>
                <MultipleSelect
                  value={specialities}
                  options={specialityOptions}
                  handleChange={(items) => setSpecialities(items)}
                  title="Специальность"
                />
              </Line>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>

  )
}

export default Dashboard
