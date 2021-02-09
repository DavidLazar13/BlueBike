import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import GoogleMapReact from 'google-map-react';
import MapPin from './MapPin';
import MapStyle from './MapPin/mapStyle';

const MapWrapper = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  padding-bottom: 10%;
    ${breakpoint('desktop')`
        width: 90%;
        padding-left: 10%;
  `};
`;

const defaultProps = {
  center: {
    lat: 44.17,
    lng: 28.66,
  },
  zoom: 13,
};

function GoogleMap() {
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCtAGZPwTLmDzr6GC9hdmxE2Oc4_Rbbi6I' }}
        options={{ styles: MapStyle.black }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapPin
          lat={44.17}
          lng={28.66}
          projectTitle="Headquarters"
          projectImage="../thumbnail.png"
          projectAdressLink="https://g.page/theviewconstanta?share"
        />
      </GoogleMapReact>
    </MapWrapper>
  );
}

export default GoogleMap;
