import React from 'react';
import { Metadata } from 'next';
import HomeTenMain from '@/pages/homes/home-10';

export const metadata: Metadata = {
  title: "Lagos Labs - Home Ten Page",
};

const HomePageTen = () => {
  return (
    <HomeTenMain/>
  );
};

export default HomePageTen;