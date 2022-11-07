import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import DUMMY_QUOTES from '../constants/DataConst';

export default function QuoteDetail() {
  const param = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path="/quotes/:quoteId" exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  );
}
