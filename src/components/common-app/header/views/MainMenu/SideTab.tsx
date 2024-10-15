import {
  SubMenuGroup as SubMenuGroupData,
  MenuItem as MenuItemData,
  SubMenuHeadingOrSpace as SubMenuHeadingOrSpaceData,
} from 'graphql-types';
import MainMenuStyles from '../../styles/mainmenu.module.scss';

type SideTabProps = {
  subMenuGroup: SubMenuGroupData;
};

const SideTab = (props: SideTabProps): JSX.Element => (
  <ul className={`headerlist list-group  list-group-flush ${MainMenuStyles.aumenulist}`} key={props?.subMenuGroup?.id}>
    {props?.subMenuGroup?.children?.results?.map((listItem) => {
       const menuItem = listItem as MenuItemData;
      if (menuItem?.id != undefined) {
       
        return (
          <li className="list-group-item" key={menuItem?.id}>
            <a href="#">{menuItem.linkText?.value}</a>
          </li>
        );
      } else {
        const headingItem = listItem as SubMenuHeadingOrSpaceData;
        return <li className="listheading" key={headingItem.id}>{headingItem?.heading?.value}</li>;
      }
    })}
  </ul>
);

export default SideTab;
