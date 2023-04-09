import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axios from 'axios';
import { PickPointType, ResponseType } from './contacts.types';
import { PickPoint } from './pick-point';

import styles from './pick-points.module.scss';

async function getContacts(url: string): Promise<PickPointType[]> {
  const res = await axios.get<ResponseType>(url);

  return res.data.pickPoints;
}

export function PickPoints() {
  const [pickPoints, setPickPoints] = useState<PickPointType[]>([]);
  const [coordinates, setCoordinates] = useState<number[]>([55.76, 37.64]);

  function handleClickAddress(longitude: number, latitude: number) {
    setCoordinates([longitude, latitude]);
  }

  useEffect(() => {
    getContacts('https://express-shina.ru/vacancy/geo-state').then((data) => setPickPoints(data));
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.pickPointsWrapper}>
        {pickPoints.map((pickPoint, pickPointIndex) => (
          <PickPoint key={pickPointIndex} pickpoint={pickPoint} onClickAddress={handleClickAddress} />
        ))}
      </div>

      <YMaps>
        <div style={{ width: '50%' }}>
          <Map width={'100%'} height={'100%'} state={{ center: coordinates, zoom: 18 }}>
            <Placemark geometry={coordinates} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
}
