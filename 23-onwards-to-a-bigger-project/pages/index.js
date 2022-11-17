import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'First place',
    image:
      'https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    address: 'Address 123',
  },
  {
    id: 'm2',
    title: 'Second place',
    image:
      'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: 'Address 123',
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}
export default HomePage;
