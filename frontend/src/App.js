import React, { useState } from 'react';
import './App.css';
import Uploader from './components/Uploader';
import IngredientList from './components/IngredientList';
import RecipeCards from './components/RecipeCards';
import { Utensils } from 'lucide-react';

function App() {
  const [ingredients, setIngredients] = useState([]); // AI detected list
  const [loading, setLoading] = useState(false); // Processing state

  return (
    <div className="app-container">
      {/* Navbar Section */}
      <nav className="custom-navbar shadow-sm">
        <div className="container d-flex align-items-center">
          <Utensils className="me-2 text-orange" />
          <h2 className="navbar-logo">RecipeLens <span className="ai-tag">AI</span></h2>
        </div>
      </nav>

      <div className="container py-4">
        <div className="row g-4">
          {/* Left Column: Input and Intelligence */}
          <div className="col-lg-5">
            <div className="sticky-top" style={{ top: '20px' }}>
              <Uploader setIngredients={setIngredients} setLoading={setLoading} />
              <IngredientList ingredients={ingredients} setIngredients={setIngredients} />
            </div>
          </div>

          {/* Right Column: Dynamic Results */}
          <div className="col-lg-7">
            <div className="result-section">
              <h4 className="section-title">Cooking Suggestions</h4>
              <RecipeCards ingredients={ingredients} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;