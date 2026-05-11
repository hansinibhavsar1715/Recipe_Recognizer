import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const IngredientList = ({ ingredients, setIngredients }) => {
  if (ingredients.length === 0) return null;

  const removeIng = (index) => {
    const newList = [...ingredients];
    newList.splice(index, 1);
    setIngredients(newList);
  };

  return (
    <div className="card border-0 shadow-sm p-4 rounded-4 animate-fade-in">
      <h5 className="fw-bold mb-3 d-flex align-items-center">
        <CheckCircle size={20} className="text-success me-2" /> Detected Ingredients
      </h5>
      <div className="d-flex flex-wrap gap-2">
        {ingredients.map((ing, idx) => (
          <div key={idx} className="badge bg-white border text-dark p-2 px-3 rounded-pill d-flex align-items-center gap-2 shadow-sm">
            <span>{ing.label}</span>
            <span className="text-muted small">{(ing.score * 100).toFixed(0)}%</span>
            <X size={14} className="cursor-pointer text-danger" onClick={() => removeIng(idx)} />
          </div>
        ))}
      </div>
      <button className="btn btn-orange mt-4 w-100 fw-bold rounded-3">
        Generate Recipes Now
      </button>
    </div>
  );
};

export default IngredientList;