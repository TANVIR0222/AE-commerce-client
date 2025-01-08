const imageUploadToCloudinary = async (image, imageUpload) => {    
    const formData = new FormData();
    formData.append("file", image); // Cloudinary uses "file" key for uploads
    formData.append("upload_preset", "your_upload_preset"); // Required preset
  
    try {
      const { data } = await imageUpload(formData).unwrap();
      console.log("Upload successful:", data);
      return data;
    } catch (error) {
      console.error("Upload failed:", error);
      throw new Error("Image upload failed"); // Re-throw error for better handling
    }
  };
  

export default imageUploadToCloudinary;
