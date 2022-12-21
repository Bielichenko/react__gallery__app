/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hook';

import './SelectedPictureComponent.scss';

export const SelectedPictureComponent = () => {
  const picture = useAppSelector((state: any) => state.selectedPicture.selectedPicture);

  const test = () => {
    console.log(picture);
  };

  return (
    <div className="selectedPicture">
      <button type="button" onClick={() => test()}>button</button>
    </div>
  );
};
