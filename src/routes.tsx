import { Route, Routes as RouterRoutes } from "react-router";
export default function Routes() {
  return (
    <RouterRoutes>
      <Route
        path="/projects/shaderslab"
        Component={() => {
          window.location.href = "/projects/shaderslab/index.html";
          return null;
        }}
      />
      <Route
        path="/projects/shadervegas"
        Component={() => {
          window.location.href = "/projects/shadervegas/index.html";
          return null;
        }}
      />
    </RouterRoutes>
  );
}
