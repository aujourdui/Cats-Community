import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const UploadComponent = (props) => (
  <form>
    <label>
      File Upload URL:
      <input
        id="urlInput"
        type="text"
        onChange={props.onUrlChange}
        value={props.url}
      />
    </label>
    <ImageUploader
      key="image-uploader"
      withIcon={true}
      singleImage={true}
      withPreview={true}
      label="Maximum size file: 5MB"
      buttonText="Choose an image"
      onChange={props.onImage}
      imgExtension={[(".jpg", "png", ".jpeg")]}
      maxFileSize={5242880}
    />
  </form>
);

const UploadPage = () => {
  const [progress, setProgress] = useState("getUpload");
  const [url, setImageURL] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");

  const onUrlChange = (e) => {
    setImageURL(e.target.value);
  };

  const onImage = (failedImages, successImages) => {
    if (!url) {
      console.log("missing Url");
      setErrorMessage("missing a url to upload to");
      setProgress("uploadError");
      return;
    }

    setProgress("uploading");

    try {
      console.log("successImages", successImages);
    } catch (error) {
      setErrorMessage(error.message);
      setProgress("uploadError");
    }
  };

  const content = () => {
    switch (progress) {
      case "getUpload":
        return (
          <UploadComponent
            onUrlChange={onUrlChange}
            onImage={onImage}
            url={url}
          />
        );
      case "uploading":
        return <h2>Uploading....</h2>;
      case "uploaded":
        return <img src={url} alt="uploaded" />;
      case "uploadError":
        return (
          <>
            <div>Error message = {errorMessage}</div>
            <div>please upload an image</div>
          </>
        );
    }
  };

  return (
    <div className="favorite">
      <h1>This is file upload page</h1>
      {content()}
    </div>
  );
};

export default UploadPage;
