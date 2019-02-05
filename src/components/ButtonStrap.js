import React, {PropTypes} from 'react';
import { Button } from 'reactstrap';

const ButtonStrap = ({OnIncrement, name}) => (
    <Button onClick={OnIncrement}>{name}</Button>
)

export default ButtonStrap
