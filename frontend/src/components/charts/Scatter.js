import {VictoryAxis, VictoryChart, VictoryContainer, VictoryScatter, VictoryTheme} from 'victory'
import {Card, CardContent, colors} from '@material-ui/core'

export const ScatterChart = ({dataSet, activeRegion, ...props}) => {
  return (
    <Card
      {...props}
      alignContent={'center'}
    >
      <CardContent>
        <div style={{marginBottom: '20px'}}>
          {props.children}
        </div>
        <div>
          <VictoryChart
            width={650}
            containerComponent={<VictoryContainer responsive={true}/>}
            style={{width: '100%'}}
            theme={VictoryTheme.material}
          >
            <VictoryScatter
              // style={{data: {fill: 'tomato'}}}
              size={5}
              data={dataSet}
              style={{
                data: {
                  fill: ({datum}) => datum.id === activeRegion.id ? colors.orange.A700 : colors.blueGrey.A400,
                  stroke: ({datum}) => datum.id === activeRegion.id ? colors.orange.A700 : colors.blueGrey.A400,
                  fillOpacity: 1,
                  strokeWidth: ({datum}) => datum.id === activeRegion.id ? 20 : 0
                }
              }}
            />
            <VictoryAxis
              label="Зарплата IT, ₽"
              style={{
                axisLabel: {padding: 30}
              }}
            />
            <VictoryAxis dependentAxis
                         label="Выпускники"
                         style={{
                           axisLabel: {padding: 40}
                         }}
            />
          </VictoryChart>
        </div>
      </CardContent>
    </Card>
  )
}

export default ScatterChart
