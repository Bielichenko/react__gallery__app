/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import './App.scss';
import { createApi } from 'unsplash-js';
import { PicturesCatalog } from './components/PicturesCatalog/PicturesCatalog';
import { SelectedPicture } from './components/SelectedPicture/SelectedPicture';
import { useAppSelector } from './store/hook';

export const App: React.FC = () => {
  const picture = useAppSelector((state: any) => state.selectedPicture.selectedPicture);

  return (
    <div className={cn('app', { 'app--displayPicture': picture })}>
      <PicturesCatalog />
      <SelectedPicture />
    </div>
  );
};
