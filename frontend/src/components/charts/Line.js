import {VictoryAxis, VictoryChart, VictoryLegend, VictoryLine} from 'victory'
import {Card, CardContent} from '@material-ui/core'

export const ColumnChart = ({dataSet, ...props}) => {
  return (
    <Card
      {...props}
      alignContent={'center'}
    >
      <CardContent>
        <div style={{marginBottom: '20px', textAlign: '-webkit-center'}}>
          {props.children}
        </div>
        {!!dataSet && (
          <div>
            <VictoryChart
              width={650} height={275}
              domainPadding={{x: 15, y: [10, 50]}}
              style={{width: '100%'}}
              padding={{left: 80, bottom: 30, top: 20}}
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
              <VictoryAxis
                           label="Вакансии"
                           style={{
                             axisLabel: {padding: 40}
                           }}/>
              <VictoryAxis dependentAxis
                           label="Вакансии"
                           style={{
                             axisLabel: {padding: 40}
                           }}/>
            </VictoryChart>
          </div>
        )}

      </CardContent>
    </Card>
  )
}

export default ColumnChart
