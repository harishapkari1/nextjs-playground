import { Image } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  TopMenu as TopMenuData,
  TopMenuItem as TopMenuItemData,
} from 'graphql-types';

import NavDropDownItem from './NavDropDownItem';
import topMenuStyles from '../../styles/topmenu.module.scss';

type TopMenuProps = {
  topMenu: TopMenuData;
};

const TopMenu = (props: TopMenuProps): JSX.Element => (
  <nav className={`navbar navbar-expand-lg navbar-light`}>
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        <Image className="img-fluid rounded-start" field={props?.topMenu?.desktopLogo?.jsonValue} />
      </a>

      <div className={`collapse navbar-collapse ${topMenuStyles.aunavbarcollapse}`}  id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {props?.topMenu?.children?.results?.map((listItem) => {
            const menuItem = listItem as TopMenuItemData;
            const childrenLength = menuItem?.children?.results?.length ?? 0;

            if (childrenLength > 0) {
              return <NavDropDownItem menuItem={menuItem} key={`navDropDown-${menuItem?.id}`} />;
            }
            return;
          })}
        </ul>
      </div>
    </div>
  </nav>
);

export default TopMenu;
