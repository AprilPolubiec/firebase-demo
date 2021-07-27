import './firebase'
import Auth, { useAuth } from "./hooks/useAuth"

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

import NavBar from './components/NavBar';

function App() {
  return (
    <Auth>
      <RequireAuthentication />
    </Auth>
  );
}

function RequireAuthentication() {
  const auth = useAuth()

  if (!auth) {
    return <div>Loading</div>
  }

  return (
    <>
      <NavBar />
      {auth.user ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </>
  )
}

export default App;
