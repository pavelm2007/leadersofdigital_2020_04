import React from 'react'
import {RootState} from '../../../reducers'
import {connect, ConnectedProps} from 'react-redux'
import {Link} from 'react-router-dom'
import {IBreadcrumb} from '../../../types'

const mapState = ({page}: RootState) => ({
  page
})

const mapDispatch = {}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}


const PageBreadcrumbs = ({page}: Props) => {
  const {title, breadcrumbs} = page
  const brCount = breadcrumbs.length
  return (
    <div className="page-breadcrumb">
      <div className="row">
        <div className="col-12 d-flex no-block align-items-center">
          <h4 className="page-title">{title}</h4>
          <div className="ml-auto text-right">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {breadcrumbs.map((item: IBreadcrumb, i: number) =>
                  brCount-1 === i
                    ? <li className="breadcrumb-item active" aria-current="page" key={i}>{item.title}</li>
                    : <li className="breadcrumb-item" key={i}><Link to={item.to}>{item.title}</Link></li>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connector(PageBreadcrumbs)