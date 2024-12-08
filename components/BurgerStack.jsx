// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const { stacks, removeFromBurger } = props;
  return (
    <ul>
      {stacks.length === 0
        ? "No Ingredients"
        : stacks.map((stack) => (
            <li style={{ backgroundColor: stack.color }} key={stack.name}>
              {stack.name}
              <button onClick={() => removeFromBurger(stack)}>X</button>
            </li>
          ))}
    </ul>
  );
};

export default BurgerStack;
