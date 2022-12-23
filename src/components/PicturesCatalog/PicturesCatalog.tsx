/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { IPicture } from '../../types/IPicture';
import { PictureCard } from '../PictureCard/PictureCard';

import './PicturesCatalog.scss';

export const PicturesCatalog = () => {
  const [pictures, setPictures] = useState<any>([]);

  const api = createApi({
    accessKey: 'CXSxgho7UrQo1qLwGLXpY256CmINGXQgvO1zWuLL6Xo',
  });

  useEffect(() => {
    api.search.getPhotos({ query: 'parrots', page: 1, perPage: 30 })
      .then(res => {
        if (res.response) {
          console.log(res.response.results.length);
          setPictures(res.response.results);
        }
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  return (
    <div className="picturesCatalog">
      {pictures.map((pictureData: IPicture) => {
        return (
          <React.Fragment key={pictureData.id}>
            <PictureCard pictureData={pictureData} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
