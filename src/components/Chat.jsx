import React, { useEffect, useRef, useState } from 'react';
import Messages from './Messages';
import { db, auth } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import SendMessage from './SendMessage';

const style = {
    main: ` flex flex-col  p-[10px] relative mb-10 overflow-y-scroll `,
};

const Chat = () => {
    // const [showElement,setShowElement] = useState(true)
    const [messages, setMessages] = useState([]);
    const user = auth?.currentUser;


    const containerRef = useRef(null);
     
    useEffect(() => {
        if (messages && containerRef.current) {
            const container = containerRef.current;
            container.scrollTop = container.scrollHeight;
        }
    }, []);




    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const t = query(collection(db, 'typingStatus'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];

            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
                
            });
            console.log(messages)
            setMessages(messages);

        });
         
        onSnapshot(t, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (auth?.currentUser?.uid !== doc.id) { console.log(doc.data()) }

            });
        })
          
         
             
     

        

        return () => {

            unsubscribe();
           
        };

    }, []);

    // useEffect(()=>{
    //     // console.log("chnages in messages array");
    //     setTimeout(function() {
    //       setShowElement(false)
    //          }, 3000);
    //        },
    //    [messages])

    const currentMessage = messages[messages.length - 1]

    return (
        <>
            <main className={style.main} ref={containerRef}>
                {    messages &&
                     messages.filter(message=>message.text).map((message) => (
                        <Messages key={message.id} message={message} />
                      ))
                    
                     }
            </main>
            {currentMessage?.isTyping && user.uid !== currentMessage.uid && currentMessage.typedMessage && (
                <div className='fixed bottom-[62px] h-[50px] left-[25px]
                bg-[#e5e5ea] text-black float-left  rounded-lg p-2
                '>
                     <div>
                    <p>someone is typing {currentMessage?.typedMessage}</p>
                    </div>: 

                   
                </div>
            )}

            <SendMessage />
            <span ></span>

        </>
    );
};

export default Chat;