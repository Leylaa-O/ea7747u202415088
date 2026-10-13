export interface NavigationItem {

  labelKey: string;

  route: string;

  icon: string;
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { labelKey: 'nav.home', route: '/home', icon: 'home' },
  { labelKey: 'nav.newItem', route: '/historicalobjects/items/new', icon: 'add_circle' }
];
