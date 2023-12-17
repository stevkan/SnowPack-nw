import project from '../project'

// Create "Project" menu items
const createProject = new nw.MenuItem( {
  label: "Project Editor",
  click: function () {
    console.log( "Project opened / created" );
    const win = nw.Window.get();
    <div className="window document get"></div>
  },
  key: "F2",
} );
const closeProject = new nw.MenuItem( {
  label: "Close Project",
  click: function () {
    console.log( "Project closed" );
  },
} );
const projectDetails = new nw.MenuItem( {
  label: "View Project Details",
  click: function () {
    console.log( "View Project Details" );
  }
} );

const projectSubmenu = new nw.Menu();
projectSubmenu.append( createProject );
projectSubmenu.append( closeProject );
projectSubmenu.append( projectDetails );

export default projectSubmenu;
