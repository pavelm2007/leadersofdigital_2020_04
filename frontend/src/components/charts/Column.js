import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack} from 'victory'
import {Card, CardContent, Grid} from '@material-ui/core'

const myDataset = [
  [
    {x: 'a', y: 1},
    {x: 'b', y: 2},
    {x: 'c', y: 3},
    {x: 'd', y: 2},
    {x: 'e', y: 1}
  ],
  [
    {x: 'a', y: 2},
    {x: 'b', y: 3},
    {x: 'c', y: 4},
    {x: 'd', y: 5},
    {x: 'e', y: 5}
  ],
  [
    {x: 'a', y: 1},
    {x: 'b', y: 2},
    {x: 'c', y: 3},
    {x: 'd', y: 4},
    {x: 'e', y: 4}
  ]
]

export const ColumnChart = (props) => {
  const transformData = (dataset) => {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y
      }, 0)
    })
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return {x: datum.x, y: (datum.y / totals[i]) * 100}
      })
    })
  }
  return (
    <Card
      sx={{height: '100%'}}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{justifyContent: 'space-between'}}
        >
          <Grid item>
            <div>
              <VictoryChart height={400} width={400}
                            domainPadding={{x: 30, y: 20}}
              >
                <VictoryStack
                  colorScale={['black', 'blue', 'tomato']}
                >
                  {transformData(myDataset).map((data, i) => {
                    return <VictoryBar data={data} key={i}/>
                  })}
                </VictoryStack>
                <VictoryAxis dependentAxis
                             tickFormat={(tick) => `${tick}%`}
                />
                <VictoryAxis
                  tickFormat={['a', 'b', 'c', 'd', 'e']}
                />
              </VictoryChart>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ColumnChart
