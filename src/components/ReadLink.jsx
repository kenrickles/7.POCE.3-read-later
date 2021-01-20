import React, { useState } from 'react';

export default function ReadLink({
  readLinks, unreadLinks, setReadLinks, sendUnreadLinks,
}) {
  // get the state of the checkboxes of the links and keep it
  const checkBoxesStates = readLinks.map(() => false);
  const [markedAsRead, setMarkedAsRead] = useState(checkBoxesStates);

  // Sending those that have been read to the unread list
  const sendToUnreadLinkList = (event, selectedLink, index) => {
    if (event.target.checked) {
      // Add the selected read-link to the unread list
      const unreadLinksCopy = [...unreadLinks, selectedLink];
      sendUnreadLinks(unreadLinksCopy);

      // remove the links that has been selected
      const markedReadLinks = readLinks.filter((_, i) => i !== index);
      setReadLinks(markedReadLinks);

      // change the state of the checkbox so it does not show checked
      const markedCheckboxesCopy = [...markedAsRead];
      markedCheckboxesCopy[index] = false;
      setMarkedAsRead(markedCheckboxesCopy);
    }
  };
  // jsx elements
  const markedLinkElements = readLinks.map((link, i) => (
    <li>
      {link}
      <input value={markedAsRead[i]} checked={markedAsRead[i]} type="checkbox" onChange={(event) => { sendToUnreadLinkList(event, link, i); }} />
    </li>
  ));

  return (
    <div>
      {markedLinkElements}
    </div>
  );
}
