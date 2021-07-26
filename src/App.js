import './firebase'
import Auth, { useAuth } from "./hooks/useAuth"

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

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
      {auth.user ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </>
  )
}

export default App;
