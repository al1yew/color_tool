import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
   const { hex, weight } = color;

   const saveToClipboard = async () => {
      if (navigator.clipboard) {
         try {
            await navigator.clipboard.writeText(`#${hex.toUpperCase()}`);
            toast.success(`Copied  #${hex.toUpperCase()}`);
         } catch (error) {
            toast.error("Failed to copy to clipboard");
         }
      } else {
         toast.error("Clipboard is not available!");
      }
   };

   return (
      <article
         onClick={saveToClipboard}
         className={index > 10 ? "color color-light" : "color"}
         style={{ background: `#${hex}` }}
      >
         <p className="percent-value">{weight} %</p>
         <p className="percent-value">#{hex.toUpperCase()}</p>
      </article>
   );
};
export default SingleColor;
