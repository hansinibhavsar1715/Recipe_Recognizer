import React from 'react';
import { Clock, Flame } from 'lucide-react';

const RecipeCards = ({ ingredients, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-orange" role="status"></div>
        <p className="mt-3 fw-medium text-muted">AI is analyzing your dish...</p>
      </div>
    );
  }

  if (ingredients.length === 0) {
    return (
      <div className="text-center py-5 border rounded-4 bg-white border-dashed">
        <p className="text-muted mb-0">Upload a photo to see recipe suggestions</p>
      </div>
    );
  }

  // Mock data for display (Actual project mein yahan API call hogi)
  const mockRecipes = [
    { title: "Classic Margherita", time: "20m", cal: "250", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400" },
    { title: "Spicy Pasta", time: "15m", cal: "320", img: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=400" }
  ];

  return (
    <div className="row g-3">
      {mockRecipes.map((recipe, i) => (
        <div className="col-md-6" key={i}>
          <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-4 recipe-card">
            <img src={recipe.img} className="card-img-top" alt={recipe.title} style={{ height: '160px', objectFit: 'cover' }} />
            <div className="card-body">
              <h6 className="fw-bold mb-2">{recipe.title}</h6>
              <div className="d-flex justify-content-between text-muted small">
                <span className="d-flex align-items-center gap-1"><Clock size={14}/> {recipe.time}</span>
                <span className="d-flex align-items-center gap-1"><Flame size={14}/> {recipe.cal} kcal</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCards;