import { MainMenu as MainMenuData, MainMenuItem as MainMenuItemData } from 'graphql-types';
import MainMenuDropdown from './MainMenuDropdown';
import MainMenyStyles from '../../styles/mainmenu.module.scss';

type MainMenuProps = {
  mainMenu: MainMenuData;
};

const MainMenu = (props: MainMenuProps): JSX.Element => (
  <div>
    <nav className={`navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <div className={`collapse navbar-collapse`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" key={props?.mainMenu?.id}>
            {props?.mainMenu?.children?.results?.map((listItem,index) => {
              const menuItem = listItem as MainMenuItemData;
              const childrenLength = menuItem?.children?.results?.length ?? 0;

              if (childrenLength > 0) {
                return (
                  <li className="nav-item dropdown aunavitem" key={`${menuItem.id}-${index}`}>
                    <a
                      className="nav-link"
                      href={`#${menuItem.id}`}
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls={menuItem?.id}
                    >
                      {menuItem?.mainLinkText?.value}
                    </a>
                  </li>
                );
              }
              return;
            })}
          </ul>
        </div>
      </div>
    </nav>
    <div className={`container-fluid ${MainMenyStyles.headerdetailscontainer}`}>
    {props?.mainMenu?.children?.results?.map((listItem) => {
              const menuItem = listItem as MainMenuItemData;
              return <MainMenuDropdown mainMenuItem={menuItem} key={menuItem.id}/>;
            })}
    </div>
  </div>
);

export default MainMenu;
