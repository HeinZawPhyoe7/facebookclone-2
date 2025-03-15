import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<any>(null);
  const accessToken = localStorage.getItem("accessToken");

  const navgite = useNavigate();

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleCreatePost = async () => {
    const formData = new FormData();
    formData.append("title", name);
    formData.append("description", description);
    formData.append("images", imageFile);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/create-post`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Post successfully created:", response.data);
      if (response.data.message == "success") {
        navgite("/home");
      }
    } catch (error) {
      console.error("Post failed:", error);
    }
  };

  return (
    <div className="flex justify-center mx-auto my-6">
      <div>
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={handleNameChange}
            className="p-3 border border-blue-400 rounded-md shadow-md w-full"
          />
        </div>
        <div className="my-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={handleDescriptionChange}
            className="p-3 border border-blue-400 rounded-md shadow-md w-full"
          />
        </div>
        <div className="my-2">
          <label htmlFor="images">Images</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="p-3 border border-blue-400 rounded-md shadow-md w-full"
          />
        </div>
        <div>
          <button
            className="bg-green-400 cursor-pointer hover:opacity-90 active:bg-green-500 w-full rounded-md text-white p-2"
            onClick={handleCreatePost}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
