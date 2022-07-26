import { useRef } from "react";

import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="mb-2">
          <label
            htmlFor="title"
            className="block font-bold mb-2 dark:text-slate-300"
          >
            Meetup Title
          </label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="txt-input"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="image"
            className="block font-bold mb-2 dark:text-slate-300"
          >
            Meetup Image
          </label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="txt-input"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="address"
            className="block font-bold mb-2 dark:text-slate-300"
          >
            Address
          </label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className="txt-input"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="description"
            className="block font-bold mb-2 dark:text-slate-300"
          >
            Description
          </label>
          <textarea
            id="description"
            required
            className="txt-input h-full"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="flex justify-end mt-3">
          <button className="btn">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
