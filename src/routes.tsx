import { Route, Routes as RouterRoutes } from "react-router";
export default function Routes() {
  return (
    <RouterRoutes>
      <Route
        path="/shaderslab"
        Component={() => {
          window.location.href = "/projects/shaderslab/index.html";
          return null;
        }}
      />
    </RouterRoutes>
  );
}
