import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  // @ts-ignore
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Header />
      {isLoggedIn ? <Counter /> : <Auth />}
    </Fragment>
  );
}

export default App;
