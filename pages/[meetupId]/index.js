import React from "react";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";

const MeetupDetailsPage = ({ meetupData }) => {
  return (
    <MeetUpDetails
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://t3.ftcdn.net/jpg/02/73/66/48/360_F_273664892_U8dmBDEYUpaM3GstFWbSmPWKCPGh2h8M.jpg",
        title: "first",
        address: "first address",
        description: "first description",
      },
    },
  };
};

export default MeetupDetailsPage;
