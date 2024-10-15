import { TopMenu as TopMenuData, MainMenu as MainMenuData } from 'graphql-types';

import TopMenu from './TopMenu/TopMenu';
import MainMenu from './MainMenu/MainMenu';
import topMenuStyles from '../styles/topmenu.module.scss';

type DesktopHeaderProps = {
  topMenu: TopMenuData;
  mainMenu: MainMenuData;
};

const DesktopHeader = (props: DesktopHeaderProps): JSX.Element => (
  <div className={topMenuStyles.aunavbar}>
    <TopMenu topMenu={props.topMenu} />
    <MainMenu mainMenu={props.mainMenu} />
  </div>
);

export default DesktopHeader;
