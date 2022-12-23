import React from 'react';
import cn from 'classnames';
import { PicturesCatalog } from './components/PicturesCatalog/PicturesCatalog';
import { SelectedPicture } from './components/SelectedPicture/SelectedPicture';
import { useAppSelector } from './store/hooks';

import './App.scss';

export const App: React.FC = () => {
  const picture = useAppSelector(state => state.selectedPicture.selectedPicture);

  return (
    <div className={cn('app', { 'app--displayPicture': picture })}>
      <PicturesCatalog />
      <SelectedPicture />
    </div>
  );
};
