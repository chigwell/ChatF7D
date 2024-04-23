import React, { useState, useEffect, useRef } from 'react';
import {
    App,
    View,
    Page,
    Navbar,
    Link,
    Messages,
    Message,
    Messagebar,
    NavTitle,
    f7ready,
    f7
} from 'framework7-react';
import axios from 'axios'; // Make sure to install axios or use fetch

function MyApp() {
  const [messageText, setMessageText] = useState('');
  const [messagesData, setMessagesData] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const messagebarRef = useRef(null);

  useEffect(() => {
    f7ready(() => {
      messagebarRef.current = f7.messagebar.create({ el: '.messagebar' });
      fetchInitialMessage();
    });
  }, []);

  const fetchInitialMessage = async () => {
    try {
      const response = await axios.get('http://0.0.0.0:80/messages');
      setMessagesData([{text: response.data.message, type: 'received'}]);
    } catch (error) {
      console.error('Failed to fetch initial message:', error);
    }
  };

  const sendMessage = async () => {
    const newMessages = attachments.map(attachment => ({
      image: attachment,
      type: 'sent'
    }));
    if (messageText.trim()) {
      newMessages.push({
        text: messageText.trim(),
        type: 'sent'
      });
    }
    try {
      const response = await axios.post('http://0.0.0.0:80/send-message', { text: messageText });
      newMessages.push({
        text: response.data.response,
        type: 'received'
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
    if (newMessages.length > 0) {
      setMessagesData([...messagesData, ...newMessages]);
      setMessageText('');
      setAttachments([]);
      messagebarRef.current.clear();
    }
  };

  return (
    <App>
      <View main className="safe-areas" url="/">
        <Page>
          <Navbar title="" />
          <Navbar>
              <NavTitle>My Chat</NavTitle>
          </Navbar>
          <Messagebar
            placeholder="Type a message"
            value={messageText}
            onInput={(e) => setMessageText(e.target.value)}
            attachments={attachments}
          >
            <Link
              slot="inner-end"
              onClick={sendMessage}
            >
                <i className="f7-icons">arrow_up_circle_fill</i>
            </Link>
          </Messagebar>
          <Messages>
            {messagesData.map((message, index) => (
              <Message
                key={index}
                type={message.type}
                text={message.text}
                image={message.image}
              />
            ))}
          </Messages>
        </Page>
      </View>
    </App>
  );
}

export default MyApp;
