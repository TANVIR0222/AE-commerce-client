import React from 'react';
import { blogsData } from '../../../utils/data';

const SingleBlogs = () => {
    return (
        <div>
            <div className="w-full mx-3 my-10 md:my-12 lg:my-16">
          {
            blogsData.map((post, index) => (
                <div key={index+1} className="mx-auto  rounded-lg">
                  {/* Image with Hover Effect */}
                  <div className="mb-6">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={post.images[0]?.url}
                        alt={post.images[0]?.description}
                        className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md transform transition-transform duration-1000 hover:scale-110 ease-in-out"
                      />
                    </div>
                    {/* Title and Author */}
                  <header className="my-6">
                    <h1 className=" text-[24px] md:lg-[30px] lg:text-[35px] font-medium text-textPrimary">
                      {post.title}
                    </h1>
                    <div className="text-gray-600 text-sm mt-2">
                      <span className="text-[15px] font-normal text-textPrimary">By {post.author.name}</span> |{" "}
                      <span className="text-[10px] font-normal text-textPrimary">
                        {new Date(post.published_date).toDateString()}
                      </span>
                    </div>
                  </header>

                  {/* Categories and Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className=" font-light text-[14px] bg-textPrimary  text-white px-2 py-1.5 hover:bg-primary hover:duration-700  rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                    <p className="text-[15px] font-medium text-textPrimary mt-2">
                      {post.images[0]?.description}
                    </p>
                  </div>

                  {/* Content */}
                  <article>
                    <p className="mb-4 text-textPrimary">
                      {post.content.introduction}
                    </p>
                    <p className="mb-4 text-textPrimary">{post.content.body}</p>
                    <p className="text-textPrimary">{post.content.conclusion}</p>
                  </article>

                  {/* Comments Section */}
                  <section className="mt-8">
                    <h2 className="text-[21px] font-medium text-gray-800 mb-4">
                      Comments
                    </h2>
                    {post.comments.length > 0 ? (
                      post.comments.map((comment) => (
                        <div
                          key={comment.timestamp}
                          className="mb-4 p-4  bg-[#f2efef] rounded-md shadow-sm"
                        >
                          <div className="text-gray-800 font-medium">
                            {comment.user}
                          </div>
                          <p className="text-gray-700">{comment.comment}</p>
                          <span className="text-sm text-gray-500">
                            {new Date(comment.timestamp).toLocaleString()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No comments yet. Be the first to comment!
                      </p>
                    )}
                  </section>
                </div>
              ))}
        </div>
        </div>
    );
};

export default SingleBlogs;