import React from "react";

const OrgNode = ({ nodeData }) => {
  const selectNode = () => {
    // alert('Ref ID: '+nodeData.ref_id);
    window.location.href = `/admin/user/${nodeData.id}`
  };

  return (
    <div onClick={selectNode}>
      {/* <div className="position">{nodeData.title}</div> */}
      <div direction='column' justify="center" className="position">
        <p fontSize="sm" fontWeight="bold">{nodeData.name}</p>
      </div>
    </div>
  );
};

export default OrgNode;
