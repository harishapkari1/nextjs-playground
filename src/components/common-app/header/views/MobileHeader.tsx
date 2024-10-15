import { useState } from "react";
import {
  TopMenu as TopMenuData,
  MainMenu as MainMenuData,
} from 'graphql-types';

import TopMenuMobile from './TopMenu/TopMenuMobile';
import MainMenuMobile from './MainMenu/MainMenuMobile';
import topMenuStyles from '../styles/topmenu.module.scss'

type MobileHeaderProps = {
  topMenu: TopMenuData;
  mainMenu: MainMenuData;
};

const MobileHeader = (props: MobileHeaderProps): JSX.Element => { 
  const [isOpen, toggleMenu] = useState(false);
  return (
  <div className={topMenuStyles.aunavbarmobile}>
    <TopMenuMobile topMenu={props.topMenu} isOpen={isOpen} toggleMenu={toggleMenu} />
    <MainMenuMobile mainMenu={props.mainMenu} isOpen={isOpen} />
  </div>
)};

export default MobileHeader;
