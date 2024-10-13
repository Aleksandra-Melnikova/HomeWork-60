import React, { useEffect, useState } from "react";
import { IInputMessage } from "../../types";
// interface Props {
//   onAddFilm: (film: IFilm) => void;
// }

const FormAddNewMessage = () => {
  const url = "http://146.185.154.90:8000/messages";
  const [inputMessage, setInputMessage] = useState<IInputMessage>({
    name: "",
    message: "",
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  const changeInputMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputMessage((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      inputMessage.name.trim().length > 0 &&
      inputMessage.message.trim().length > 0
    ) {
      setInputMessage({
        ...inputMessage,
        name: inputMessage.name,
        message: inputMessage.message,
      });
      setButtonClicked((prevState) => !prevState);
    } else {
      alert("Поле не должно быть пустым");
    }
  };
  useEffect(() => {
    const postNewMessage = async () => {
      const data = new URLSearchParams();
      if (
        inputMessage.name.trim().length > 0 &&
        inputMessage.message.trim().length > 0
      ) {
        data.set("message", inputMessage.message);
        data.set("author", inputMessage.name);

        await fetch(url, {
          method: "post",
          body: data,
        });
      }
    };
    postNewMessage().catch((e) => console.error(e));
    setInputMessage({
      name: "",
      message: "",
    });
  }, [buttonClicked]);

  return (
    <div>
      <form
        onSubmit={submitForm}
        className="border border-2 rounded row g-3 ps-5 bg-light justify-content-center"
      >
        <div className="mb-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            value={inputMessage.name}
            onChange={changeInputMessage}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your message:
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            value={inputMessage.message}
            onChange={changeInputMessage}
          ></textarea>
        </div>
        <button className="btn btn-primary mb-2 col-2 " type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormAddNewMessage;
