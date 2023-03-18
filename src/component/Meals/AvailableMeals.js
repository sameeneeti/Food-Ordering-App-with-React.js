import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItems from "./Mealtems/Mealtems";


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const MealsItem = DUMMY_MEALS.map((meals) => <MealItems 
  key={meals.id}
  id={meals.id}
  name={meals.name}
  description={meals.description}
  price={meals.price}
  />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsItem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


