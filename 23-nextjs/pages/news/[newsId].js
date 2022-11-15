import { useRouter } from 'next/router';

function Detail() {
  const router = useRouter();
  const Id = router.query.newsId;
  console.log(Id);
  return <h1>Detail Page</h1>;
}

export default Detail;
