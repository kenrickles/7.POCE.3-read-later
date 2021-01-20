import React, { useState } from 'react';

export default function UnreadLink({
  readLinks, unreadLinks, setUnreadLinks, sendReadLinks,
}) {
  // get the state of the checkboxes of the links and keep it
  const checkBoxesStates = unreadLinks.map(() => false);
  const [markedAsUnread, setMarkedAsUnread] = useState(checkBoxesStates);

  // Sending those that have been unread to the read list
  const sendToReadLinkList = (event, selectedLink, index) => {
    if (event.target.checked) {
      // Add the selected read-link to the unread list
      const readLinksCopy = [...readLinks, selectedLink];
      sendReadLinks(readLinksCopy);

      // Remove the selected unread-link
      const markedUnreadLink = unreadLinks.filter((_, i) => i !== index);
      setUnreadLinks(markedUnreadLink);

      // change the state of the checkbox so it does not show checked
      const markedCheckBoxesCopy = [...markedAsUnread];
      markedCheckBoxesCopy[index] = false;
      setMarkedAsUnread(markedCheckBoxesCopy);
    }
  };
  // jsx elements
  const markedLinkElements = unreadLinks.map((link, i) => (
    <li>
      {link}
      <input value={markedAsUnread[i]} checked={markedAsUnread[i]} type="checkbox" onChange={(event) => { sendToReadLinkList(event, link, i); }} />
    </li>
  ));
  return (
    <div>
      <ul>
        {markedLinkElements}
      </ul>
    </div>
  );
}
