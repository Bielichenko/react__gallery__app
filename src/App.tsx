/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { createApi } from 'unsplash-js';
import { ListComponent } from './components/ListComponent/ListComponent';
import { SelectedPictureComponent } from './components/SelectedPictureComponent/SelectedPictureComponent';

export const App: React.FC = () => {
  return (
    <div className="app">
      <SelectedPictureComponent />
      <ListComponent />
    </div>
  );
};
