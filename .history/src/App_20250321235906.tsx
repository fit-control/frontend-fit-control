import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRoutes from './components/AuthRoutes';
import PaginaTeste from './pages/PaginaTeste';

function App() {

  return (
    <Router>
      <div>
      <Routes>
        <Route index element={<Home />} />
          <Route element={<AuthRoutes />}>
            <Route path="/pagina-teste" element={<PaginaTeste />}/>
            {/* <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<ElementIndexDashboard />} />
              <Route path="predictions">
                <Route index element={<Predictions />} />
                <Route path=":id" element={<PredictionById />} />
              </Route>
              <Route path="products" element={<ProductsPage />} />
              <Route path="product/:id" element={<GetById />} />
              <Route path="client/:id" element={<GetById />} />
          </Route> */}
          </Route>
          <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App
