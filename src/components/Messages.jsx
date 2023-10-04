import React, { useState, useEffect ,useRef} from 'react';
import { auth } from '../firebase';

const style = {
  messages: `flex items-center shadow-xl m-4 py-2 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-black text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full p-4`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full p-4`,
  typing: `text-gray-400 text-xs float-left ml-2 mt-1`,
  message: `px-4 py-2 rounded-lg m-2 shadow-md`,
};

const Messages = ({ message, isTyping }) => {
  const currentUser = auth.currentUser;
  
  
 
  const messageClass =
    currentUser && message.uid === currentUser.uid
      ? style.sent  
      : style.received;  

  return (
    <div >
      
      <div className={`${style.messages} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
       
    </div>
  );
};

export default Messages;

 