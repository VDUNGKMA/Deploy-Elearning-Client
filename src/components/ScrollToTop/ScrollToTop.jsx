import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ScrollToTop() {
     const { pathname } = useLocation();
     useEffect(() => {
          window && window.scrollTo(0, 0);
     }, [pathname])
     return null
}

