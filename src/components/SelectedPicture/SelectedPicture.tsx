/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { setSelectedPicture } from '../../store/slice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

import './SelectedPicture.scss';

export const SelectedPicture = () => {
  const dispatch = useAppDispatch();
  const picture = useAppSelector((state: any) => state.selectedPicture.selectedPicture);

  const closeButtonHandler = () => {
    dispatch(setSelectedPicture(null));
  };

  return (
    picture
      ? (
        <div className="selectedPicture">
          <div
            className="selectedPicture__closeButton"
            onClick={() => closeButtonHandler()}
            onKeyDown={() => closeButtonHandler()}
            tabIndex={0}
            role="button"
          >
          </div>
          {/* <button className="selectedPicture__closeButton" type="button">X</button> */}
          <img className="selectedPicture__picture" src={picture.urls.regular} alt="img" />
          {/* <div
            className="closeButton"
            onClick={() => closeButtonHandler()}
            onKeyDown={() => closeButtonHandler()}
            tabIndex={0}
            role="button"
          >
          </div> */}
        </div>
      )
      : null
  );
};
