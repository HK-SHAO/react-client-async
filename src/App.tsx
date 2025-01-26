import '#src/app.css';
import '#styles/toastify.css';
import '#styles/button.css';

import { ToastContainer } from 'react-toastify';
import Main from '#components/Main';

const App = () => (
  <>
    <ToastContainer />
    <Main />
  </>
);

export default App;
