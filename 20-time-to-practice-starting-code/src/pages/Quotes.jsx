import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
import DUMMY_QUOTES from '../constants/DataConst';

export default function Quotes() {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
}
