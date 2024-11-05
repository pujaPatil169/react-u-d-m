import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Toggler from "./Toggler";
import Counter from "./Counter";
import DumboStateDemo from "./DumboStateDemo";
import CounterStateDemo from "./CounterStateDemo";
import ScoreKepper from "./ScoreKepper";
import EmojiClicker from "./EmojiClicker";
import UserNameForm from "./UserNameForm";
import BetterForm from "./BetterForm";
import ShoppingListComponent from "./ShoppingListComponent";
import QuoteFetcher from "./QuoteFetcher";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch";
import Button from "@mui/material/Button";
import ButtonAppBar from "./AppBarMUI";
// import ThemeSignInPage from "./ThemeSignInPage";
import FormDemo from "./FormDemo";
import MusicPlayerSlider from "./MusicPlayerSlider";
import TodoList from "./TodoList";
import ColorBoxBlock from "./ColorBoxBlock";
import ScoreKeeper1 from "./ScoreKeeper1";
import Box from "./Box";
import BoxGrid from "./BoxGrid";
const data = [
  { id: 1, item: "eggs", qty: 2, isPurchased: false },
  { id: 2, item: "milk", qty: 2, isPurchased: true },
  { id: 3, item: "ramen", qty: 2, isPurchased: false },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A6",
  "#FFBD33",
  "#8D33FF",
  "#33FFF6",
  "#FFC300",
  "#DAF7A6",
  "#900C3F",
  "#581845",
  "#1ABC9C",
];

function App() {
  return (
    <div>
      <BoxGrid num={6} />
      {/* <Box /> */}
      {/* <ScoreKeeper1 numPlayers={4} target={4} /> */}
      {/* <ColorBoxBlock /> */}
      {/* <TodoList /> */}
      {/* <ButtonAppBar /> */}
      {/* <MusicPlayerSlider /> */}
      {/* <FormDemo /> */}
      {/* <ThemeSignInPage /> */}

      {/* <Button variant="text">Text</Button> */}
      {/* <Button variant="contained">Contained</Button> */}
      {/* <Button variant="outlined">Outlined</Button> */}
      {/* <ProfileViewerWithSearch /> */}
      {/* <QuoteFetcher /> */}
      {/* <ShoppingListComponent /> */}
      {/* <UserNameForm /> */}
      {/* <BetterForm /> */}
      {/* <EmojiClicker />
      <EmojiClicker /> */}
      {/* <DumboStateDemo /> */}
      {/* <ColorBoxes colors={colors} /> */}
      {/* <Counter/> */}
      {/* <Toggler/> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <Clicker message= "button is clicked" buttonText="click me" /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Slots val1="🌺" val2="🪷" val3="🍁" />
      <Slots val1="🍁" val2="🍁" val3="🍁" /> */}
      {/* <Heading color="teal" text="welcome" fontSize="20px"/> */}
      {/* <ColorList colors={['plum','teal','aqua','red']}/> */}

      {/* <h1>pooja here</h1> */}
      {/* <Greeter/> */}
      {/* <ListPicker values={[1,2,3]}/> */}
      {/* <ListPicker values={['a','b']}/> */}
      {/* <DoubleDice/> */}
    </div>
  );
}

export default App;
