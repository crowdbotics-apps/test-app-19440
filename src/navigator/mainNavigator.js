import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps88632Navigator from '../features/Maps88632/navigator';
import Add-Item88631Navigator from '../features/Add-Item88631/navigator';
import Maps88627Navigator from '../features/Maps88627/navigator';
import UserProfile88623Navigator from '../features/UserProfile88623/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps88632: { screen: Maps88632Navigator },
Add-Item88631: { screen: Add-Item88631Navigator },
Maps88627: { screen: Maps88627Navigator },
UserProfile88623: { screen: UserProfile88623Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
