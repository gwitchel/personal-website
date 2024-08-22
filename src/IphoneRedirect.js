import React, { useEffect } from 'react';

const IphoneRedirect = () => {
  useEffect(() => {
    const isIphone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIphone) {
      alert('This app is best viewed on a computer. Please visit on a desktop or laptop for the best experience.');
      // Optionally, you could redirect them to another page or URL
      // window.location.href = '/alternate-page';
    }
  }, []);

  return null; // This component doesn't need to render anything
};

export default IphoneRedirect;