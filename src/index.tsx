import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { Provider } from 'react-redux';

import { App } from './screens/app';

import './index.css';
import { store } from './store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://d1b60d6a5a6c4990a2e395670a4daa21@o4504077600358400.ingest.sentry.io/4504077605142529',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
        <App />
      </Sentry.ErrorBoundary>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
