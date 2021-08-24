export default function CourseWatch() {
  return (
    <div id="wrapper" className="course-watch">
      <div className=" h-screen flex justify-center items-center">
        <ul className="uk-switcher w-full " id="video_tabs">
          <li>
            {/* to autoplay video uk-video="automute: true" */}
            <div className="embed-video">
              <iframe
                src="../../embed/9gTw2EDkaDQ-1.html"
                frameBorder={0}
                uk-video="automute: true"
                allowFullScreen
                uk-responsive
              />
            </div>
          </li>
          <li>
            <div className="embed-video">
              <iframe
                src="../../embed/dDn9uw7N9Xg-1.html"
                frameBorder={0}
                allowFullScreen
                uk-responsive
              />
            </div>
          </li>
          <li>
            <div className="embed-video">
              <iframe
                src="../../embed/CGSdK7FI9MY-1.html"
                frameBorder={0}
                allowFullScreen
                uk-responsive
              />
            </div>
          </li>
          <li>
            <div className="embed-video">
              <iframe
                src="../../embed/4I1WgJz_lmA-1.html"
                frameBorder={0}
                allowFullScreen
                uk-responsive
              />
            </div>
          </li>
          <li>
            <div className="embed-video">
              <iframe
                src="../../embed/dDn9uw7N9Xg-1.html"
                frameBorder={0}
                allowFullScreen
                uk-responsive
              />
            </div>
          </li>
          <li>
            <div className="embed-video">
              <iframe
                src="../../embed/CPcS4HtrUEU-1.html"
                frameBorder={0}
                allowFullScreen
                uk-responsive
              />
            </div>
          </li>
        </ul>
      </div>
      {/* This is the modal */}
      <div id="modal-example" style={{ marginLeft: "22.5rem" }} uk-modal>
        <div className="uk-modal-dialog uk-modal-body rounded-md shadow-xl">
          <button
            className="absolute block top-0 right-0 m-6 rounded-full bg-gray-300 p-2 uk-modal-close"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-sm mb-2"> Section 2</div>
          <h2 className="mb-5 font-semibold text-2xl"> Your First webpage</h2>
          <p className="text-base">
            Do You want to skip the rest of this chapter and chumb to next
            chapter.
          </p>
          <div className="text-right  pt-3 mt-3">
            <a
              href="#"
              className="py-2 inline-block px-8 rounded-md hover:bg-gray-200 uk-modal-close"
            >
              Stay
            </a>
            <a
              href="#"
              className="py-2 inline-block px-8 rounded-md bg-blue-600 text-white"
            >
              Continue
            </a>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="sidebar bg-white">
        {/* slide_menu for mobile */}
        <span
          className="btn-close-mobi right-3 left-auto"
          uk-toggle="target: #wrapper ; cls: is-active"
        />
        {/* back to home link */}
        <div className="flex justify-between lg:-ml-1 mt-1 mr-2">
          <a
            href="course-intro-1.html"
            className="flex items-center text-blue-500"
          >
            <ion-icon
              name="chevron-back-outline"
              className="md:text-lg text-2xl"
            />
            <span className="text-sm md:inline hidden"> back</span>
          </a>
        </div>
        {/* title */}
        <h1 className="lg:text-2xl text-lg font-bold mt-2 line-clamp-2">
          Learn Responsive Web Design Essentials
        </h1>
        <nav className="cd-secondary-nav nav-small extanded w-auto lg:block hidden">
          <ul uk-switcher="connect: #course-tabs; animation: uk-animation-fade">
            <li>
              <a href="#" className="lg:px-2">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="lg:px-2">
                Notes
              </a>
            </li>
            <li>
              <a href="#" className="lg:px-2">
                Faq
              </a>
            </li>
          </ul>
        </nav>
        <hr className="-mx-6 lg:block hidden" />
        {/* sidebar list */}
        <div className="sidebar_inner" data-simplebar>
          <div className="uk-switcher" id="course-tabs">
            <div id="curriculum">
              <div uk-accordion="multiple: true" className="divide-y space-y-3">
                <div className="pt-2 uk-open">
                  <a
                    className="uk-accordion-title text-md mx-2 font-semibold"
                    href="#"
                  >
                    <div className="mb-1 text-sm font-medium">Section 1</div>
                    Html Introduction
                  </a>
                  <div className="uk-accordion-content mt-3">
                    <ul
                      className="course-curriculum-list"
                      uk-switcher="connect: #video_tabs; animation: uk-animation-fade"
                    >
                      <li>
                        <a href="#">
                          Introduction <span className="hidden"> 4 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          What is HTML <span className="hidden"> 5 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          What is a Web page?
                          <span className="hidden"> 8 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Your First Web Page
                          <span className="hidden"> 4 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Brain Streak <span className="hidden"> 5 min </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-2 uk-open">
                  <a
                    className="uk-accordion-title text-md mx-2 font-semibold"
                    href="#"
                  >
                    <div className="mb-1 text-sm font-medium">Section 2</div>
                    Your First webpage
                  </a>
                  <div className="uk-accordion-content mt-3">
                    <ul className="course-curriculum-list">
                      <li>
                        <a href="#modal-example" uk-toggle>
                          Headings
                          <span> 4 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#modal-example" uk-toggle>
                          Paragraphs
                          <span> 5 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#modal-example" uk-toggle>
                          Emphasis and Strong Tag
                          <span> 8 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#modal-example" uk-toggle>
                          Brain Streak
                          <span> 4 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#modal-example" uk-toggle>
                          Live Preview Feature
                          <span> 5 min </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    className="uk-accordion-title text-md mx-2 font-semibold"
                    href="#"
                  >
                    <div className="mb-1 text-sm font-medium">Section 3</div>
                    Build Complete Webste
                  </a>
                  <div className="uk-accordion-content mt-3">
                    <ul className="course-curriculum-list">
                      <li>
                        <a href="#">
                          The paragraph tag
                          <span className="hidden"> 4 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          The break tag
                          <span className="hidden"> 5 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Headings in HTML
                          <span className="hidden"> 8 min </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Bold, Italics Underline
                          <span className="hidden"> 4 min </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*  Overview */}
            <div className="space-y-6 px-2 py-6">
              <div>
                <h3 className="text-lg font-semibold mb-1"> Description </h3>
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
                <ul>
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
                <h3 className="text-lg font-semibold mb-1"> Requirements</h3>
                <ul className="list-disc ml-5 space-y-1 mt-3">
                  <li>Any computer will work: Windows, macOS or Linux</li>
                  <li>Basic programming HTML and CSS.</li>
                  <li>Basic/Minimal understanding of JavaScript</li>
                </ul>
              </div>
            </div>
            {/*  Announcements */}
            <div className="px-2 py-6">
              <h3 className="text-xl font-semibold mb-3"> Announcement </h3>
              <div className="flex items-center gap-x-4 mb-5">
                <img
                  src="../assets/images/avatars/avatar-4-2.jpg"
                  alt=""
                  className="rounded-full shadow w-10 h-10"
                />
                <div>
                  <h4 className="-mb-1 text-base"> Stella Johnson</h4>
                  <span className="text-sm">
                    Instructor
                    <span className="text-gray-500"> 1 year ago </span>
                  </span>
                </div>
              </div>
              <h4 className="leading-8 text-xl">
                Nam liber tempor cum soluta nobis eleifend
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolo sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci ta ifend nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        {/* overly for mobile */}
        <div
          className="side_overly"
          uk-toggle="target: #wrapper ; cls: is-collapse is-active"
        />
      </div>
    </div>
  );
}
