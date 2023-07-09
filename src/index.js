import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { ExploreProvider } from './Context/explore-context'
import { BookmarkProvider } from "./Context/bookmark-context";
import { AuthProvider } from './Context/auth-context';
import { ToastProvider } from "./Context/toastify-context";
import { FavouriteProvider } from "./Context/favourite-context";
import { UserProvider } from './Context/user-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <ChakraProvider>
          <AuthProvider>
            <ExploreProvider>
              <UserProvider>
                <FavouriteProvider>
                  <BookmarkProvider>
                    <App />
                  </BookmarkProvider>
                </FavouriteProvider>
              </UserProvider>
            </ExploreProvider>
          </AuthProvider>
        </ChakraProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
