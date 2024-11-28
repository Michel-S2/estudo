'use client'

import React, { useEffect, useState } from 'react';


export const TextTyper = (props: any) => {
  const [text, setText] = useState('');
  const {fullText} = props;

  useEffect(() => {
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => {
      clearInterval(typingTimer);
    };
  }, []);

  return (
    <div>
      <p>
        <i>{text}</i>
      </p>
    </div>
  );
};
