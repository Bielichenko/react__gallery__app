/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { IPicture } from '../../types/IPicture';
import { PictureComponent } from '../PictureComponent/PictureComponent';

import './ListComponent.scss';

export const ListComponent = () => {
  const [pictures, setPictures] = useState<any>([]);

  const api = createApi({
    accessKey: 'CXSxgho7UrQo1qLwGLXpY256CmINGXQgvO1zWuLL6Xo',
  });

  useEffect(() => {
    api.search.getPhotos({ query: 'parrots', page: 2, perPage: 20 })
      .then(res => {
        if (res.response) {
          setPictures(res.response.results);
        }
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  useEffect(() => {
    console.log(pictures);
  });

  return (
    <div className="picturesList">
      {pictures.map((pictureData: IPicture) => {
        return (
          <React.Fragment key={pictureData.id}>
            <PictureComponent pictureData={pictureData} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
