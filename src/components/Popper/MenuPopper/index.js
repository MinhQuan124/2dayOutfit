import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../../Popper/index";
import MenuPopperItem from "./MenuPopperItem";
import HeaderMenu from "./HeaderMenu";

function MenuPopper({ title, children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => (
      <MenuPopperItem key={index} data={item} />
    ));
  };
  return (
    <Tippy
      interactive
      delay={[0, 300]}
      offset={[10, 15]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="min-w-60" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className="ml-3">
              <HeaderMenu title={title} />
              {renderItems()}
            </div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuPopper;
