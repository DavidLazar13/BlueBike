import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import GoogleMapReact from 'google-map-react';
import MapPin from './MapPin';

const MapWrapper = styled.div`
  height: 90%;
  width: 100%;
  padding-bottom: 10%;
  filter: grayscale(100%);
    ${breakpoint('desktop')`
        width: 90%;
        padding-left: 10%;
  `};
`;

const defaultProps = {
  center: {
    lat: 44.14,
    lng: 28.62,
  },
  zoom: 15,
};

function GoogleMap () {
    return (
        <MapWrapper>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCtAGZPwTLmDzr6GC9hdmxE2Oc4_Rbbi6I'}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <MapPin
                    lat={44.14}
                    lng={28.62}
                />
            </GoogleMapReact>
        </MapWrapper>
    )
};

export default GoogleMap;
