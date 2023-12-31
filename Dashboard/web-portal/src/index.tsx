/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import 'assets/animations.css'

// Material Dashboard 2 PRO React TS Context Provider
import { MaterialUIControllerProvider } from "context";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { GlobalStyles, css } from "@mui/material";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);

root.render(
<QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
  </QueryClientProvider>,
);