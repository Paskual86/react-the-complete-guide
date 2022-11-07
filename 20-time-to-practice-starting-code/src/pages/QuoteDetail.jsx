import React, { useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import DUMMY_QUOTES from '../constants/DataConst';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

export default function QuoteDetail() {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const param = useParams();
  const match = useRouteMatch();
  useEffect(() => {
    sendRequest(param.quoteId);
  }, [sendRequest, param]);

  console.log(match);
  if (status === 'pending') {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p className="centered"> {error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
