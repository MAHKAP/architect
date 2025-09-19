import React from "react";
import { Link } from "react-router-dom";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Importance of RCC in Modern Architecture",
    date: "Feb 5, 2025",
    author: "Admin",
    image: "/architect/blog/rcc1.jpg",
    excerpt:
      "RCC (Reinforced Cement Concrete) plays a vital role in creating durable, long-lasting structures. Learn why it's the backbone of construction.",
    content:
      "Full blog content here... You can expand this section to show more detailed information about RCC applications, innovations, and safety practices."
  },
  {
    id: 2,
    title: "Top 5 Mistakes to Avoid in Structural Design",
    date: "Jan 20, 2025",
    author: "Admin",
    image: "/architect/blog/rcc2.jpg",
    excerpt:
      "Designing structures requires precision. Here are the top 5 mistakes architects and consultants should avoid when working with RCC.",
    content: "Full blog content here..."
  },
  {
    id: 3,
    title: "Future of Sustainable RCC Construction",
    date: "Dec 10, 2024",
    author: "Admin",
    image: "/architect/blog/rcc3.jpg",
    excerpt:
      "Sustainability is key in construction today. Discover how RCC structures are evolving to meet eco-friendly standards.",
    content: "Full blog content here..."
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-green-600">Blog</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {post.date} • {post.author}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-green-700 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
