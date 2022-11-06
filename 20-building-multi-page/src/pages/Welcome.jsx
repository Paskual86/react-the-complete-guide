import React from 'react';
import { Route } from 'react-router-dom';

export default function Welcome() {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, New User</p>
      </Route>
    </section>
  );
}
