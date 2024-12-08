// src/components/IngredientList.jsx
const IngredientList = (props) => {
  const { availableIngredients, addToBurger } = props;
  return (
    <ul>
      {availableIngredients.map((availableIngredient) => (
        <li
          style={{ backgroundColor: availableIngredient.color }}
          key={availableIngredient.name}
        >
          {availableIngredient.name}
          <button onClick={() => addToBurger(availableIngredient)}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
