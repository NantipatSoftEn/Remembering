import React, {PropTypes} from 'react';
import ButtonStrap from '../components/ButtonStrap'
const CurrentCount = ({counters, p}) => (
    <div>
        CurrentCount: {counters != 5
            ? counters
            : 0}
        <ButtonStrap OnIncrement={() => p(20)} name="Plus"/>
    </div>
)

// CurrentCount.propTypes = {     counters: PropTypes.number.isRequired };
export default CurrentCount