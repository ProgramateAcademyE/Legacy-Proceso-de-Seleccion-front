import React from 'react'
import "./ViewerDashboard.css";
import ViewerDashboardTable from '../../components/viewer/ViewerDashboardTable';



const ViewerDashboard = () => {

  return (
    <div className="viewerAssesmentContainer">
      <h1 className="viewerAssesmentTitle"><span className='viewerSpan'>OBSERVADOR DASHBOARD</span></h1>

<h4 className="">
Tienes programadas las siguientes reuniones:
</h4>
      <ViewerDashboardTable/>

    </div>
  );
};

export default ViewerDashboard
