import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState<any>([]);
  const accessToken = localStorage.getItem("accessToken");

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/post-all`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setPosts(response.data.posts);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 pt-6">
        Posts
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-4 gap-x-4 gap-y-6">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="bg-white h-[350px] shadow-lg rounded-lg p-6"
          >
            {post.title && (
              <h2 className="font-semibold text-gray-900 text-sm capitalize">
                {post.title}
              </h2>
            )}
            {post.description && (
              <p className="text-gray-700 mt-2">{post.description}</p>
            )}
            <p className="text-sm text-gray-500 mt-1">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            {post.images && (
              <img
                src={`data:image/jpeg;base64,${post.images.replace(/"/g, "")}`}
                alt="Post"
                className="w-[200px] h-[200px] mt-2 rounded-lg shadow-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
