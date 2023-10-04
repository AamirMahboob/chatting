///////////////////////////beforeNew/////////
import React, { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

const style = {
  form: `flex w-full max-w-[728px] text-xl h-[60px] fixed bottom-0 shadow-xl`,
  input: `w-full p-4 bg-gray-500 text-xl h-[60px] text-white outline-none border-none`,
  button: `bg-green-500 w-[20%]`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');
   

  const handleInputChange = (e) => {
    setInput(e.target.value);

    const user = auth.currentUser;
   
      const { uid, displayName } = user;
 
        addDoc(collection(db, 'messages'), {
          isTyping: true,
          // text: e.target.value,
          typedMessage: e.target.value,
          name: displayName,
          uid,
          timestamp: serverTimestamp(),
        });
      } 
 
     

  const submitMessage = async (e) => {
    

    const user = auth.currentUser;
    
      const { uid, displayName } = user;

       
        await addDoc(collection(db, 'messages'), {
          text: input,
          isTyping: false,
          name: displayName,
          uid,
          timestamp: serverTimestamp(),
        });
  
      
     
    
    setInput('');
 
  };

  return (
    <form className={style.form} onSubmit={submitMessage}>
      <input
        placeholder='Message'
        className={style.input}
        value={input}
        onChange={handleInputChange}
      />
      <button className={style.button} type='submit'>
        Send
      </button>
       
    </form>
  );
};

export default SendMessage;
