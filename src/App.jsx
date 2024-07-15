import { useState } from "react";
import { PhoneShop } from "./modules/phone-shop";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <PhoneShop />
    </>
  );
}

export default App;

