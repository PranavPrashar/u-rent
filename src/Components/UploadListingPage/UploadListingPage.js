import React from "react";

function UploadListingPage() {
  return (
    <div>
      <h1>Upload Your Listing</h1>

      {/* <form
        method="POST"
        action="http://localhost:5050/profile-upload-single"
        enctype="multipart/form-data"
      >
        <div>
          <label>Upload profile picture</label>
          <input type="file" name="profile-file" required />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form> */}
      <form
        method="POST"
        action="http://localhost:5050/profile-upload-multiple"
        enctype="multipart/form-data"
      >
        <div>
          <label>Upload multiple profile picture</label>
          <input type="file" name="profile-files" required multiple />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
}

export default UploadListingPage;
