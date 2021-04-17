import {Navigate} from 'react-router-dom'
import DashboardLayout from 'src/components/DashboardLayout'
import CustomerList from 'src/pages/CustomerList'
import Dashboard from 'src/pages/Dashboard'
import NotFound from 'src/pages/NotFound'
import Account from './pages/Account'
import DashboardRegion from './pages/DashboardRegion'

const routes = [
  {
    path: '/',
    element: <DashboardLayout/>,
    children: [
      {path: 'account', element: <Account/>},
      {path: 'customers', element: <CustomerList/>},
      {path: 'dashboard', element: <Dashboard/>},
      {path: 'region_all', element: <Dashboard/>},
      {path: 'region_ekb', element: <DashboardRegion/>},
      {path: '/', element: <Navigate to="/dashboard"/>},
      {path: '404', element: <NotFound/>},
      {path: '*', element: <Navigate to="/404"/>}
    ]
  }

]

export default routes
