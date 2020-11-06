import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';


export const Acreditation = ({acreditation, darkMode}) => <AcreditationBox darkMode={darkMode}>{acreditation}</AcreditationBox>

const AcreditationBox = styled.p`
    text-align: center;
    color: ${(props) => (props.darkMode === true ? "white" : "black")};
    margin-bottom: 0;
`
Acreditation.propTypes = {
    acreditation: PropTypes.string,
};