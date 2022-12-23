import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setSelectedPicture } from '../../store/slice';

import { IPicture } from '../../types/IPicture';

import './PictureCard.scss';

interface props {
  pictureData: IPicture;
}

export const PictureCard: React.FC<props> = ({ pictureData }) => {
  const { user, urls } = pictureData;
  const dispatch = useAppDispatch();

  const pictureSelectionHandler = () => {
    dispatch(setSelectedPicture(pictureData));
  };

  return (
    <div className="pictureCard">
      <div
        className="pictureCard__wrapper"
        onClick={() => pictureSelectionHandler()}
        onKeyUp={() => pictureSelectionHandler()}
        role="button"
        tabIndex={0}
      >
        <img
          className="pictureCard__wrapper__content"
          src={urls.regular}
          alt="img"
        />
      </div>

      <a
        className="pictureCard__author"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
        rel="noreferrer"
      >
        {user.name}
      </a>
    </div>
  );
};
