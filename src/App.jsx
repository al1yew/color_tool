import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
   const [colors, setColors] = useState(new Values("#f15025").all(1));

   const addColor = (color) => {
      try {
         let newColors = new Values(color).all(1);
         setColors(newColors);
      } catch (error) {
         toast.error(error.message);
      }
   };

   return (
      <main>
         <Form addColor={addColor} />
         <ColorList colors={colors} />
         <ToastContainer />
      </main>
   );
};
export default App;
