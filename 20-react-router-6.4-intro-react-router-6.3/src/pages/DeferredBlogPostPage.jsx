import React, { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import Posts from '../components/Posts';
import { getSlowPosts } from '../util/api';

export default function DeferredBlogPostPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading ...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<>Error loading data</>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export async function loader() {
  return defer({ posts: getSlowPosts() });
}
