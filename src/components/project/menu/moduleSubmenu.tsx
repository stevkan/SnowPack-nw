// Create "Module" menu items
const createModule = new nw.MenuItem( {
  label: "Module Editor",
  click: function () {
    console.log( "Module opened / created" );
  },
  key: "F3",
} );
const closeModule = new nw.MenuItem( {
  label: "Close Module",
  click: function () {
    console.log( "Module closed" );
  },
} );
const moduleDetails = new nw.MenuItem( {
  label: "View Module Details",
  click: function () {
    console.log( "View Module Details" );
  }
} );

// Create "Module" submenu
var moduleMenu = new nw.Menu();
moduleMenu.append( createModule );
moduleMenu.append( closeModule );
moduleMenu.append( moduleDetails );

export default moduleMenu;
