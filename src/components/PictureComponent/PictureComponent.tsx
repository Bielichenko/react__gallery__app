/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hook';
import { setSelectedPicture } from '../../store/slice';

import { IPicture } from '../../types/IPicture';

import './PictureComponent.scss';

interface props {
  pictureData: IPicture;
}

export const PictureComponent: React.FC<props> = ({ pictureData }) => {
  const { user, urls } = pictureData;
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(urls, 'urls');
  });

  const pictureSelectionHandler = () => {
    console.log(pictureData);
    dispatch(setSelectedPicture(pictureData));
  };

  return (
    <div
      className="pictureCard"
      onClick={() => pictureSelectionHandler()}
      onKeyUp={() => pictureSelectionHandler()}
      role="button"
      tabIndex={0}
    >
      <img className="pictureCard__picture" src={urls.thumb} alt="img" />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
        rel="noreferrer"
      >
        {user.name}
      </a>
    </div>
  );
};
