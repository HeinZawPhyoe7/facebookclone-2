import { Trash2 } from "lucide-react";
import axios from "axios";

const DeletePost = ({postId}: {postId: number}) => {
  const accessToken = localStorage.getItem("accessToken");
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/delete-post/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            
          },
        }
      );
      alert(response.data.message);
      if (response.data.message == "post is deleted") {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post.");
    }
  };

  return (
    <div>
      <div
        className="cursor-pointer bg-red-400 active:bg-red-500 p-0.5 rounded-sm"
        onClick={handleDelete}
      >
        <Trash2 className="text-white" size={15} />
      </div>
    </div>
  );
};

export default DeletePost;
