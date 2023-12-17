const win = nw.Window.get();
const helpItem = new nw.MenuItem( {
  label: "Documentation",
  click: function () {
    console.log( "Documentation opened" );
  },
  key: "F1"
} );
const toggleFullScreenItem = new nw.MenuItem( {
  label: "Toggle Fullscreen",
  click: function () {
    console.log( "Toggle Fullscreen opened" );
    win.toggleFullscreen();
  },
  key: "F11"
} );
const devToolsItem = new nw.MenuItem( {
  label: "Open Dev Tools",
  click: function () {
    console.log( "Dev Tools opened" );
    win.showDevTools();
  },
  key: "F12"
} );
const issueItem = new nw.MenuItem( {
  label: "File an Issue / Feature Request",
  click: function () {
    console.log( "Issue opened" );
  },
} );
const aboutItem = new nw.MenuItem( {
  label: "About Module Maker",
  click: function () {
    console.log( "About opened" );
  }
} );

// Create "Module" submenu
var helpMenu = new nw.Menu();
helpMenu.append( helpItem );
helpMenu.append( toggleFullScreenItem );
helpMenu.append( devToolsItem );
helpMenu.append( issueItem );
helpMenu.append( aboutItem );

export default helpMenu;
