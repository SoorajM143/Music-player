import React from 'react';

import './css/SidebarOptions.css';

function SidebarOptions({ title, Icons }) {
  return (
    <div className="sidebarOptions">
      {Icons && <Icons className="sidebarOption__icon" />}
      {Icons ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOptions;
