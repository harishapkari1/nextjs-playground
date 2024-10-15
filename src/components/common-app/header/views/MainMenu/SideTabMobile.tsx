import { SubMenuItem as SubMenuItemData, SubMenuGroup as SubMenuGroupData } from 'graphql-types';
import SideTab from './SideTab';
import MainMenuMobileStyles from '../../styles/mainmenumobile.module.scss';
type SideTabMobileProps = {
  subMenuItem: SubMenuItemData;
};

const SideTabMobile = (props: SideTabMobileProps): JSX.Element => (
  <div className="accordion accordion-flush w-100" id={props?.subMenuItem?.id}>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className={`accordion-button collapsed ${MainMenuMobileStyles.auheadermobileaccordionbutton}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props?.subMenuItem.id}-collapse`}
          aria-expanded="false"
          aria-controls={`${props?.subMenuItem.id}-collapse`}
        >
          {props?.subMenuItem?.menuText?.value}
        </button>
      </h2>
      <div
        id={`${props?.subMenuItem?.id}-collapse`}
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent={`#${props?.subMenuItem?.id}`}
      >
        <div className={`accordion-body ${MainMenuMobileStyles.accordionbody}`}>
          {props?.subMenuItem?.children?.results?.map((listItem) => {
            const subMenuGroup = listItem as SubMenuGroupData;
            return <SideTab subMenuGroup={subMenuGroup} key={subMenuGroup.id}/>;
          })}
        </div>
      </div>
    </div>
  </div>
);

export default SideTabMobile;
