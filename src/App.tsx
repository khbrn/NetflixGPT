import { Provider } from 'react-redux';
import appStore from './redux/appStore';

import Body from './components/Body';

export default function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>  
  )
}
