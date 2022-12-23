import React from 'react';
import { setSelectedPicture } from '../../store/slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import './SelectedPicture.scss';

export const SelectedPicture = () => {
  const dispatch = useAppDispatch();
  const picture = useAppSelector(state => state.selectedPicture.selectedPicture);

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
          <img className="selectedPicture__content" src={picture.urls.regular} alt="img" />
        </div>
      )
      : null
  );
};
