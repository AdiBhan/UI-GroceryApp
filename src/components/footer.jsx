import "../index.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

const footer_background =
  " bounce2 round-full rounded-lg border border-white content-center	 p-2 bg-zinc-300  shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-zinc-900";
const footer_text =
  "bounce2  text-sm text-right text-gray-400 sm:text-center dark:text-gray-400";
const footer_hover =
  "bounce2  hover:text-bl-500 hover:underline hover:scale-110";
const background = " bg-zinc-800 p-2 ";

//-------------------------------------------------------------------------------------------------

function Footers() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <div className={background}>
        <footer class={footer_background}>
          <div className=" flex flex-col items-center">
            <button
              onClick={topFunction}
              type="button"
              class="bounce2 btn btn-warning content-center"
            ></button>
          </div>
          <p></p>
          <span class={footer_text}>
            All Rights Reserved | Created by Adi Bhan with ❤️ from GitHub ➡️{" "}
            <a
              href="https://github.com/AdiBhan/UI-GroceryApp"
              class={footer_hover}
            >
              Click to view source
            </a>
            .
          </span>
        </footer>{" "}
      </div>
    </>
  );
}
export default Footers;
