import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
/*-----------------------------------------------------------------------------------------------------------*/
/* Tailwind CSS Internal Styling for User Input and Grocery List Components*/

const inputStyle =
  "display-6 border-4 border-black text-black text-xl w-35 h-10 p-4 bg-light transition duration-500 ease-in-out shadow-xl hover:shadow-2xl hover:bg-white hover:border-4 ";

const gridFruitStyle =
  "display-6 scale-50  flex grid justify-center border-black border-4 bg-light transition duration-700 ease-in-out";

const rowFruitsStyle = "flex  flex-row justify-center gap-0";

const defaultText = "text-black";

const SmallDefaultText = "italic text-black scale-50";

const buttonincrementStyle =
  "btn btn-outline-success m-1 text-black  hover:border-slate-400 hover:border-2";

const buttondecrementStyle =
  "btn btn-outline-danger text-black  hover:border-slate-400 hover:border-2";

const userInputGridStyle = " flex flex-row justify-center ";

const fruitStyle =
  "border-2 m-1 p-1 list-group-item list-group-item-info scale-75 w-40 h-30 rounded-full";

const GroceryListTitle = "justify-center display-4  m-2 overline text-black ";

const questionMesageStyle = "display-6 text:black  italic text-black";

const counterStyle =
  "display-6 text:black scale-75 btn btn btn-outline-primary m-5 h-10 w-30 scale-125 rounded";

const summaryStyle =
  "hover:text-black btn btn-warning  m-2 scale-75 border-4 hover:border-slate-400 hover:border-4";

const submitDatabaseStyle =
  "btn btn-success m-2 scale-75  rounded-bl-lg border-4  hover:border-slate-400 hover:border-4";

const viewHistoryStyle =
  "btn btn-dark m-2 scale-75 m-2 rounded-bl-lg border-4 border-black border-x-black  hover:border-slate-400 hover:border-4";

const priceCounterStyle =
  "display-6 text:black scale-75 btn btn btn-outline-success m-5 h-10 w-30 scale-125 rounded hover:none";

const darkModeButtonStyle =
  "scale-50 w-40 bg-black text-white  h-30 p-2 border-4 border-red-500 justify-end rounded-lg px-6 py-8 ring-1 ring-shadow-xl/5 shadow-xl";
/* Tailwind CSS Internal Styling for User Input and Grocery List Components*/

/*-----------------------------------------------------------------------------------------------------------*/

function GroceryList() {
  const FruitsLabels = {
    Apple: "Apples 🍎",
    Banana: "Bananas 🍌",
    Orange: "Oranges 🍊",
  };

  const FruitsPrices = {
    Apple: 0.25,
    Banana: 0.5,
    Orange: 0.75,
  };

  const [name, setName] = useState("Customer");

  function handleChange(event) {
    setName(event.target.value);
  }

  const [countApples, setCounterApples] = useState(0);

  const [countPriceApples, setCounterPricesApples] = useState(0.0);

  const [countBananas, setCounterBananas] = useState(0);

  const [countPriceBanana, setCounterPricesBanana] = useState(0.0);

  const [countOranges, setCounterOranges] = useState(0);

  const [countPriceOrange, setCounterPricesOrange] = useState(0.0);

  const [countTotalPrice, setCounterTotalPrices] = useState(0.0);

  const [countTotalFruit, setTotalFruit] = useState(0.0);

  function incrementApple() {
    setCounterApples(countApples + 1);
    setCounterPricesApples(countPriceApples + FruitsPrices.Apple);
    setTotalFruit(countApples + countBananas + countOranges + 1);
    setCounterTotalPrices(
      countPriceBanana +
        countPriceOrange +
        countPriceApples +
        FruitsPrices.Apple
    );
  }
  function decrementApple() {
    if (countApples < 1) {
      alert("You can't have negative apples! 🍎");
      return;
    }
    setCounterApples(countApples - 1);
    setCounterPricesApples(countPriceApples - FruitsPrices.Apple);
    setTotalFruit(countApples + countBananas + countOranges - 1);
    setCounterTotalPrices(
      countPriceBanana +
        countPriceOrange +
        countPriceApples -
        FruitsPrices.Apple
    );
  }

  function incrementBananas() {
    setCounterBananas(countBananas + 1);
    setCounterPricesBanana(countPriceBanana + FruitsPrices.Banana);
    setTotalFruit(countApples + countBananas + countOranges + 1);
    setCounterTotalPrices(
      countPriceBanana +
        countPriceOrange +
        countPriceApples +
        FruitsPrices.Banana
    );
  }
  function decrementBananas() {
    if (countBananas < 1) {
      alert("You can't have negative bananas! 🍌");
      return;
    }
    setCounterBananas(countBananas - 1);
    setCounterPricesBanana(countPriceBanana - FruitsPrices.Banana);
    setTotalFruit(countApples + countBananas + countOranges - 1);
    setCounterTotalPrices(
      countPriceBanana +
        countPriceOrange +
        countPriceApples -
        FruitsPrices.Banana
    );
  }

  function incrementOranges() {
    setCounterOranges(countOranges + 1);
    setCounterPricesOrange(countPriceOrange + FruitsPrices.Orange);

    setTotalFruit(countApples + countBananas + countOranges + 1);

    setCounterTotalPrices(
      countPriceBanana +
        countPriceOrange +
        countPriceApples +
        FruitsPrices.Orange
    );
  }
  function decrementOranges() {
    if (countOranges < 1) {
      alert("You can't have negative oranges! 🍊");

      return;
    }
    setCounterOranges(countOranges - 1);
    setCounterPricesOrange(countPriceOrange - FruitsPrices.Orange);

    setTotalFruit(countApples + countBananas + countOranges - 1);

    setCounterTotalPrices(
      countPriceBanana +
        countPriceOrange +
        countPriceApples -
        FruitsPrices.Orange
    );
  }
  function resetData() {
    setCounterApples(0);
    setCounterPricesApples(0.0);
    setCounterBananas(0);
    setCounterPricesBanana(0.0);
    setCounterOranges(0);
    setCounterPricesOrange(0.0);
    setCounterTotalPrices(0.0);
    setTotalFruit(0.0);

    if (countTotalFruit === 0 && countTotalPrice === 0) {
      return alert("Error: You already have a empty cart! 🛒");
    } else {
      return alert("Your shopping cart has been reset! 🛒");
    }
  }
  const [storeTransaction, setStoreTransaction] = useState([]);

  function sendData() {
    const data = {
      name: name,
      apples: countApples,
      bananas: countBananas,
      oranges: countOranges,
      totalFruit: countTotalFruit,
      totalPrice: countTotalPrice,
    };

    console.log(data);
    axios
      .post("http://localhost:5000/add", data)
      .then((res) => {
        console.log(res.data);
        storeTransaction.push(res.data);
        setStoreTransaction(storeTransaction);
        console.log(storeTransaction);
        alert("Your order has been sent! 📤");
      })
      .catch((error) => {
        alert("Backend server is currently offline! 🛑");
        <div class="alert alert-dark" role="alert">
          This is a dark alert—check it out!
        </div>;
      });
  }

  const [open, setOpen] = useState(false);
  const keys = Object.keys(storeTransaction);

  // DARK MODE FEATURE
  const [lightModeStyle, setColor2] = useState(darkModeButtonStyle);
  const [lightBackground, setColor3] = useState(gridFruitStyle);
  const [lightInputStyle, setColor4] = useState(inputStyle);
  const [lightQuestionMesageStyle, setColor5] = useState(questionMesageStyle);
  const [lightGroceryListTitle, setColor6] = useState(GroceryListTitle);
  const [lightDefaultText, setColor7] = useState(defaultText);
  const [lightSmallDefaultText, setColor8] = useState(SmallDefaultText);

  // ------------------------------------------------------------------------------------------------
  // DARK MODE FEATURE

  function enableDarkMode() {
    // Change button to light mode and back
    if (lightModeStyle === darkModeButtonStyle) {
      // light mode
      setColor2(
        "border-4 border-blue-500 bg-white text-black  scale-50 w-40  h-30 p-2 border-white  justify-end rounded-lg px-6 py-8 ring-1 ring-shadow-xl/5 shadow-xl"
      );
    } else {
      // dark mode
      setColor2(darkModeButtonStyle);
    }

    // Change backround to light mode and back

    if (lightBackground === gridFruitStyle) {
      // light mode
      setColor3(
        "display-6 scale-50  flex grid justify-center border-white border-4 bg-black transition duration-700 ease-in-out"
      );
    } else {
      // dark mode
      setColor3(gridFruitStyle);
    }
    // Change input to light mode and back
    if (lightInputStyle === inputStyle) {
      // light mode
      setColor4(
        "display-6 border-4 border-white bg-black text-white text-xl w-35 h-10 p-4 bg-light transition duration-500 ease-in-out shadow-xl hover:shadow-2xl hover:bg-white hover:border-4 "
      );
    } else {
      // dark mode
      setColor4(inputStyle);
    }

    // Change question message to light mode and back
    if (lightQuestionMesageStyle === questionMesageStyle) {
      // light mode
      setColor5("display-6 text:black  italic text-white");
    } else {
      // dark mode
      setColor5(questionMesageStyle);
    }
    if (lightGroceryListTitle === GroceryListTitle) {
      // light mode
      setColor6("justify-center display-4  m-2 overline text-white");
    } else {
      // dark mode
      setColor6(GroceryListTitle);
    }
    if (lightDefaultText === defaultText) {
      // light mode
      setColor7("text-white");
    } else {
      // dark mode
      setColor7(defaultText);
    }
    if (lightSmallDefaultText === SmallDefaultText) {
      // light mode
      setColor8("text-white italic scale-50");
    } else {
      // dark mode
      setColor8(SmallDefaultText);
    }
  }

  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------
  return (
    <div className="scale-150 text-black ">
      <ul className={lightBackground}>
        {" "}
        <div clasName="flex col ">
          <button onClick={enableDarkMode} className={lightModeStyle}>
            𖤓
          </button>{" "}
          <button
            onClick={() => {
              window.location.href = "https://adibhan.github.io/Portfolio/";
            }}
            className={lightModeStyle}
          >
            💼
          </button>{" "}
          <br></br>
          <h1 className={lightQuestionMesageStyle}>
            {" "}
            Hello, {name}. Welcome to the Demo Shopping Cart App.
          </h1>
        </div>
        <br></br>
        <div className={userInputGridStyle}>
          <input
            onChange={handleChange}
            placeholder="ENTER YOUR NAME"
            type="name"
            maxLength="25"
            className={lightInputStyle}
          ></input>
        </div>{" "}
        <br></br>
        <h1 className={lightGroceryListTitle}> {name}'s GROCERY CART</h1>
        <h3 className={lightDefaultText}>Rules</h3>
        <h3 className={lightSmallDefaultText}>
          This is a simple grocery cart, you can add and remove fruits from your
          cart. You can also reset your cart and send your data to the server.
        </h3>
        {/* FRUITS BELOW */}
        <div className={rowFruitsStyle}>
          <div>
            <h3 className={lightDefaultText}>Fruits</h3>
            <li className={fruitStyle}>
              <button onClick={incrementApple} className={buttonincrementStyle}>
                +
              </button>
              <button onClick={decrementApple} className={buttondecrementStyle}>
                -
              </button>
              {FruitsLabels.Apple} <br></br>
            </li>{" "}
          </div>
          <div className>
            <h3 className={lightDefaultText}>Quantity</h3>
            <p className={counterStyle}>{countApples}🍎</p>
          </div>

          <div>
            {" "}
            <h3 className={lightDefaultText}>Price</h3>
            <p className={priceCounterStyle}>💵{countPriceApples}</p>
          </div>
        </div>
        <div className={rowFruitsStyle}>
          <li className={fruitStyle} variant="info">
            <button onClick={incrementBananas} className={buttonincrementStyle}>
              +
            </button>
            <button onClick={decrementBananas} className={buttondecrementStyle}>
              -
            </button>
            {FruitsLabels.Banana}{" "}
          </li>{" "}
          <div>
            <p className={counterStyle}> {countBananas}🍌</p>{" "}
          </div>
          <p className={priceCounterStyle}>💵{countPriceBanana}</p>
        </div>
        <div className={rowFruitsStyle}>
          <li className={fruitStyle} variant="info">
            <button onClick={incrementOranges} className={buttonincrementStyle}>
              +
            </button>
            <button onClick={decrementOranges} className={buttondecrementStyle}>
              -
            </button>
            {FruitsLabels.Orange}
          </li>
          <p className={counterStyle}> {countOranges}🍊</p>
          <p className={priceCounterStyle}>💵{countPriceOrange}</p>
        </div>{" "}
        {/* BUTTONS BELOW */}
        <a
          onClick={resetData}
          className=" btn btn-danger  black scale-75	m-3  hover:border-slate-400 hover:border-4"
        >
          <button className=" text-white display-6 ">Reset Cart 🛒</button>
        </a>
        <div className="grid-flow-row"></div>
        <div className={summaryStyle}>
          <button className="display-6 text-white ">
            Total | {countTotalFruit} Fruits | 💵 {countTotalPrice}
          </button>
        </div>
        <div className={submitDatabaseStyle}>
          <button
            onClick={sendData}
            className="display-6 hover:text-green-300 text-white "
          >
            Submit to Database
          </button>
        </div>
        <div className={viewHistoryStyle}>
          <button
            className="display-6 scale-75"
            onClick={() => setOpen(!open)}
            timeout={1000}
            aria-controls="collapse-text"
            aria-expanded={open}
          >
            View Transaction History
          </button>
        </div>
        <Collapse in={open}>
          <div className="btn btn-outline-dark m-2 scale-75 display-6 ">
            <ul>
              <h1 className="m-3 border-l ">
                <b className="display-6">Transaction History 🧾</b>
              </h1>
              <br></br>
              {keys.map((key) => (
                <li className="m-2 btn-outline-warning font-mono">
                  {key}: {storeTransaction[key]}
                </li>
              ))}
            </ul>
            <br></br>
          </div>
        </Collapse>
      </ul>{" "}
    </div>
  );
}
export default GroceryList;
