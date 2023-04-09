import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';

import './styles.scss';

const element = document.getElementById('root');

if (element) {
  const root = createRoot(element);
  root.render(<App />);
}
