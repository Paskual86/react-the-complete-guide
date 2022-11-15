import Link from 'next/link';
function NewPage() {
  return (
    <>
      <h1>The New Page</h1>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Next JS is a great framework
          </Link>
        </li>
        <li>Other link</li>
      </ul>
    </>
  );
}

export default NewPage;
