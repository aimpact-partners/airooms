import React, { useState, useEffect, useRef } from "react";

export /*bundle*/
function Page(): JSX.Element {
  const [text, setText] = useState("");
  const [messages, setMesssages] = useState([]);
  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (text.length) {
      setText("");
      setMesssages([...messages, text]);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.length) {
      handleSend();
    }
    if (e.key === "Delete" && text.length) {
      setText("");
    }
  };

  return (
    <div id="container">
      <div id="chat">
        {messages.length
          ? messages.map((message) => {
              return <p id="message">{message}</p>;
            })
          : null}
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
