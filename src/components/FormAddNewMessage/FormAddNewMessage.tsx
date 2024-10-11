

const FormAddNewMessage = () => {
  return (
    <div>
      <form className="border border-2 rounded row g-3 ps-5 bg-light justify-content-center">
        <div className="mb-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your message:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            // rows="3"
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
