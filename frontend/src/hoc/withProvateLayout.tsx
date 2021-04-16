import React from 'react'
import {Content} from '../components/pages'
import PrivateLayout from '../containers/PrivateLayout'

const withPrivateLayout = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => (
  {...props}) => (
  <PrivateLayout>
    <Content>
      <Component {...props as P} />
    </Content>
  </PrivateLayout>
)


export default withPrivateLayout