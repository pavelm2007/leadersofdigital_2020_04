import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './containers/Home'
import Reports from './containers/Reports'
import Vacancies from './containers/Vacancies'
import Vacancy from './containers/Vacancy'
import VacancyEdit from './containers/VacancyEdit'

const BaseRouter = () => (
  <Switch>
    <Route path="/reports" component={Reports}/>
    <Route path="/vacancies/create" component={VacancyEdit}/>
    <Route path="/vacancies/:vacancyId" component={Vacancy}/>
    <Route path="/vacancies/" component={Vacancies}/>
    <Route exact path="/" component={Home}/>
  </Switch>
)

export default BaseRouter