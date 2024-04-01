import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DefaultLayout from "./layout";
import { ROOT_PATHS } from "./routers/root/index.enum";

const App = () => {
  return (
    <Routes>
      <Route
        path={ROOT_PATHS.ROOT}
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
