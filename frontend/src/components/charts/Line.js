import {VictoryAxis, VictoryChart, VictoryContainer, VictoryLegend, VictoryLine} from 'victory'
import {Card, CardContent} from '@material-ui/core'

export const ColumnChart = ({dataSet, ...props}) => {
  return (
    <Card
      {...props}
      alignContent={'center'}
    >
      <CardContent>
        <div>
          <VictoryChart
            width={650} containerComponent={<VictoryContainer responsive={true}/>}
            domainPadding={{x: 150, y: [0, 50]}}
            style={{width: '100%'}}
            padding={{left: 80, right: 100}}
          >
            <VictoryLegend x={125} y={10}
                           orientation="horizontal"
                           gutter={20}
                           style={{border: {stroke: 'black'}, title: {fontSize: 20}}}
                           data={dataSet.map(item => {
                             return {name: item.title, symbol: {fill: `${item.color}`}}
                           })}
            />
            {dataSet.map(item => {
              return (
                <VictoryLine
                  interpolation="natural"
                  style={{
                    data: {stroke: item.color}
                  }}
                  data={item.items}
                  x="a"
                  y="b"
                />
              )
            })}
            <VictoryAxis dependentAxis
                         label="Вакансий"
                         style={{
                           axisLabel: {padding: 40}
                         }}/>
          </VictoryChart>
        </div>
      </CardContent>
    </Card>
  )
}

export default ColumnChart
