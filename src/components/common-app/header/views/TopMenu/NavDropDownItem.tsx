import { TopMenuItem as TopMenuItemData, MenuItem as MenuItemData } from 'graphql-types';
import topMenuStyles from '../../styles/topmenu.module.scss';

type NavDropDownItemProps = {
  menuItem: TopMenuItemData;
};

const NavDropDownItem = (props: NavDropDownItemProps): JSX.Element => (
  <li className={`nav-item dropdown ${topMenuStyles.aunavitem}`} key={`maindropdown-${props?.menuItem?.id}`}>
    <a
      className={`nav-link ${props.menuItem?.showArrow?.value === '1' ? `dropdown-toggle ${topMenuStyles.aunavlink}` : ""}`}
      href="#"
      id={props?.menuItem?.id}
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      key={`maindropdownanchor-${props?.menuItem?.id}`}
    >
      {props?.menuItem.mainLinkText?.value}
    </a>
    <ul className="dropdown-menu" key={`maindropdownmain-${props?.menuItem?.id}`} aria-labelledby={props?.menuItem?.id}>
      {props?.menuItem?.children?.results?.map((listItem) => {
        const menuItem = listItem as MenuItemData;

        return (
          <li key={menuItem?.id}>
            <a className="dropdown-item" href="#">
              {menuItem?.linkText?.value}
            </a>
          </li>
        );
      })}
    </ul>
  </li>
);

export default NavDropDownItem;
