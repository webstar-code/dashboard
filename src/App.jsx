import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import 'react-material-symbols/rounded'; // Place in your root app file. There are also `sharp` and `outlined` variants.

export const PageWithHeader = ({children}) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense"/>
        </PageWithHeader>
      }
    >
        <div className="h-full">
          <Router/>
        </div>
    </Suspense>
  </BrowserRouter>
);
