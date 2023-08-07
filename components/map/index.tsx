import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
interface Isize{
    w:string;
    h:string;
}
export default function Map({w,h}:MapProps) {
    mapboxgl.accessToken =
        process.env.NEXT_PUBLIC_MAPBOX_PUBLIC || 'DEFAULT_ACCESS_TOKEN'
    const mapContainer = useRef(null)
    const map = useRef<mapboxgl.Map | null>(null)
    const marker = useRef<mapboxgl.Marker | null>(null)
    const [lng, setLng] = useState(90.398225)
    const [lat, setLat] = useState(23.765281)
    const [zoom, setZoom] = useState(15)
    const cssStyle= {width: `${w}px`,height: `${h}px`};
    useEffect(() => {
        if (map.current === null) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current || 'default',
                style: process.env.NEXT_PUBLIC_MAPBOX_STYLE || 'default',
                center: [lng, lat] || [90.398225, 23.765281],
                zoom: zoom || 15,
            })
            marker.current = new mapboxgl.Marker({
                color: 'red',
                draggable: true,
            })
                .setLngLat([lng, lat])
                .addTo(map.current)
        }
    }, [])

    return <div ref={mapContainer} style={cssStyle} />
}
export interface MapProps extends Isize {};