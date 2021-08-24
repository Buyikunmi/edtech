export default function Episodes() {
  return (
    <>
      <div id="wrapper" className="is-verticle">
        {/* Main Contents */}

        <div className="container">
          <h1 className="text-2xl font-semibold mb-5"> Episodes </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 mb-5">
            <a href="episodes-watch.html" className="col-span-2 row-span-2">
              <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-full h-60 shadow-sm">
                <img
                  src="../assets/images/blog/img-5.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-5 text-white z-20 text-opacity-90 backdrop-filter backdrop-blur-lg">
                  <h1 className="font-bold lg:text-2xl text-xl text-white mb-1 line-clamp-2">
                    Learn Angular Fundamentals From beginning to advance lavel
                  </h1>
                  <div className="flex space-x-2 items-center text-sm mt-2">
                    <p className="font-semibold md:block hidden">
                      Denise Marie
                    </p>
                    <div className="md:block hidden">·</div>
                    <div> 27 weeks ago</div>
                    <div className="md:block hidden">·</div>
                    <div> 156.9K views</div>
                  </div>
                </div>
                <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10" />
              </div>
            </a>
            <a href="episodes-watch.html">
              <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle">
                <img
                  src="../assets/images/episodes/img-2.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base">
                  The PHP Singleton class
                </div>
                <img
                  src="../assets/images/icon-play.svg"
                  className="w-12 h-12 uk-position-center uk-transition-fade -mt-4"
                  alt=""
                />
                <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10" />
              </div>
            </a>
            <a href="episodes-watch.html">
              <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle">
                <img
                  src="../assets/images/episodes/img-3.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base">
                  Creating sticky in HTML
                </div>
                <img
                  src="../assets/images/icon-play.svg"
                  className="w-12 h-12 uk-position-center uk-transition-fade -mt-4"
                  alt=""
                />
                <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10" />
              </div>
            </a>
            <a href="episodes-watch.html">
              <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle">
                <img
                  src="../assets/images/episodes/img-4.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base">
                  Larafel $ fliepond
                </div>
                <img
                  src="../assets/images/icon-play.svg"
                  className="w-12 h-12 uk-position-center uk-transition-fade -mt-4"
                  alt=""
                />
                <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10" />
              </div>
            </a>
            <a href="episodes-watch.html">
              <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle">
                <img
                  src="../assets/images/episodes/img-1.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base">
                  Creating Website Pure CSS
                </div>
                <img
                  src="../assets/images/icon-play.svg"
                  className="w-12 h-12 uk-position-center uk-transition-fade -mt-4"
                  alt=""
                />
                <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10" />
              </div>
            </a>
          </div>
          {/* this is user toggle media to remove unwanted class for small devices more check docs uikit on https://getuikit.com/docs/toggle. */}
          <div
            className="tube-card p-4 mt-3"
            uk-toggle="cls: tube-card p-4; mode: media; media: 640"
          >
            <h4 className="py-3 px-5 border-b font-semibold text-grey-700 -mx-4 -mt-3 mb-2">
              <ion-icon name="star" className="mr-2" /> Graphic desginer
            </h4>
            <div className="relative -mx-1" uk-slider="finite: true">
              <div className="uk-slider-container md:px-1 px-2 py-3">
                <ul className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2 uk-grid-small uk-grid">
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-2.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        The PHP Singleton class
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> Stella Johnson</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-4.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        Larafel $ fliepond
                      </a>
                      <p href="episodes-watch.html" className="text-sm pt-1">
                        By <a href="#"> Jesse Stevens </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-1.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        Creating a Laravel Package
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> John Michael </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-3.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        Creating sticky in HTML
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> Monroe Parker </a>
                      </p>
                    </div>
                  </li>
                </ul>
                <a
                  className="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                  href="#"
                  uk-slider-item="previous"
                >
                  <ion-icon name="chevron-back-outline" />
                </a>
                <a
                  className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                  href="#"
                  uk-slider-item="next"
                >
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </div>
            </div>
          </div>
          {/*  Categories */}
          <div className="sm:my-6 my-3 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold"> Categories </h2>
              <p className="font-medium text-gray-500 leading-6">
                Find a topic by browsing top categories.
              </p>
            </div>
            <a href="#" className="text-blue-500 sm:block hidden">
              See all
            </a>
          </div>
          <div className="relative -mt-3" uk-slider="finite: true">
            <div className="uk-slider-container px-1 py-3">
              <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                <li>
                  <div className="rounded-md overflow-hidden relative w-full h-36">
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src="../assets/images/category/design.jpg"
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      Design
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rounded-md overflow-hidden relative w-full h-36">
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src="../assets/images/category/marketing.jpg"
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      Marketing
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rounded-md overflow-hidden relative w-full h-36">
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src="../assets/images/category/it-and-software.jpg"
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      Software
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rounded-md overflow-hidden relative w-full h-36">
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src="../assets/images/category/music.jpg"
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      Music
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rounded-md overflow-hidden relative w-full h-36">
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src="../assets/images/category/business.jpg"
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      Travel
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rounded-md overflow-hidden relative w-full h-36">
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src="../assets/images/category/development.jpg"
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      Development
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <a
              className="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
              href="#"
              uk-slider-item="previous"
            >
              <i className="icon-feather-chevron-left" />
            </a>
            <a
              className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
              href="#"
              uk-slider-item="next"
            >
              <i className="icon-feather-chevron-right" />
            </a>
          </div>
          <div
            className="tube-card p-4 mt-3"
            uk-toggle="cls: tube-card p-4; mode: media; media: 640"
          >
            <h4 className="py-3 px-5 border-b font-semibold text-grey-700 -mx-4 -mt-3 mb-2">
              <ion-icon name="star" className="mr-2" /> Graphic desginer
            </h4>
            <div className="relative -mx-1" uk-slider="finite: true">
              <div className="uk-slider-container md:px-1 px-2 py-3">
                <ul className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2 uk-grid-small uk-grid">
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-2.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        The PHP Singleton class
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> Stella Johnson </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-4.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        Larafel $ fliepond
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> Jesse Stevens </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-1.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        Creating a Laravel Package
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> John Michael </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="episodes-watch.html">
                      <div className="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                        <img
                          src="../assets/images/episodes/img-3.jpg"
                          alt=""
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                          12:21
                        </span>
                        <img
                          src="../assets/images/icon-play.svg"
                          className="w-12 h-12 uk-position-center"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="pt-3">
                      <a
                        href="episodes-watch.html"
                        className="font-semibold line-clamp-2"
                      >
                        Creating sticky in HTML
                      </a>
                      <p className="text-sm pt-1">
                        By <a href="#"> Monroe Parker </a>
                      </p>
                    </div>
                  </li>
                </ul>
                <a
                  className="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                  href="#"
                  uk-slider-item="previous"
                >
                  <ion-icon name="chevron-back-outline" />
                </a>
                <a
                  className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                  href="#"
                  uk-slider-item="next"
                >
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
