import React from 'react';
import { Loader } from '@mantine/core';

export const LoadingPage = () => {
  return (
    <div className="div_loading_page">
      <Loader />
      <p>Loading...</p>
    </div>
  );
};
