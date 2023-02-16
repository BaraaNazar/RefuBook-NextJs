"use client"
import React, { useEffect, useRef, useState } from 'react';
import Message from './message';

function Messages() {
  
  const [messages, setMessages] = useState([]);



  return (
    <>       
     {/* {messages &&
          messages
            .map((message) => {
              return (
                // <Message
                //   uid={message.uid}
                //   profilePicture={message.photoURL}
                //   key={message.id}
                //   message={message}
                //   user={user}
                // />
              );
            })}
            <div ref={lastRef} /> */}
    </>

  );
}
export default Messages;
