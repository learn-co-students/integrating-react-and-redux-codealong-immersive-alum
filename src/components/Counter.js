import React from 'react'

export default (props) => {

	const handleOnClick = () => {
		props.store.dispatch({type: 'INCREASE_COUNT'})
		console.log(props)
	}

  return (
    <div>
    	<button onClick={handleOnClick}>Increase number</button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
