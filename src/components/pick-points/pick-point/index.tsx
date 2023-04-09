import React from 'react';
import { PickPointType } from '../pick-points.types';

import styles from './pick-point.module.scss';

interface PickPointProps {
  pickpoint: PickPointType;
  onClickAddress: (longitude: number, latitude: number) => void;
}

export function PickPoint({ pickpoint: { address, budgets, latitude, longitude }, onClickAddress }: PickPointProps) {
  return (
    <div className={styles.root} onClick={() => onClickAddress(latitude, longitude)}>
      <span className={styles.address}>{address}</span>
      <div className={styles.budgets}>
        {budgets.map((budget, budgetIndex) => (
          <div key={budgetIndex} className={styles.budget}>
            {budget}
          </div>
        ))}
      </div>
    </div>
  );
}
