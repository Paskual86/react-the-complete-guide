import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes></Quotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
