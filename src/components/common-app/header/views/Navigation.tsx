import {
  GetStaticComponentProps,
  useComponentProps,
  constants,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import { ComponentProps } from 'lib/component-props';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { NavigationGraphqlQueryDocument } from '../scripts/Navigation.graphql';
import config from 'temp/config';
import {
  AppRoute as AppRoute,
  Item,
  NavigationHeader as NavigationDatasource,
  TopMenu as TopMenuData,
  MainMenu as MainMenuData,
} from 'graphql-types';

type RouteItem = AppRoute & Item;

type NavigationData = {
  datasource: NavigationDatasource;
  contextItem: RouteItem;
};

type NavigationProps = ComponentProps & NavigationData;

const Navigation = (props: NavigationProps): JSX.Element => {
  const data = useComponentProps<NavigationProps>(props.rendering.uid);
  const topMenu = data?.datasource?.children?.results?.at(0) as TopMenuData;
  const mainMenu = data?.datasource?.children?.results?.at(1) as MainMenuData;
  return (
    <div>
      <DesktopHeader topMenu={topMenu} mainMenu={mainMenu} />
      <MobileHeader topMenu={topMenu} mainMenu={mainMenu} />
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
  if (process.env.JSS_MODE === constants.JSS_MODE.DISCONNECTED) {
    return null;
  }
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });
  console.log('In Graphql server function');
  const result = await graphQLClient.request<NavigationData>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NavigationGraphqlQueryDocument as any,
    {
      datasource: rendering.dataSource,
      contextItem: layoutData?.sitecore?.route?.itemId,
      language: layoutData?.sitecore?.context?.language,
    }
  );
  return result;
};

export default withDatasourceCheck()<NavigationProps>(Navigation);
