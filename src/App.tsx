import React, { useEffect, Fragment } from 'react';
import Header from './components/Header/Header';
import Search from './container/Search/Search';
declare const ts: any;
function App() {
  useEffect(() => { }, [])
  return (
    <Fragment>
      <Header />
      <main className="main-container">
        <section className="section-container">
          <Search />
        </section>
      </main>
    </Fragment>
  );
}

export default App;
