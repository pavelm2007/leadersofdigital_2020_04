import {VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLegend} from 'victory'
import {Card, CardContent} from '@material-ui/core'

const myDataset = [
  [
    {x: 'стуренты', y: 1},
    {x: 'все', y: 2}
  ],
  [
    {x: 'стуренты', y: 4},
    {x: 'все', y: 5}
  ],
  [
    {x: 'стуренты', y: 10},
    {x: 'все', y: 20}
  ]
]

export const ColumnChart = ({dataSet, ...props}) => {

  return (
    <Card
      sx={{height: '100%'}}
      {...props}
      alignContent={'center'}
    >
      <CardContent>
        <div>
          <VictoryChart width={650} containerComponent={<VictoryContainer responsive={true}/>}
                        domainPadding={{x: 150, y: [0, 50]}}
                        style={{width: '100%'}}
                        padding={{left: 80, right: 100}}>
            <VictoryLegend x={125} y={10}
                           orientation="horizontal"
                           gutter={20}
                           style={{border: {stroke: 'black'}, title: {fontSize: 20}}}
                           data={[
                             {name: 'Выпускники', symbol: {fill: 'tomato'}},
                             {name: 'Вакансии', symbol: {fill: 'gold'}},
                             {name: 'Студенты', symbol: {fill: 'green'}}
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
          </VictoryChart>
        </div>
      </CardContent>
    </Card>
  )
}

export default ColumnChart
