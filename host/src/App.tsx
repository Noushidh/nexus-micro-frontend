import React, { Suspense } from "react";

const Login = React.lazy(() => import("auth/Login"));

function App() {
  return (
    <div>
      <h1>Welcome to Nexus</h1>
      <Suspense fallback={<p>Loading Auth...</p>}>
        <Login></Login>
      </Suspense>
    </div>
  );
}

export default App;
