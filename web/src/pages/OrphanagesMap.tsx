import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/pages/OrphanagesMap.css';
import logoImg from '../images/logo.svg';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


function OrphanangesMap() {

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoImg} alt="Happy" />
                    <h2> Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong> Rio do sul</strong>
                    <span> Santa Catarina</span>
                </footer>
            </aside>

            <Map
                center={[-25.5133257, -49.1307084]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_KEY}`}
                />

                <Marker
                    position={[-25.5133257, -49.1307084]}
                    icon={mapIcon} >
                    <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                        Lar das meninas
                        <Link to="/" >
                            <FiArrowRight size={32} color="#fff" />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanangesMap;