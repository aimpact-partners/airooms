import React, { useState, useEffect, useRef } from "react";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { IMessages } from "../store"; /* 
import ReactMarkdown from "react-markdown"; */

export /*bundle*/
function Chat({ store }): JSX.Element {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<IMessages[]>(store.messages);
  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useBinder([store], () => {
    setMessages([...store.messages]);
  });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    setText("");
    await store.query(text);
  };

  const handleKeyDown = (e) => {
    if (text.length) {
      e.key === "Enter" && handleSend();
      e.key === "Delete" && setText("");
    }
  };

  return (
    <div id="container">
      <div id="chat">
        {messages.map((message, i) => {
          const { content, role } = message;
          const key = `message-${i}`;
          return role === "user" ? (
            <p key={key} className="message user">{`${role.toUpperCase()}: ${content}`}</p>
          ) : (
            <p key={key} className="message system">{`${role.toUpperCase()}: ${content}`}</p>
            /*  <ReactMarkdown className="message system" children={content} key={key} /> */
          );
        })}
        <div ref={messagesEnd} />
      </div>
      <div id="send">
        <input
          autoFocus
          placeholder={`Write here`}
          title="message"
          id="input"
          type="text"
          value={text}
          onKeyDown={handleKeyDown}
          onChange={({ target }) => {
            setText(target.value);
          }}
        />
        {/* send button */}
        {/*   <img
          id="button"
          src="https://cdn-icons-png.flaticon.com/512/660/660619.png"
          height={45}
          width={45}
          onClick={handleSend}
        /> */}
      </div>
    </div>
  );
}
