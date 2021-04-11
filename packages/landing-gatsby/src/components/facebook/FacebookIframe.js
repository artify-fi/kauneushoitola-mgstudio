import React from 'react';

const FacebookIframe = () => {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Flocalhost%3A8000%2F&width=138&layout=button&action=recommend&size=large&share=true&height=65&appId"
        width="450"
        height="65"
        style={{ border: 'none', overFlow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        language="fi_FI"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookIframe;
