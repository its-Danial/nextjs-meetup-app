import Card from "../ui/Card";
import Link from "next/link";

function MeetupItem(props) {
  return (
    <li className="my-4 mx-0 mb-7">
      <Card>
        <div className="w-full h-80 overflow-hidden">
          <img
            className="w-full object-cover"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="text-center p-4">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="flex mb-3 items-center justify-center p-2">
          <Link href={"/" + props.id}>
            <button className="btn">Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
