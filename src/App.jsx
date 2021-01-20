import React, { useState } from 'react';
import Form from './components/Form.jsx';
import ReadLink from './components/ReadLink.jsx';
import UnreadLink from './components/UnreadLink.jsx';

export default function App() {
  console.log('app has started');
  const [unreadLinks, setUnreadLinks] = useState([]);
  const [readLinks, setReadLinks] = useState([]);
  return (
    <div>
      <Form unreadLinks={unreadLinks} setUnreadLinks={setUnreadLinks} />
      <UnreadLink
        readLinks={readLinks}
        sendReadLinks={setReadLinks}
        unreadLinks={unreadLinks}
        setUnreadLinks={setUnreadLinks}
      />
      <h2> Read Links</h2>
      <ReadLink
        readLinks={readLinks}
        setReadLinks={setReadLinks}
        unreadLinks={unreadLinks}
        sendUnreadLinks={setUnreadLinks}
      />
    </div>
  );
}
