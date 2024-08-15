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
      <a className={headerNavContent} href="">
        내 글
      </a>
      <a className={headerNavContent} href="">
        설정
      </a>
      <a className={headerNavContent} href="">
        로그아웃
      </a>
    </div>
  );
}

export default HeaderUserNav;
