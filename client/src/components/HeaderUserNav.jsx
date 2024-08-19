import { Link } from "react-router-dom";
import classNames from "classnames";

const headerNavContent = classNames(
  "w-48",
  "h-12",
  "px-4",
  "py-3",
  "hover:text-hover-letter"
);

function HeaderUserNav() {
  return (
    <div className="HeaderUserNavWrapper flex flex-col absolute top-full right-0 bg-bg-element">
      <Link to={"/write"} className={headerNavContent}>
        새 글 쓰기
      </Link>
      <Link className={headerNavContent}>내 글</Link>
      <Link className={headerNavContent}>설정</Link>
      <Link className={headerNavContent}>로그아웃</Link>
    </div>
  );
}

export default HeaderUserNav;
