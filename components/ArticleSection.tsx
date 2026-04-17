"use client";

import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Understanding and Preventing Glaucoma: A Detailed Guide",
    description: "Glaucoma is a leading cause of blind worldwide, yet many....",
    image: "/doctorimages/article-01.webp",
    date: { day: "16", month: "April" },
    category: "Treatments",
    categoryColor: "bg-cyan-500",
    link: "/blog/understanding-glaucoma",
  },
  {
    id: 2,
    title: "Understanding and Preventing Glaucoma: A Detailed Guide",
    description: "Discover the intersection of technology and neurology, transforming....",
    image: "/doctorimages/article-02.webp",
    date: { day: "17", month: "April" },
    category: "Neurology",
    categoryColor: "bg-cyan-500",
    link: "/blog/neurology-technology",
  },
];

export default function RecentBlogsSection() {
  return (
    <section className="article-section bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
   
        <div className="section-header section-header-one text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Recent Blogs
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>
          <h2 className="section-title mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Stay Updated With Our <span className="text-[#2f86ff]">Latest Articles</span>
          </h2>
        </div>

        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="article-item rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              
              <div className="article-img relative overflow-hidden">
                <Link href={post.link}>
                  <div className="relative h-64 w-full overflow-hidden md:h-72 lg:h-80">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </Link>
                
                <div className="date-icon absolute bottom-4   bg-white px-3 py-2 text-center ">
                  <span className="block text-2xl font-bold text-[#2f86ff]">{post.date.day}</span>
                  <span className="block text-xs font-medium text-slate-600">{post.date.month}</span>
                </div>
              </div>

             
              <div className="article-info p-5 md:p-6">
               
                <span className={`inline-block rounded-full ${post.categoryColor} px-3 py-1 text-xs font-semibold text-white mb-3`}>
                  {post.category}
                </span>
                
              
                <h3 className="custom-title mb-2 text-xl font-bold text-slate-900 transition-colors hover:text-[#2f86ff] md:text-2xl">
                  <Link href={post.link}>
                    {post.title}
                  </Link>
                </h3>
                
          
                <p className="text-sm text-slate-600 md:text-base">
                  {post.description}
                </p>
                
                
                
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
}