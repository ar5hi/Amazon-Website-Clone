import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
function Stars(props) {
    const starNumber = Array.from({ length: 5 }, (e, i) => {
        let n = i + 0.5
        return (
          <span>
            {props.rating >= i + 1 ? (
              <StarIcon fontSize="small" style={{ color: '#ff9f00' }} />
            ) : props.rating >= n ? (
              <StarHalfIcon fontSize="small" style={{ color: '#ff9f00' }} />
            ) : (
              <StarOutlineIcon fontSize="small" style={{ color: '#ff9f00' }} />
            )}
          </span>
        )
    })
  return (
      <div>{starNumber}</div>
  )
}

export default Stars