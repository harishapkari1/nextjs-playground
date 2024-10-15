import { MainMenuItem as MainMenuItemData,
    SubMenuItem as SubMenuItemData,
    SubMenuGroup as SubMenuGroupData,
 } from 'graphql-types';
import MainMenuStyles from '../../styles/mainmenu.module.scss';
import SideTab from './SideTab';

type MainMenuItemProps = {
  mainMenuItem: MainMenuItemData;
};

const MainMenuDropdown = (props: MainMenuItemProps): JSX.Element => (
  <div className="collapse" id={props.mainMenuItem.id}>
    <div className="card">
      <div className="d-flex align-items-start">
        <div className={`me-3 ${MainMenuStyles.leftcontainer}`}>
          <div className={MainMenuStyles.leftlinks}>
            <img
              src="https://www.australianunity.com.au/health-insurance/-/media/RebrandCorporate/Contentimages/IAN/health-illo.svg"
              alt="Health"
            ></img>
            <a className={`btn btn-primary ${MainMenuStyles.btnprimary}`}>Get a quote</a>
            <a className={`btn btn-outline-primary ${MainMenuStyles.btnoutlineprimary}`}>Member login</a>
          </div>
          <ul
            className={`nav nav-pills pt-4 flex-column nav-pills border-end border-3 align-items-end ${MainMenuStyles.leftnavlinks}`}
            key={props.mainMenuItem.id}
            id="pills-tab"
            role="tablist"
          >
            {props?.mainMenuItem?.children?.results?.map((listItem,index) => {
              const menuItem = listItem as SubMenuItemData;
              return (
                <li className={`nav-item ${MainMenuStyles.aunavlink}`} role="presentation" key={`${menuItem?.id}-${index}`}>
                <button
                  className={`nav-link fw-semibold position-relative ${index == 0 ?'active':''}`}
                  id={`${menuItem.id}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#${menuItem.id}-content`}
                  type="button"
                  role="tab"
                  aria-controls={`${menuItem.id}-content`}
                  aria-selected="true"
                  key={`${menuItem?.id}-${index}`}
                >
                 {menuItem?.menuText?.value}
                </button>
              </li>
              )
            })}
          </ul>
        </div>
        <div className={`tab-content p-3 w-100 ${MainMenuStyles.autabcontent}`} id="pills-tabContent">
        {props?.mainMenuItem?.children?.results?.map((listItem, index) => {
              const menuItem = listItem as SubMenuItemData;
              return (
                <div
                className={`tab-pane fade ${index == 0 ? 'show active': ''}`}
                id={`${menuItem.id}-content`}
                key={`${menuItem?.id}-div-${index}`}
                role="tabpanel"
                aria-labelledby={`${menuItem.id}-tab`}
                >
                    {menuItem?.children?.results?.map((listItem) => {
                        const subMenuGroup = listItem as SubMenuGroupData;
                        return <SideTab subMenuGroup={subMenuGroup} key={`${subMenuGroup?.id}-st-${index}`}/>
                    })}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  </div>
);

export default MainMenuDropdown;
