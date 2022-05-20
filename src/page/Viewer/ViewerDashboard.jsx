import React from 'react'
import "./ViewerDashboard.css";
import ViewerDashboardTable from '../../components/viewer/ViewerDashboardTable';



const ViewerDashboard = () => {

  return (
    <div className="viewerDashboardContainer">
      <h1 className="viewerDashboardTitle"><span className='viewerSpan'>OBSERVADOR DASHBOARD</span></h1>

<h4 className="viewerDashboardTitle2">
Tienes programadas las siguientes reuniones:
</h4>
      <ViewerDashboardTable/>

    </div>
  );
};

export default ViewerDashboard
