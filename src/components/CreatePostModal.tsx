"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; body: string }) => void;
  post?: { title: string; body: string } | null;
}

const CreatePostModal = ({
  isOpen,
  onClose,
  onSubmit,
  post,
}: CreatePostModalProps) => {
  const { register, handleSubmit, reset } = useForm<{
    title: string;
    body: string;
  }>({
    defaultValues: post || { title: "", body: "" },
  });

  useEffect(() => {
    reset(post || { title: "", body: "" });
  }, [post, reset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center p-5">
      <div className="bg-white p-8 rounded shadow-lg lg:w-[550px] md:w-[500px] w-full">
        <h1 className="text-2xl font-bold mb-4">
          {post ? "Edit Post" : "Create a New Post"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("title")}
              placeholder="Title"
              required
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              {...register("body")}
              placeholder="Body"
              required
              className="w-full p-2 border rounded border-gray-300"
              rows={5}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-900 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
            >
              {post ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
