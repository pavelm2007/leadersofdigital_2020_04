import {VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryTheme} from 'victory'
import {Card, CardContent, colors} from '@material-ui/core'

export const ColumnChart = ({dataSet, ...props}) => {

  return (
    <Card
      sx={{height: '100%'}}
      {...props}
      alignContent={'center'}
    >
      <CardContent>
        <div style={{marginBottom: '20px'}}>
          {props.children}
        </div>
        <div>
          <VictoryChart width={650} height={250}
                        domainPadding={{x: 150, y: [10, 50]}}
                        style={{width: '100%'}}
                        padding={{left: 80, bottom: 30, top: 20 }}
          >
            <VictoryLegend x={125} y={10}
                           orientation="horizontal"
                           gutter={20}
                           style={{border: {stroke: 'black'}, title: {fontSize: 20}}}
                           padding={{right: 20 }}
                           data={[
                             {name: 'Выпускники', symbol: {fill: colors.blueGrey.A700}},
                             {name: 'Вакансии', symbol: {fill: colors.orange.A700}},
                             {name: 'Студенты', symbol: {fill: colors.lightGreen.A700}}
                           ]}
            />
            <VictoryGroup offset={40} colorScale={'qualitative'}>
              {
                dataSet.map((x, i) => {
                  return (
                    <VictoryBar
                      key={i}
                      style={{data: {fill: x.color}}}
                      data={x.items}
                    />
                  )
                })
              }
            </VictoryGroup>
            <VictoryAxis
              style={{
                axisLabel: {padding: 60}
              }}
            />
            <VictoryAxis
              dependentAxis
              label="Человек, тыс."
              style={{
                axisLabel: {padding: 35}
              }}
            />
          </VictoryChart>
        </div>
      </CardContent>
    </Card>
  )
}

export default ColumnChart
