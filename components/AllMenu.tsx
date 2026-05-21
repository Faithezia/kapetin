import CoffeeList from "./CoffeeList";
import NonCoffeeList from "./NonCoffeeList";
import PastryList from "./PastryList";
import SandwichList from "./SandwichList";

const AllMenu = () => {
  return (
    <div className="flex flex-col">
      <CoffeeList />
      <NonCoffeeList />
      <PastryList />
      <SandwichList />
    </div>
  );
};

export default AllMenu;
