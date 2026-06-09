import React from 'react';
import { ArrowUpRight, Settings } from 'lucide-react';

const BlogSection = () => {
    const posts = [
  {
    title: "The Future of Smart Manufacturing and Automation",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Innovations Driving Industrial Growth Worldwide",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
];
return(
    <section className="bg-white py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="text-orange-500" size={20} />
            <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">
               Latest Blog
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-5xl leading-tight text-gray-900">
              Insights from our
              <br />
              <span className="font-bold">latest blogs</span>
            </h2>
            <p className="text-gray-600">
             Stay updated with the latest trends, innovations, and expert
            insights in the manufacturing and industrial sectors.
            </p>
          </div>
        </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="group">
                {/* Image Container */}
                <div className="h-[400px] w-full rounded-[2rem] overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title and Button */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                  <button className="flex-shrink-0 p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
);
};
export default BlogSection;