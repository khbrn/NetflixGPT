import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browse from './components/Browse';
import Body from './components/Body';

const router = createBrowserRouter([
    { path: '/', element: <Body /> }, 
    { path: '/browse', element: <Browse /> },
])

export default function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>  
  )
}
