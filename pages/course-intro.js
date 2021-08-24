export default function CourseIntro() {
  return (
    <div>
      {/* course preview details */}
      <div className="bg-gradient-to-tr from-pink-500 to-red-500 text-white">
        <div className="container p-0">
          <div className="lg:flex items-center lg:space-x-12 lg:py-10 lg:px-8 p-4">
            <div className="lg:w-4/12">
              <div className="w-full h-40 overflow-hidden rounded-lg relative lg:mb-0 mb-4">
                <img
                  src="../assets/images/courses/img-1.jpg"
                  alt=""
                  className="w-full h-full absolute inset-0 object-cover"
                />
                <a
                  href="#trailer-modal"
                  className="uk-position-center"
                  uk-toggle
                >
                  <img
                    src="../assets/images/icon-play.svg"
                    className="w-16 h-16"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-8/12">
              <h1 className="lg:leading-10 lg:text-2xl text-white text-xl leading-8 font-semibold">
                The Complete JavaScript For Beginners
              </h1>
              <p className="line-clamp-2 mt-3 md:block hidden">
                Master JavaScript with the most complete course! Projects
                Excellent course. we explain the core concepts in javascript
                that are usually glossed over in other..
              </p>
              <ul className="flex text-gray-100 gap-4 mt-4 mb-1">
                <li className="flex items-center">
                  <span className="avg bg-yellow-500 mr-2 px-2 rounded text-white font-semiold">
                    4.9
                  </span>
                  <div className="star-rating text-yellow-200">
                    <ion-icon name="star" /> <ion-icon name="star" />
                    <ion-icon name="star" /> <ion-icon name="star" />
                    <ion-icon name="star-half" />
                  </div>
                </li>
                <li>
                  <ion-icon name="people-circle-outline" /> 1200 Enerolled
                </li>
              </ul>
              <ul className="lg:flex text-gray-100">
                <li>
                  Created by
                  <a
                    href="#"
                    className="text-white fond-bold hover:underline hover:text-white"
                  >
                    Stella Johnson
                  </a>
                </li>
                <span className="lg:block hidden mx-3 text-2xl">·</span>
                <li> Last updated 10/2019</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  course tabs */}
      <div
        className="bg-white border-b z-20 mb-4 overflow-hidden"
        uk-sticky="media: 992; offset:70"
      >
        <div className="mcontainer py-0 lg:px-20 flex justify-between items-center">
          <nav className="cd-secondary-nav nav-smal l flex-1">
            <ul
              className="space-x-3"
              uk-scrollspy-nav="closest: li; scroll: true"
            >
              <li>
                <a href="#Overview" uk-scroll>
                  Overview
                </a>
              </li>
              <li>
                <a href="#curriculum" uk-scroll>
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#faq" uk-scroll>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#announcement">Announcement</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-3">
            <a
              href="#"
              className="flex items-center justify-center h-9 px-6 rounded-md bg-gray-100"
            >
              Add to Wishlist
            </a>
            <a
              href="/course-watch"
              className="flex items-center justify-center h-9 px-6 rounded-md bg-blue-600 text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
      <div className="container p-0">
        <div className="space-y-5 lg:w-9/12 mx-auto">
          {/* course description */}
          <div className="tube-card p-5 lg:p-8" id="Overview">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore
                  magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                  ut aliquip ex ea commodo consequat
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  What You’ll Learn
                </h3>
                <ul className="grid md:grid-cols-2">
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Setting up the environment
                  </li>
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Advanced HTML Practices
                  </li>
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Build a portfolio website
                  </li>
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Responsive Designs
                  </li>
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Understand HTML Programming
                  </li>
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Code HTML
                  </li>
                  <li>
                    <i className="uil-check text-xl font-bold mr-2" />
                    Start building beautiful websites
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Requirements</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Any computer will work: Windows, macOS or Linux</li>
                  <li>Basic programming HTML and CSS.</li>
                  <li>Basic/Minimal understanding of JavaScript</li>
                </ul>
              </div>
              <div>
                <h3> Here is exactly what we cover in this course: </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Nam liber tempor cum soluta
                  nobis eleifend option congue nihil imperdiet doming id quod
                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
          {/* course Curriculum */}
          <div id="curriculum">
            <h3 className="mb-4 text-xl font-semibold lg:mb-5">
              Course Curriculum
            </h3>
            <ul
              uk-accordion="multiple: true"
              className="tube-card p-4 divide-y space-y-3"
            >
              <li className="uk-open">
                <a
                  className="uk-accordion-title text-md mx-2 font-semibold"
                  href="#"
                >
                  <div className="mb-1 text-sm font-medium">Section 1</div>
                  Html Introduction
                </a>
                <div className="uk-accordion-content mt-3 text-base">
                  <ul className="course-curriculum-list font-medium">
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Introduction
                      <span className="text-sm ml-auto"> 4 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      What is HTML
                      <span className="text-sm ml-auto"> 5 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      What is a Web page?
                      <span className="text-sm ml-auto"> 8 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Your First Web Page
                      <a
                        href="#trailer-modal"
                        className="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs"
                        uk-toggle
                      >
                        Preview
                      </a>
                      <span className="text-sm ml-auto"> 4 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Brain Streak
                      <span className="text-sm ml-auto"> 5 min </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="pt-2">
                <a
                  className="uk-accordion-title text-md mx-2 font-semibold"
                  href="#"
                >
                  <div className="mb-1 text-sm font-medium">Section 2</div>
                  Your First webpage
                </a>
                <div className="uk-accordion-content mt-3 text-base">
                  <ul className="course-curriculum-list font-medium">
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Headings
                      <span className="text-sm ml-auto"> 4 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Paragraphs
                      <span className="text-sm ml-auto"> 5 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Emphasis and Strong Tag
                      <span className="text-sm ml-auto"> 8 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Brain Streak
                      <a
                        href="#trailer-modal"
                        className="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs"
                        uk-toggle
                      >
                        Preview
                      </a>
                      <span className="text-sm ml-auto"> 4 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Live Preview Feature
                      <span className="text-sm ml-auto"> 5 min </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="pt-2">
                <a
                  className="uk-accordion-title text-md mx-2 font-semibold"
                  href="#"
                >
                  <div className="mb-1 text-sm font-medium">Section 3</div>
                  Build Complete Webste
                </a>
                <div className="uk-accordion-content mt-3 text-base">
                  <ul className="course-curriculum-list font-medium">
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      The paragraph tag
                      <span className="text-sm ml-auto"> 4 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      The break tag
                      <span className="text-sm ml-auto"> 5 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Headings in HTML
                      <span className="text-sm ml-auto"> 8 min </span>
                    </li>
                    <li className=" hover:bg-gray-100 p-2 flex rounded-md">
                      <ion-icon name="play-circle" className="text-2xl mr-2" />
                      Bold, Italics Underline
                      <a
                        href="#trailer-modal"
                        className="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs"
                        uk-toggle
                      >
                        Preview
                      </a>
                      <span className="text-sm ml-auto"> 4 min </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* course Faq */}
          <div className="tube-card p-5 lg:p-8" id="faq">
            <h3 className="text-xl font-semibold mb-3 lg:mb-5">Course Faq</h3>
            <ul uk-accordion="multiple: true" className="divide-y space-y-3">
              <li className="bg-gray-100 px-4 py-3 rounded-md uk-open">
                <a
                  className="uk-accordion-title font-semibold text-base"
                  href="#"
                >
                  Html Introduction
                </a>
                <div className="uk-accordion-content mt-3">
                  <p>
                    The primary goal of this quick start guide is to introduce
                    you to Unreal Engine 4`s (UE4) development environment. By
                    the end of this guide, you`ll know how to set up and develop
                    C++ Projects in UE4. This guide shows you how to create a
                    new Unreal Engine project, add a new C++ class to it,
                    compile the project, and add an instance of a new class to
                    your level. By the time you reach the end of this guide,
                    you`ll be able to see your programmed Actor floating above a
                    table in the level.
                  </p>
                </div>
              </li>
              <li className="bg-gray-100 px-4 py-3 rounded-md">
                <a
                  className="uk-accordion-title font-semibold text-base"
                  href="#"
                >
                  Your First webpage
                </a>
                <div className="uk-accordion-content mt-3">
                  <p>
                    The primary goal of this quick start guide is to introduce
                    you to Unreal Engine 4`s (UE4) development environment. By
                    the end of this guide, you`ll know how to set up and develop
                    C++ Projects in UE4. This guide shows you how to create a
                    new Unreal Engine project, add a new C++ class to it,
                    compile the project, and add an instance of a new class to
                    your level. By the time you reach the end of this guide,
                    you`ll be able to see your programmed Actor floating above a
                    table in the level.
                  </p>
                </div>
              </li>
              <li className="bg-gray-100 px-4 py-3 rounded-md">
                <a
                  className="uk-accordion-title font-semibold text-base"
                  href="#"
                >
                  Some Special Tags
                </a>
                <div className="uk-accordion-content mt-3">
                  <p>
                    The primary goal of this quick start guide is to introduce
                    you to Unreal Engine 4`s (UE4) development environment. By
                    the end of this guide, you`ll know how to set up and develop
                    C++ Projects in UE4. This guide shows you how to create a
                    new Unreal Engine project, add a new C++ class to it,
                    compile the project, and add an instance of a new class to
                    your level. By the time you reach the end of this guide,
                    you`ll be able to see your programmed Actor floating above a
                    table in the level.
                  </p>
                </div>
              </li>
              <li className="bg-gray-100 px-4 py-3 rounded-md">
                <a
                  className="uk-accordion-title font-semibold text-base"
                  href="#"
                >
                  Html Introduction
                </a>
                <div className="uk-accordion-content mt-3">
                  <p>
                    The primary goal of this quick start guide is to introduce
                    you to Unreal Engine 4`s (UE4) development environment. By
                    the end of this guide, you`ll know how to set up and develop
                    C++ Projects in UE4. This guide shows you how to create a
                    new Unreal Engine project, add a new C++ class to it,
                    compile the project, and add an instance of a new class to
                    your level. By the time you reach the end of this guide,
                    you`ll be able to see your programmed Actor floating above a
                    table in the level.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* course Announcement */}
          <div id="announcement" className="tube-card p-5 lg:p-8">
            <h3 className="text-xl font-semibold lg:mb-5">Announcement</h3>
            <div className="flex items-center gap-x-4 mb-5">
              <img
                src="../assets/images/avatars/avatar-4.jpg"
                alt=""
                className="rounded-full shadow w-12 h-12"
              />
              <div>
                <h4 className="-mb-1 text-base  font-semibold">
                  Stella Johnson
                </h4>
                <span className="text-sm">
                  Instructor
                  <span className="text-gray-500"> 1 year ago </span>
                </span>
              </div>
            </div>
            <h4 className="leading-8 text-xl">
              Nam liber tempor cum soluta nobis eleifend option congue imperdiet
              doming id quod mazim placerat facer possim assum.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Nam liber tempor cum soluta nobis eleifend option
              congue nihil imperdiet doming id quod mazim placerat facer possim
              assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
          {/* course Reviews */}
          <div id="reviews" className="tube-card p-5">
            <h3 className="text-xl font-semibold mb-3"> Reviews (4610) </h3>
            <div className="flex space-x-5 mb-8">
              <div className="lg:w-1/4 w-full">
                <div className="bg-blue-100 p-6 rounded-md border border-blue-200 text-center shadow-xs">
                  <h1 className="leading-none text-6xl"> 4.8</h1>
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h5 className="text-lg mb-0 mt-2 text-blue-800">
                    Course Rating
                  </h5>
                </div>
              </div>
              <div className="w-2/4 hidden lg:flex flex-col justify-center">
                <div className="space-y-5">
                  <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                    <div className="w-11/12 h-3 rounded-lg bg-gray-800"></div>
                  </div>
                  <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                    <div className="w-4/5 h-3 rounded-lg bg-gray-800"></div>
                  </div>
                  <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                    <div className="w-3/5 h-3 rounded-lg bg-gray-800"></div>
                  </div>
                  <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                    <div className="w-3/6 h-3 rounded-lg bg-gray-800"></div>
                  </div>
                  <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                    <div className="w-1/3 h-3 rounded-lg bg-gray-800"></div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 hidden lg:flex flex-col justify-center">
                <div className="space-y-1">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-2"> 95 %</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-2"> 85 %</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-2"> 60 %</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-2"> 50 %</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-2"> 35 %</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 my-5">
              <div className="bg-gray-50 border flex gap-x-4 p-4 relative rounded-md">
                <img
                  src="../assets/images/avatars/avatar-4.jpg"
                  alt=""
                  className="rounded-full shadow w-12 h-12"
                />
                <div className="flex justify-center items-center absolute right-5 top-6 space-x-1 text-yellow-500">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div>
                  <h4 className="text-base m-0 font-semibold">
                    Stella Johnson
                  </h4>
                  <span className="text-gray-700 text-sm">
                    14th, April 2021
                  </span>
                  <p className="mt-3 md:ml-0 -ml-16">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 border flex gap-x-4 p-4 relative rounded-md">
                <div className="flex justify-center items-center absolute right-5 top-6 space-x-1 text-yellow-500">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" className="text-gray-300" />
                </div>
                <img
                  src="../assets/images/avatars/avatar-2.jpg"
                  alt=""
                  className="rounded-full shadow w-12 h-12"
                />
                <div>
                  <h4 className="text-base m-0 font-semibold">Alex Dolgove</h4>
                  <span className="text-gray-700 text-sm">16th, May 2021</span>
                  <p className="mt-3 md:ml-0 -ml-16">
                    elit, sed diam ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam ut laoreet dolore
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 border flex gap-x-4 p-4 relative rounded-md lg:ml-16">
                <div className="flex justify-center items-center absolute right-5 top-6 space-x-1 text-yellow-500">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" className="text-gray-300" />
                </div>
                <img
                  src="../assets/images/avatars/avatar-3.jpg"
                  alt=""
                  className="rounded-full shadow w-12 h-12"
                />
                <div>
                  <h4 className="text-base m-0 font-semibold">Trap Nation</h4>
                  <span className="text-gray-700 text-sm">16th, May 2021</span>
                  <p className="mt-3 md:ml-0 -ml-16">
                    elit, sed diam ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam ut laoreet dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-9">
              <a
                href="#"
                className="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm"
              >
                More Comments ..
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
