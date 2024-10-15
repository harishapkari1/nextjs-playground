import {
  MainMenu as MainMenuData,
  MainMenuItem as MainMenuItemData,
  SubMenuItem as SubMenuItemData,
} from 'graphql-types';

import MainMenyStyles from '../../styles/mainmenumobile.module.scss';
import SideTabMobile from './SideTabMobile';

type MainMenuMobileProps = {
  mainMenu: MainMenuData;
  isOpen: boolean;
};

const MainMenuMobile = (props: MainMenuMobileProps): JSX.Element => {
  if(!props.isOpen)
  {
    return <></>
  }
  return (
  <div className={`card ${MainMenyStyles.aucardnavmobile}`}>
    <div className="d-flex align-items-start">
      <div className={MainMenyStyles.leftContainermobile}>
        <ul
          className={`nav nav-pills flex-column nav-pills border-end border-3 align-items-end ${MainMenyStyles.leftnavlinksmobile}`}
          key={`leftcon-${props.mainMenu.id}`}
          id="pills-tab"
          role="tablist"
        >
          {props?.mainMenu?.children?.results?.map((listItem, index) => {
            const menuItem = listItem as MainMenuItemData;
            const childrenLength = menuItem?.children?.results?.length ?? 0;

            if (childrenLength > 0) {
              return (
                <li className="nav-item" role="presentation" key={`leftconli-${menuItem?.id}`}>
                  <button
                    className={`nav-link  fw-semibold ${
                      index == 0 ? 'active' : ''
                    } position-relative ${MainMenyStyles.aunavlinkmobile}`}
                    id={`${menuItem.id}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${menuItem.id}-content`}
                    type="button"
                    role="tab"
                    aria-controls={`${menuItem.id}-content`}
                    aria-selected="true"
                  >
                    {menuItem?.mainLinkText?.value}
                  </button>
                </li>
              );
            }
            return;
          })}
        </ul>
      </div>

      <div className={`tab-content p-3 w-100 ${MainMenyStyles.autabcontent}`} id="pills-tabContent">
        {props?.mainMenu?.children?.results?.map((listItem, index) => {
          const menuItem = listItem as MainMenuItemData;
          return (
            <div
              className={`tab-pane fade ${index == 0 ? 'show active' : ''}`}
              id={`${menuItem.id}-content`}
              key={`${menuItem.id}-content`}
              role="tabpanel"
              aria-labelledby={`${menuItem.id}-tab`}
            >
              {menuItem?.children?.results?.map((listItem) => {
                const menuItem = listItem as SubMenuItemData;
                return <SideTabMobile subMenuItem={menuItem} key={`${menuItem.id}-st`} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  </div>
)};

export default MainMenuMobile;
