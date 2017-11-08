'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GatsbyRemarkCodeReplsRedirect extends Component {
  componentDidMount() {
    this.form.submit()
  }

  render() {
    const { action, payload } = this.props

    return (
      <form
        style={{ paddingBottom: `50px` }}
        ref={form => {
          this.form = form
        }}
        action={action}
        method="POST">
        <input type="hidden" name="data" value={payload} />

        <p>
          Not automatically redirecting?
        </p>

        <p>
          <input type="submit" value="Click here" />
        </p>
      </form>
    )
  }
}

GatsbyRemarkCodeReplsRedirect.propTypes = {
  action: PropTypes.string.isRequired,
  payload: PropTypes.object.isRequired,
}

export default GatsbyRemarkCodeReplsRedirect
