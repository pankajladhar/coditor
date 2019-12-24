import React from 'react'
import PropTypes from "prop-types";

const TestResults = (props) => {
    const { results } = props;
    return (
        <pre className="sucess">{results}</pre>
    )
}
TestResults.propTypes = {
    results: PropTypes.string.isRequired
}

export default TestResults;