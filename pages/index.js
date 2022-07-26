import MeetupList from "../components/meetups/MeetupList";

const dummy_data = [
  {
    id: "m1",
    image: "https://t3.ftcdn.net/jpg/02/73/66/48/360_F_273664892_U8dmBDEYUpaM3GstFWbSmPWKCPGh2h8M.jpg",
    title: "first",
    address: "address",
  },
  {
    id: "m2",
    image: "https://t3.ftcdn.net/jpg/02/73/66/48/360_F_273664892_U8dmBDEYUpaM3GstFWbSmPWKCPGh2h8M.jpg",
    title: "first",
    address: "address",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: dummy_data,
    },
  };
};

export default HomePage;
