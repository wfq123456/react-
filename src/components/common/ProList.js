import React from 'react'
  class Com extends React.Component {
    goDetail (id) {
      this.props.history.push('/detail/' + id)
    }
    render () {
      return (
        <ul className = "prolist">
          {
            this.props.prolist.map(item => (
              <li key = { item.id } onClick = { this.goDetail.bind(this,item.id) }>
                  { item.title }
              </li>
            ))
          }
        </ul>
      )
    }
  }
export default Com;