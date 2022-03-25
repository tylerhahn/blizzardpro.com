import { Button } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";

const WarrantyUploader = ({ maxFileSize, setReceipt }) => {
  const handleChange = (files) => {
    // files.map((file) => {
    //   determineFileType(file.type);
    //   return null;
    // });
    console.log(files);
    setReceipt(files);
  };

  return (
    <React.Fragment>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <h3 className="reveal-text">Receipt Upload</h3>
      </div>
      <div className="drag">
        <DropzoneArea
          filesLimit={1}
          dropzoneclassName="file-uploader"
          maxFileSize={maxFileSize}
          acceptedFiles={["application/*", "", "image/*", "video/*"]}
          onChange={handleChange}
          useChipsForPreview={true}
          onDropRejected={(file) => console.log(file)}
        />
      </div>
    </React.Fragment>
  );
};

export default WarrantyUploader;
