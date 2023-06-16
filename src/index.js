import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { SuggestionProvider } from './Context/suggestion-context'
import { ExploreProvider } from './Context/explore-context'
import { BookmarkProvider } from "./Context/bookmark-context";
import { AuthProvider } from './Context/auth-context';
import { ToastProvider } from "./Context/toastify-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <ChakraProvider>
          <BookmarkProvider>
            <ExploreProvider>
              <SuggestionProvider>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </SuggestionProvider>
            </ExploreProvider>
          </BookmarkProvider>
        </ChakraProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
