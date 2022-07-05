import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore'

export default function Making_decisions() {

      const messageRef = useRef();
      const ref = collection(firestore, "messages");


      const sendMessage = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);


        let data = {
          message:messageRef.current.value,
        }

        try {
          addDoc(ref, data);
        }catch (e) {
          console.log(e);
        }

      };

  return (
    <div>     
            <div className="main-form">
                            <a>Wellcome To Shisu's Station...<br/>Hey There I Am Subhojyoti<br/>This Is My Server<br/>Write Down Your Message<br/>I Am In The Dark Side Of Your Gadget<br/>Stay Tuned</a>
  
        <form onSubmit={sendMessage()}>
            <input placeholder="Enter message" ref={messageRef} type="text" />
                <button type="submit" className="btn btn-outline-dark ms-2 px-4 rounded-pill bg-dark text-white-50">Send</button>
        </form>
        
            </div>

        
            <div className="main-list" id="messages" >
                <div className="list-item">
                    <p align="center">All Messages</p>        
                </div>
                
            </div>
        
 
    </div>
  )
}

