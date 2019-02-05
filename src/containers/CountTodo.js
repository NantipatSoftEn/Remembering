import React from 'react'
import {connect} from 'react-redux'
import ButtonStrap from '../components/ButtonStrap'
import {increment, decrement, reset} from '../actions'
import CurrentCount from '../components/CurrentCount'
let CountTodo = ({dispatch}) => {
    return (
        <div>
            <ButtonStrap OnIncrement={() => dispatch(increment())} name="Increment"/>

            <ButtonStrap OnIncrement={() => dispatch(decrement())} name="Decrement"/>

            <ButtonStrap OnIncrement={() => dispatch(reset())} name="RESET"/>
        </div>
    )
}

CountTodo = connect()(CountTodo)
export default CountTodo