import React from "react";
import { useSelector } from "react-redux";
import Appbar from "../Appbar";
import CloneTab from "../CloneTab";

const AdminRight = () => {
  const cloneTab = useSelector((state) => state.showAdmin.cloneTab);

  return (
    <div className="adminRight">
      <Appbar />

      {cloneTab ? <CloneTab /> : ""}
    </div>
  );
};

export default AdminRight;
