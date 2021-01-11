import React from 'react';
import styled, { css } from 'styled-components';

const PinPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -100%);
`;

const PinCard = styled.div`
  width: 160px;
  height: 140px;
  margin-bottom: 6px;
  background-color: #FAF9F7;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;
const PinCardImgPlaceholder = styled.div`
  width: 160px;
  height: 75px;
`;

const PinCardImg = styled.img`
  width: 160px;
  height: 75px;
  object-fit: fill;
`;

const PinCardTitle = styled.p`
  margin-top: 14px;
  margin-left: 8px;
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 9px;
  letter-spacing: 0.1em;
  color: #555555;
`;

const PinCardButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 8px;
  letter-spacing: 0.1em;
  height: 18px;
  margin-top: 0;
  margin-left: 8px;
  border: 0.5px solid #555555;
  background-color: #FAF9F7;
  padding-left: 2px;
  &:before{
    content: url('/directions.svg');
    border-right: 0.5px solid #555555;
    float: left;
    padding-right: 3px;
    margin-right: 4px;
    margin-left: 2px;
    margin-top: 2px;
  }
`;

const PinCardLink = styled.a`
  text-decoration: none;
`;

const MapPin = ({ projectTitle, projectImage, projectAdressLink }) => (
  <PinPoint>
    <PinCard>
      <PinCardImgPlaceholder>
        <PinCardImg src={projectImage} alt="pin-point" />
      </PinCardImgPlaceholder>
      <PinCardTitle>{projectTitle}</PinCardTitle>
      <PinCardLink target="_blank" href={projectAdressLink}>
        <PinCardButton>Directions to location</PinCardButton>
      </PinCardLink>
    </PinCard>
    <img src="/map-pin.svg" width="30px" alt="pin-point" />
    <div>{projectTitle}</div>
  </PinPoint>
);

export default MapPin;
