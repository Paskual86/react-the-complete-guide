import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import DeferredBlogPostPage, {
  loader as deferredBlogPostsLoader,
} from './pages/DeferredBlogPostPage';
import ErrorPage from './pages/Error';

import NewPostPage, { action as NewPostPageAction } from './pages/NewPost';
import PostDetailPage, { loader as blogPostLoader } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

/* const router = createBrowserRouter([
  {path: '/'}
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route
          index
          element={<DeferredBlogPostPage />}
          loader={deferredBlogPostsLoader}
        />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader}
          errorElement={<p>An Error Occurs</p>}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={NewPostPageAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;