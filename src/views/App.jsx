import { HashRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "../layout/LayoutDefault";
import { Component, Suspense } from "react";
import LoadingApp from "../components/LoadingApp"
import '../scss/style.scss'

// Layout
// const LayoutDefault = React.lazy(() => import('../layout/LayoutDefault'))

class App extends Component {
  render() {
    console.log("APP");

    return (
      <HashRouter>
        <Suspense fallback={<LoadingApp />}>
          <Routes>
            <Route path="*" element={<LayoutDefault />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
