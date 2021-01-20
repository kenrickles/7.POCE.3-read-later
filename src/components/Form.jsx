import React, { useState } from 'react';

const validUrl = require('valid-url');

export default function Form({ unreadLinks, setUnreadLinks }) {
  const [userInput, setUserInput] = useState('');
  const handleNewUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const sendEvent = () => {
    if (validUrl.isUri(userInput)) {
      const linkCopy = [...unreadLinks, userInput];
      setUnreadLinks(linkCopy);
    } else {
      setUserInput('not-a-valid-url');
    }
  };
  return (
    <div>
      <input value={userInput} onChange={handleNewUserInput} />
      <button type="submit" onClick={sendEvent}> Submit</button>
    </div>
  );
}
