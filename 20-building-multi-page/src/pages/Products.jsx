import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/product-detail/p1">A Book</Link>
        </li>
        <li>
          <Link to="/product-detail/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/product-detail/p3">A Bike</Link>
        </li>
      </ul>
    </section>
  );
}
