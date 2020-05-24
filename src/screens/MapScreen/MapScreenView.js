import React, { useState, useCallback } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {convertCoordinateArrayToObj} from "./utils";


const MapScreenView = ({ setCoordinateToForm, initialCoordinate }) => {
    const [coordinatePoint, setCoordinatePoint] = useState(initialCoordinate);

    const onPress = ({ geometry }) => {
        if (geometry && geometry.coordinates) {
            setCoordinatePoint(geometry.coordinates);
            setCoordinateToForm(convertCoordinateArrayToObj(geometry.coordinates));
        }
    };

    const handleSelectPoint = useCallback(() => {
        setCoordinatePoint(null);
        setCoordinateToForm(null);
    }, []);

    return(
        <MapboxGL.MapView
            style={{ flex: 1,}}
            onPress={onPress}
            compassEnabled
        >
            <MapboxGL.Camera
                followZoomLevel={12}
                followUserLocation
            />
            {coordinatePoint ?
                <MapboxGL.PointAnnotation
                    id="MapScreen/PointAnnotation"
                    coordinate={coordinatePoint}
                    onSelected={handleSelectPoint}
                />
                : null
            }
            <MapboxGL.UserLocation />
        </MapboxGL.MapView>
    );
};

export default MapScreenView;
