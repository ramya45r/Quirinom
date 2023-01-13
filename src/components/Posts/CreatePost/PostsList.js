import { useEffect } from "react";
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllPostAction } from "../../../redux/slices/Posts/PostSlices";
import { fetchCatagoriesAction } from "../../../redux/slices/category/categorySlice";
import LoadingComponent from "../../../utils/LoadingComponent";
import DateFormatter from "../../../utils/DateFormatter";
import * as DOMPurify from "dompurify";
import { useState } from "react";

export default function PostsList() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostAction(""));
  }, [dispatch]);

  //select post from store
  const posts = useSelector((state) => state?.post);
  const { postLists, loading, appErr, serverErr, likes, dislikes } = posts;

  const users = useSelector((state) => state?.users);
  const { userAuth, profile } = users;
  //User data from store
  const category = useSelector((state) => state?.category);
  const {
    categoryList,
    loading: catLoading,
    appErr: catAppErr,
    serverErr: catServerErr,
  } = category;
  //fetch category
  useEffect(() => {
    dispatch(fetchCatagoriesAction(""));
  }, [dispatch, likes, dislikes]);

  return (
    <>
      <section>
        <div class="py-20 bg-white-100 min-h-screen radius-for-skewed">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-3">
              {/* <div class="mb-8 lg:mb-0 w-full lg:w-1/4 px-3">
                <div class="py-4 px-6 bg-gray-50 shadow rounded border border-gray-300 fixed">
                  <h4 class="mb-4 text-slate-700 font-bold uppercase flex justify-center">
                    Categories
                  </h4>
                  <ul className="overflow-auto h-80">
               
                    {catLoading ? (
                      <LoadingComponent />
                    ) : catAppErr || catServerErr ? (
                      <h1>
                        {catServerErr} {catAppErr}
                      </h1>
                    ) : categoryList?.length <= 0 ? (
                      <h1>No Category Found</h1>
                    ) : (
                      categoryList?.map((category) => (
                        <li>
                          <p
                            onClick={() =>
                              dispatch(fetchAllPostAction(category?.title))
                            }
                            className="cursor-pointer py-2 px-3 mb-4 rounded text-white font-bold bg-gray-700 flex justify-center"
                          >
                            {category?.title}
                          </p>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div> */}
              <div class="w-full lg:w-3/4 px-3">
                {/* Post goes here */}
                {loading ? (
                  <h1>Loading...</h1>
                ) : appErr || serverErr ? (
                  <h1>Err</h1>
                ) : postLists?.length <= 0 ? (
                  <h1 className="text-yellow-400 text-lg text-center">
                    No Post Found
                  </h1>
                ) : (
                  postLists?.map((post) => (
                    <div
                      key={post.id}
                      class="flex flex-wrap bg-gray-400 -mx-3  lg:mb-6"
                    >
                      <div class="mb-10  w-full lg:w-1/4 ">
                        <Link>
                          {/* Post image */}
                          <img
                            class="w-full h-full object-cover rounded"
                            src={post?.image}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="w-full lg:w-3/4 px-3">
                        <Link class="hover:underline">
                          <h3 class="mb-1 text-2xl text-black font-bold font-heading ml-56 mt-20">
                            {/* {capitalizeWord(post?.title)} */}
                            {post?.title}
                          </h3>
                        </Link>
                        <div
                          className="text-black truncate ml-56 mr-40"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post?.description),
                          }}
                        ></div>

                        {/* Read more */}
                        <div className="mt-5">
                          <Link
                            to={`/posts/${post?._id}`}
                            class="inline-flex items-center ml-56 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Read More..
                            <svg
                              aria-hidden="true"
                              class="w-4 h-4 ml-2 -mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </Link>
                        </div>

                        {/* User Avatar */}
                        {/* <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <Link>
                              <img
                                className="h-10 w-10 rounded-full"
                                src={post?.user?.profilePhoto}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <Link
                                to={`/profile/${post?.user?._id}`}
                                className="text-black font-extrabold hover:underline "
                              >
                                {post?.user?.firstName} {post?.user?.lastName}
                              </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-black">
                              <time>
                                <DateFormatter date={post.createdAt}/>
                              </time>
                              
                            </div>
                          </div>
                        </div> */}
                        {/* <p class="text-gray-500">
                             Quisque id sagittis turpis. Nulla sollicitudin rutrum
                             eros eu dictum...
                           </p> */}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
