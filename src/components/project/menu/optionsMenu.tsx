// Create "File" submenu
const optionsMenu = new nw.Menu();

// Append submenus
optionsMenu.append( new nw.MenuItem(
  {
    label: 'Reload',
    click: function () {
      const win = nw.Window.get();
      win.reload();
    },
    key: "F5"
  }
) );
optionsMenu.append( new nw.MenuItem(
  {
    label: 'Exit',
    click: function () {
      nw.App.quit();
    }
  }
) );

export default optionsMenu;
