//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

const footer_background =
  "text-center h-5  p-2 bg-zinc-900  shadow md:flex md:items-center  md:p-2 dark:bg-zinc-900 ";
const footer_text =
  "text-center mx-auto justify-center scale-7 italic text-sm text-right text-gray-400 sm:text-center ";
const footer_hover = "hover:text-bl-200 hover:underline";

//-------------------------------------------------------------------------------------------------

function Footers() {
  return (
    <div className="bg-black justify-center scale-150">
      <footer className={footer_background}>
        <span className={footer_text}>
          All Rights Reserved | Created by Adi Bhan with ❤️ from GitHub ➡️{" "}
          <a
            href="https://github.com/AdiBhan/Portfolio"
            className={footer_hover}
          >
            Click to view source
          </a>
          .
        </span>
      </footer>
    </div>
  );
}
export default Footers;
