import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Post {
  id: number;
  content: string;
  timestamp: string;
  replies: Reply[];
}

interface Reply {
  id: number;
  content: string;
  timestamp: string;
}

const CommunityForum = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleString(),
      replies: []
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Community Forum</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmitPost} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share your thoughts
            </label>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            <Send className="w-4 h-4 mr-2" />
            Post Anonymously
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">{post.timestamp}</span>
              </div>
            </div>
            <p className="mt-3 text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;