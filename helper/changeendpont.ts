"use client";
import { useState } from 'react';
export const EndpointComponent = () => {
    let lang: string | null = localStorage.getItem('lang');
    const [endpoint, setEndpoint] = useState(() => {
      if (lang === 'en') {
        return process.env.NEXT_PUBLIC_API_URL;
      } else if (lang === 'ar') {
        return process.env.NEXT_PUBLIC_API_URL_2;
      }
    });
  
    return { endpoint, setEndpoint };
  };