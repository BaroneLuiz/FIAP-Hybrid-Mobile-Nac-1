import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <h1>Teste home_page</h1>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
