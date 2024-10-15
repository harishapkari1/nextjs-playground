import { Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { Dispatch, SetStateAction } from 'react';
import {
  TopMenu as TopMenuData,
  TopMenuItem as TopMenuItemData,
} from 'graphql-types';

import NavDropDownItem from './NavDropDownItem';
import topMenuStyles from '../../styles/topmenu.module.scss';


type TopMenuProps = {
  topMenu: TopMenuData;
  isOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
};

const TopMenu = (props: TopMenuProps): JSX.Element => (
  <nav className={`navbar navbar-expand-lg navbar-light ${topMenuStyles.aunavbarmobile}`}>
    
    <div className="container-fluid">
    <div className={topMenuStyles.topMenuhamburgercontainer}>
    <div onClick={() => props.toggleMenu(!props.isOpen)} className={topMenuStyles.topMenuhamburger} aria-label="Toggle Main Menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <a className="navbar-brand" href="#">
        <Image className="img-fluid rounded-start" field={props?.topMenu?.mobileLogo?.jsonValue} />
    </a>
    </div>
      <button
        className={topMenuStyles.aumobilenavbartoggler}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContentmobile"
        aria-controls="navbarSupportedContentmobile"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="https://www.australianunity.com.au/-/media/Icons/Corporate/IAN/Profileea7627a2.svg" />
      </button>
      <div className={`collapse navbar-collapse ${topMenuStyles.aumobilenavbarcontent}`}  id="navbarSupportedContentmobile">
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${topMenuStyles.aumobilenavbarcontentlinks}`}>
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
