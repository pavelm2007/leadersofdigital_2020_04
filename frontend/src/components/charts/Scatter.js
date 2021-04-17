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
            domain={{x: [0, 5], y: [0, 7]}}
          >
            <VictoryScatter
              style={{data: {fill: '#c43a31'}}}
              size={7}
              data={[
                {x: 1, y: 2},
                {x: 2, y: 3},
                {x: 3, y: 5},
                {x: 4, y: 4},
                {x: 5, y: 7}
              ]}
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
