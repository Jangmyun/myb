import blankProfile from "../assets/imgs/blank-profile.png";
import classnames from "classnames";

// zustand store
import { useHeaderUserStore } from "../stores/modalStore";
import HeaderUserNav from "./HeaderUserNav";

const headerIcon = classnames(
  "flex",
  "w-10",
  "h-10",
  "justify-center",
  "items-center",
  "rounded-full",
  "hover:bg-hover-bg",
  "cursor-pointer"
);

const centerChild = classnames("flex", "justify-center", "items-center");

function Header() {
  const { isClicked, click, unClick } = useHeaderUserStore();

  return (
    <header className="flex p-3 items-center justify-between">
      <div className="header_left">
        <h1 className="text-xl">S5cene</h1>
      </div>
      <div className="header_right flex justify-between relative">
        <div className={headerIcon}>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#ececec"
          >
            <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
          </svg>
        </div>
        <div className={headerIcon}>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#ececec"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        <div
          className="flex items-center justify-between cursor-pointer group"
          onClick={() => {
            isClicked ? unClick() : click();
          }}
        >
          <div className="imgContainer w-9 h-9 rounded-full overflow-hidden mr-2">
            <img
              className="w-full h-full object-cover"
              src={blankProfile}
              alt="blank"
            />
          </div>
          <div className={centerChild + " w-4 h-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="currentColor"
              className="group-hover:fill-white w-2/4"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </div>
        </div>
        {isClicked ? <HeaderUserNav></HeaderUserNav> : null}
      </div>
    </header>
  );
}

export default Header;
