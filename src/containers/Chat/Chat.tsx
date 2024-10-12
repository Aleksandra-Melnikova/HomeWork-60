import FormAddNewMessage from '../../components/FormAddNewMessage/FormAddNewMessage.tsx';
import MessageItem from '../../components/MessageItem/MessageItem.tsx';
import { useState } from 'react';
import { useEffect } from 'react';
interface IMessage {
  _id: string;
  number: number;
  author: string;
  datetime: string;
  message: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]
  );
  const url = 'http://146.185.154.90:8000/messages';

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(url);
      if(response.ok){
        let messages: IMessage[] = await response.json() as IMessage[];
        messages = messages.map(post=>{
          return {_id: post._id, datetime: post.datetime, author: post.author, number: 1, message: post.message}
        });
        setMessages(messages);
      }

    };

    fetchData().catch(e => console.error(e));
    // window.scrollTo(0, document.body.scrollHeight);

  },[])




  return (
    <div>
      <div id="root">
        <header className="header container row ">
          <h1 className="p-4 fs-2 text-center ">Chat</h1>
        </header>
        <div
          id="container"
          style={{"position": "relative"}}
          className="container row justify-content-center"
        >
          <div id="messagesAll">
            {messages.map(message=> (
              <MessageItem key={message._id} message={message.message} _id={message._id} number = {2} datetime={String(new Date(message.datetime))} author={message.author}/>
            ))}
          </div>
          <div id="formBlock" className="mt-3 mb-2 pt-1">
            <FormAddNewMessage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
