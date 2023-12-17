// Create an empty menubar
import optionsMenu from './optionsMenu';
import componentsMenu from './componentsMenu';
import helpMenu from './helpMenu';

const menu = new nw.Menu( { type: 'menubar' } );

// Create and append submenus to the menubar
menu.append( new nw.MenuItem(
  {
    label: 'Options',
    submenu: optionsMenu
}) );
menu.append( new nw.MenuItem(
  {
    label: 'Help',
    submenu: helpMenu
}) );

export function setText( el: { innerHTML: string; } ) {
  el.innerHTML = 'hello';
};
export default menu;
