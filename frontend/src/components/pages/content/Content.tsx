import React from 'react'

export const Content = (props: { children: any; }) => {
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  )
}

export default Content