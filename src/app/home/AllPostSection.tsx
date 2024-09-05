"use client";

import CreatePostModal from "@/components/CreatePostModal";
import DeleteConfirmationModal from "@/components/DeletconfirmationModal";
import { Button } from "@/components/ui/button";
import { getPosts, createPost, deletePost, updatePost } from "@/services/api";
import { Post } from "@/types";
import { useEffect, useState } from "react";

const AllPostSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data as Post[]);
    };
    fetchPosts();
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle delete post
  const handleDelete = async (postId: number) => {
    await deletePost(postId);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    setSelectedPost(null);
  };

  // Handle edit post
  const handleEdit = (post: Post) => {
    setSelectedPost(post);
    setCreateModalOpen(true);
  };

  // Handle Create or Edit Post submission
  const handleSubmit = async (data: { title: string; body: string }) => {
    if (selectedPost) {
      // Update the post
      await updatePost(selectedPost.id, data);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === selectedPost.id ? { ...post, ...data } : post
        )
      );
    } else {
      // Create a new post
      const newPost = await createPost(data);
      if (!newPost.id) {
        newPost.id = Date.now(); // Assign temporary ID if needed
      }
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    }
    setCreateModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold mb-5 text-center">
        All Posts
      </h1>

      <div className="flex justify-between items-center lg:mb-8 md:mb-7 mb-6 gap-5">
        <Button
          className="px-4 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded"
          onClick={() => setCreateModalOpen(true)}
        >
          Create New Post
        </Button>
        <div className="">
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded border-gray-300"
          />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-5 border border-gray-300 rounded-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <Button
                onClick={() => handleEdit(post)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  setSelectedPost(post);
                  setDeleteModalOpen(true);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
          setSelectedPost(null);
        }}
        onSubmit={handleSubmit}
        post={selectedPost}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={() => handleDelete(selectedPost?.id as number)}
        itemName={selectedPost?.title || "Post"}
      />
    </div>
  );
};

export default AllPostSection;
