import { ToastContainer } from 'react-toastify';
import Main from '#components/Main';

import '#src/app.css';
import '#styles/toastify.css';
import '#styles/button.css';

const App = () => (
  <>
    <ToastContainer />
    <Main />
  </>
);

export default App;
