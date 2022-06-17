import React from 'react'
import PropTypes from 'prop-types'

const ForecastChart = props => {
  return (
    <div>ForecastChart</div>
  )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        })
    ).isRequired
}

export default ForecastChart