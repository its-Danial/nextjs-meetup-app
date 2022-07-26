import { Fragment } from "react";
import Image from "next/image";

const MeetUpDetails = (props) => {
  return (
    <section className="text-center">
      <img src={props.image} alt={props.title} className="w-full rounded" />
      <h1 className="mt-2">{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetUpDetails;
