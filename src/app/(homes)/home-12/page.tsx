import React from 'react';
import { Metadata } from 'next'; 
import HomeTwelveMain from '@/pages/homes/home-12';

export const metadata: Metadata = {
  title: "Lagos Labs - Home Twelve Page",
};

const HomeTwelvePage = () => {
  return (
    <HomeTwelveMain/>
  );
};

export default HomeTwelvePage;