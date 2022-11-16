import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="First meetup foto"
        title="A First Meetup"
        address="Some Streets 5, Some City"
        description="The meetup description"
      />
    </>
  );
}

export default MeetupDetails;
