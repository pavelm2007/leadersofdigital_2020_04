import {VictoryAxis, VictoryChart, VictoryContainer, VictoryScatter, VictoryTheme} from 'victory'
import {Card, CardContent} from '@material-ui/core'

export const ScatterChart = ({dataSet, ...props}) => {
  return (
    <Card
      {...props}
      alignContent={'center'}
    >
      <CardContent>
        <div>
          <VictoryChart
            width={650}
            containerComponent={<VictoryContainer responsive={true}/>}
            style={{width: '100%'}}
            theme={VictoryTheme.material}
          >
            <VictoryScatter
              style={{data: {fill: '#c43a31'}}}
              size={7}
              data={dataSet}
            />
            <VictoryAxis
              label="Зарплата it "
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
