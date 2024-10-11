import FormAddNewMessage from '../../components/FormAddNewMessage/FormAddNewMessage.tsx';
import MessageItem from '../../components/MessageItem/MessageItem.tsx';

const Chat = () => {
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
            <MessageItem message='123' id='1' number = {2} date='23.02' author='Sasha'/>
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
