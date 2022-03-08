import React, { useEffect } from 'react'
// import DemoHookRedux from './SearchApp/SearchApp';
import {createBrowserHistory} from 'history'
import SearchApp from './SearchApp/SearchApp';
import NotFound from './SearchApp/NotFount';
export const history = createBrowserHistory();

export default function App() {
  return (
    <SearchApp/>
    // <NotFound/>
  )
}
