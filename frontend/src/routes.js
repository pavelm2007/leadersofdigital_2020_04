import {Navigate} from 'react-router-dom'
import DashboardLayout from 'src/components/DashboardLayout'
import Dashboard from 'src/pages/Dashboard'
import NotFound from 'src/pages/NotFound'

const routes = [
  {
    path: '/',
    element: <DashboardLayout/>,
    children: [
      {path: 'region_all', element: <Dashboard/>},
      {path: '/', element: <Dashboard/>},
      {path: '404', element: <NotFound/>},
      {path: '*', element: <Navigate to="/404"/>}
    ]
  }

]

export default routes
