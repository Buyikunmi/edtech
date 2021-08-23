export default function Explore() {
  return (
    <div id="wrapper" className="is-verticle">
      {/*  Header  */}
      <header
        className="is-transparent is-dark border-b backdrop-filter backdrop-blur-2xl"
        uk-sticky="cls-inactive: is-dark is-transparent border-b"
      >
        <div className="header_inner">
          <div className="left-side">
            {/* Logo */}
            <div id="logo">
              <a href="explore.html">
                <img src="../assets/images/logo.png" alt="" />
                <img
                  src="../assets/images/logo-light.png"
                  className="logo_inverse"
                  alt=""
                />
                <img
                  src="../assets/images/logo-mobile.png"
                  className="logo_mobile"
                  alt=""
                />
              </a>
            </div>
            {/* icon menu for mobile */}
            <div
              className="triger"
              uk-toggle="target: #wrapper ; cls: is-active"
            ></div>
          </div>
          <div className="right-side">
            {/* Header search box  */}
            <div className="header_search">
              <i className="uil-search-alt" />
              <input
                defaultValue
                type="text"
                className="form-control"
                placeholder=" Quick search for anything.."
                autoComplete="off"
              />
              <div
                uk-drop="mode: click;offset:10"
                className="header_search_dropdown"
              >
                <h4 className="search_title"> Recently </h4>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/avatars/avatar-1.jpg"
                        alt=""
                        className="list-avatar"
                      />
                      <div className="list-name"> Erica Jones </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="list-avatar"
                      />
                      <div className="list-name"> Coffee Addicts </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="list-avatar"
                      />
                      <div className="list-name"> Mountain Riders </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="list-avatar"
                      />
                      <div className="list-name"> Property Rent And Sale</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="list-avatar"
                      />
                      <div className="list-name"> Erica Jones </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* cart */}
              <a href="#" className="header_widgets">
                <ion-icon name="cart-outline" className="is-icon" />
              </a>
              <div uk-drop="mode: click" className="dropdown_cart">
                <h4 className="cart-headline"> My Cart </h4>
                <ul className="dropdown_cart_scrollbar" data-simplebar>
                  <li>
                    <div className="cart_avatar">
                      <img src="../assets/images/courses/img-1.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                      <h4> Learn Angular Beginner to Advanced Fundamentals </h4>
                    </div>
                    <div className="cart_price">
                      <span> $12.99 </span>
                      <button className="type"> Remove</button>
                    </div>
                  </li>
                  <li>
                    <div className="cart_avatar">
                      <img src="../assets/images/courses/img-1.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                      <h4> Become a Web Developer from Scratch to Advanced </h4>
                    </div>
                    <div className="cart_price">
                      <span> $19.99 </span>
                      <button className="type"> Remove</button>
                    </div>
                  </li>
                  <li>
                    <div className="cart_avatar">
                      <img src="../assets/images/courses/img-2.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                      <h4> Angular Fundamentals for Beginner to advance </h4>
                    </div>
                    <div className="cart_price">
                      <span> $12.99 </span>
                      <button className="type"> Remove</button>
                    </div>
                  </li>
                  <li>
                    <div className="cart_avatar">
                      <img src="../assets/images/courses/img-3.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                      <h4> Ultimate Web Developer Course for Beginners 2020</h4>
                    </div>
                    <div className="cart_price">
                      <span> $14.99 </span>
                      <button className="type"> Remove</button>
                    </div>
                  </li>
                  <li>
                    <div className="cart_avatar">
                      <img src="../assets/images/courses/img-4.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                      <h4>
                        {" "}
                        The Complete JavaScript From beginning to advance{" "}
                      </h4>
                    </div>
                    <div className="cart_price">
                      <span> $16.99 </span>
                      <button className="type"> Remove</button>
                    </div>
                  </li>
                  <li>
                    <div className="cart_avatar">
                      <img src="../assets/images/courses/img-5.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                      <h4> Become a Web Developer from Scratch to Advanced</h4>
                    </div>
                    <div className="cart_price">
                      <span> $12.99 </span>
                      <button className="type"> Remove</button>
                    </div>
                  </li>
                </ul>
                <div className="cart_footer">
                  <p> Subtotal : $ 320 </p>
                  <h1>
                    {" "}
                    Total : <strong> $ 320</strong>{" "}
                  </h1>
                </div>
              </div>
              {/* notification */}
              <a href="#" className="header_widgets">
                <ion-icon name="mail-outline" className="is-icon" />
              </a>
              <div uk-drop="mode: click" className="header_dropdown">
                <div className="drop_headline">
                  <h4>Notifications </h4>
                  <div className="btn_action">
                    <div className="btn_action">
                      <a href="#">
                        <ion-icon
                          name="settings-outline"
                          uk-tooltip="title: Notifications settings ; pos: left"
                        />
                      </a>
                      <a href="#">
                        <ion-icon
                          name="checkbox-outline"
                          uk-tooltip="title: Mark as read all ; pos: left"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="dropdown_scrollbar" data-simplebar>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <p>
                          {" "}
                          <strong>Adrian Mohani</strong> Like Your Comment On
                          Course
                          <span className="text-link">
                            Javascript Introduction{" "}
                          </span>
                        </p>
                        <span className="time-ago"> 2 hours ago </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <p>
                          <strong>Stella Johnson</strong> Replay Your Comments
                          in
                          <span className="text-link">
                            Programming for Games
                          </span>
                        </p>
                        <span className="time-ago"> 9 hours ago </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <p>
                          <strong>Alex Dolgove</strong> Added New Review In
                          Course
                          <span className="text-link">
                            Full Stack PHP Developer
                          </span>
                        </p>
                        <span className="time-ago"> 12 hours ago </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <p>
                          <strong>Jonathan Madano</strong> Shared Your
                          Discussion On Course
                          <span className="text-link">Css Flex Box </span>
                        </p>
                        <span className="time-ago"> Yesterday </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <a href="#" className="see-all">
                  See all
                </a>
              </div>
              {/* messages */}
              <a href="#" className="header_widgets">
                <ion-icon name="notifications-outline" className="is-icon" />
                <span> 2 </span>
              </a>
              <div uk-drop="mode: click" className="header_dropdown">
                <div className="drop_headline">
                  <h4>Messages </h4>
                  <div className="btn_action">
                    <a href="#">
                      <ion-icon
                        name="settings-outline"
                        uk-tooltip="title: Message settings ; pos: left"
                      />
                    </a>
                    <a href="#">
                      <ion-icon
                        name="checkbox-outline"
                        uk-tooltip="title: Mark as read all ; pos: left"
                      />
                    </a>
                  </div>
                </div>
                <ul className="dropdown_scrollbar" data-simplebar>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> John menathon </strong>{" "}
                        <span className="time"> 6:43 PM</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Zara Ali </strong>{" "}
                        <span className="time">12:43 PM</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Mohamed Ali </strong>{" "}
                        <span className="time"> Wed</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> John menathon </strong>{" "}
                        <span className="time"> Sun </span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Zara Ali </strong>{" "}
                        <span className="time"> Fri </span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        {" "}
                        <img
                          src="../assets/images/avatars/avatar-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Mohamed Ali </strong>{" "}
                        <span className="time">1 Week ago</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <a href="#" className="see-all">
                  See all
                </a>
              </div>
              {/* profile */}
              <a href="#">
                <img
                  src="../assets/images/avatars/placeholder.png"
                  className="header_widgets_avatar"
                  alt=""
                />
              </a>
              <div
                uk-drop="mode: click;offset:5"
                className="header_dropdown profile_dropdown"
              >
                <ul>
                  <li>
                    <a href="#" className="user">
                      <div className="user_avatar">
                        <img
                          src="../assets/images/avatars/avatar-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="user_name">
                        <div> Stella Johnson </div>
                        <span> @Johnson </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <a href="#" className="is-link">
                      <ion-icon name="rocket-outline" className="is-icon" />{" "}
                      <span> Upgrade Membership</span>
                    </a>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <a href="page-setting.html">
                      <ion-icon
                        name="person-circle-outline"
                        className="is-icon"
                      />
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="group-feed.html">
                      <ion-icon name="card-outline" className="is-icon" />
                      Subscriptions
                    </a>
                  </li>
                  <li>
                    <a href="group-feed.html">
                      <ion-icon name="color-wand-outline" className="is-icon" />
                      My Billing
                    </a>
                  </li>
                  <li>
                    <a href="group-feed.html">
                      <ion-icon name="settings-outline" className="is-icon" />
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <a
                      href="#"
                      id="night-mode"
                      className="btn-night-mode"
                      onclick="UIkit.notification({ message: 'Hmm...  <strong> Night mode </strong> feature is not available yet. ' , pos: 'bottom-right'  })"
                    >
                      <ion-icon name="moon-outline" className="is-icon" />
                      Night mode
                      <span className="btn-night-mode-switch">
                        <span className="uk-switch-button" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="group-feed.html">
                      <ion-icon name="log-out-outline" className="is-icon" />
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Contents */}
      <div className="main_content">
        {/* Slideshow */}
        <div
          className="uk-position-relative uk-visible-toggle overflow-hidden lg:-mt-20"
          tabIndex={-1}
          uk-slideshow="animation: scale ;min-height: 200; max-height: 450 ;autoplay: t rue"
        >
          <ul className="uk-slideshow-items rounded">
            <li>
              <div
                className="uk-position-cover"
                uk-slideshow-parallax="scale: 1.2,1.2,1"
              >
                <img
                  src="../assets/images/hero-1.jpg"
                  className="object-cover"
                  alt=""
                  uk-cover
                />
              </div>
              <div className="container relative md:p-20 md:mt-7 p-5 h-full">
                <div
                  uk-slideshow-parallax="scale: 1,1,0.8"
                  className="flex flex-col justify-center h-full w-full space-y-3"
                >
                  <h1
                    uk-slideshow-parallax="y: 100,0,0"
                    className="lg:text-4xl text-2xl text-white font-semibold"
                  >
                    {" "}
                    Learn from the best
                  </h1>
                  <p
                    uk-slideshow-parallax="y: 150,0,0"
                    className="text-base text-white font-medium pb-4 lg:w-1/2"
                  >
                    {" "}
                    Choose from 130,000 online video courses with new additions
                    published every month{" "}
                  </p>
                  <a
                    uk-slideshow-parallax="y: 200,0,50"
                    href="#"
                    className="bg-opacity-90 bg-white py-2.5 rounded-md text-base text-center w-32"
                  >
                    {" "}
                    Get Started{" "}
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div
                className="uk-position-cover"
                uk-slideshow-parallax="scale: 1.2,1.2,1"
              >
                <img
                  src="../assets/images/hero-2.jpg"
                  className="object-cover"
                  alt=""
                  uk-cover
                />
              </div>
              <div className="container relative md:p-20 md:mt-7 p-5 h-full">
                <div
                  uk-slideshow-parallax="scale: 1,1,0.8"
                  className="flex flex-col justify-center h-full w-full space-y-3"
                >
                  <h1
                    uk-slideshow-parallax="y: 100,0,0"
                    className="lg:text-4xl text-2xl text-white font-semibold"
                  >
                    {" "}
                    Learn from the best
                  </h1>
                  <p
                    uk-slideshow-parallax="y: 150,0,0"
                    className="text-base text-white font-medium pb-4 lg:w-1/2"
                  >
                    {" "}
                    Choose from 130,000 online video courses with new additions
                    published every month{" "}
                  </p>
                  <a
                    uk-slideshow-parallax="y: 200,0,0"
                    href="#"
                    className="bg-opacity-90 bg-white py-2.5 rounded-md text-base text-center w-32"
                  >
                    {" "}
                    Get Started{" "}
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="uk-slideshow-nav uk-dotnav absolute bottom-0 left-0 m-7 lg:flex hidden" />
        </div>
        <div className="container">
          {/*  course feature */}
          <div className="sm:my-4 my-3 flex items-end justify-between pt-3">
            <h2 className="text-2xl font-semibold"> Featured Classes </h2>
          </div>
          <div className="relative -mt-3" uk-slider="finite: true">
            <div className="uk-slider-container px-1 py-3">
              <ul className="uk-slider-items uk-child-width-1-1@m uk-grid">
                <li>
                  <div className="bg-white shadow-sm rounded-lg uk-transition-toggle md:flex">
                    <div className="md:w-5/12 md:h-60 h-40 overflow-hidden rounded-l-lg relative">
                      <img
                        src="../assets/images/courses/img-6.jpg"
                        alt=""
                        className="w-full h-full absolute inset-0 object-cover"
                      />
                      <img
                        src="../assets/images/icon-play.svg"
                        className="w-16 h-16 uk-position-center uk-transition-fade"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 md:p-6 p-4">
                      <div className="font-semibold line-clamp-2 md:text-xl md:leading-relaxed">
                        Learn How to Build Responsive Web Design Essentials
                        HTML5 CSS3 and Bootstrap{" "}
                      </div>
                      <div className="line-clamp-2 mt-2 md:block hidden">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam
                      </div>
                      <div className="font-semibold mt-3"> John Michael </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex space-x-2 items-center text-sm pt-2">
                          <div> 13 hours </div>
                          <div>·</div>
                          <div> 32 lectures </div>
                        </div>
                        <div className="text-lg font-semibold"> $14.99 </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bg-white shadow-sm rounded-lg uk-transition-toggle md:flex">
                    <div className="md:w-5/12 md:h-60 h-40 overflow-hidden rounded-l-lg relative">
                      <img
                        src="../assets/images/courses/img-1.jpg"
                        alt=""
                        className="w-full h-full absolute inset-0 object-cover"
                      />
                      <img
                        src="../assets/images/icon-play.svg"
                        className="w-16 h-16 uk-position-center uk-transition-fade"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 md:p-6 p-4">
                      <div className="font-semibold line-clamp-2 md:text-xl md:leading-relaxed">
                        {" "}
                        Learn JavaScript and Express to become a professional
                        JavaScript developer.{" "}
                      </div>
                      <div className="line-clamp-2 mt-2 md:block hidden">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam
                      </div>
                      <div className="font-semibold mt-3"> John Michael </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex space-x-2 items-center text-sm pt-2">
                          <div> 13 hours </div>
                          <div>·</div>
                          <div> 32 lectures </div>
                        </div>
                        <div className="text-lg font-semibold"> $14.99 </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <a
              className="absolute bg-white uk-position-center-left -ml-3 flex items-center justify-center p-2 rounded-full shadow-md text-xl w-11 h-11 z-10 dark:bg-gray-800 dark:text-white"
              href="#"
              uk-slider-item="previous"
            >
              {" "}
              <i className="icon-feather-chevron-left" />
            </a>
            <a
              className="absolute bg-white uk-position-center-right -mr-3 flex items-center justify-center p-2 rounded-full shadow-md text-xl w-11 h-11 z-10 dark:bg-gray-800 dark:text-white"
              href="#"
              uk-slider-item="next"
            >
              {" "}
              <i className="icon-feather-chevron-right" />
            </a>
          </div>
          {/*  slider courses */}
          <div className="sm:my-4 my-3 flex items-end justify-between pt-3">
            <h2 className="text-2xl font-semibold"> Popular Classes</h2>
            <a href="#" className="text-blue-500 sm:block hidden">
              {" "}
              See all{" "}
            </a>
          </div>
          <div className="mt-3">
            <h4
              className="py-3 border-b font-semibold text-grey-700  mx-1 mb-4"
              hidden
            >
              {" "}
              <ion-icon name="star" /> Featured today{" "}
            </h4>
            {/*  slider */}
            <div className="mt-3">
              <h4
                className="py-3 border-b font-semibold text-grey-700  mx-1 mb-4"
                hidden
              >
                {" "}
                <ion-icon name="star" /> Featured today{" "}
              </h4>
              <div className="relative" uk-slider="finite: true">
                <div className="uk-slider-container px-1 py-3">
                  <ul className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small uk-grid">
                    <li>
                      <a href="course-intro.html" className="uk-link-reset">
                        <div className="card uk-transition-toggle">
                          <div className="card-media h-40">
                            <div className="card-media-overly" />
                            <img
                              src="../assets/images/courses/img-1.jpg"
                              alt=""
                              className
                            />
                            <span className="icon-play" />
                          </div>
                          <div className="card-body p-4">
                            <div className="font-semibold line-clamp-2">
                              {" "}
                              Learn JavaScript and Express to become a
                              professional JavaScript developer.{" "}
                            </div>
                            <div className="flex space-x-2 items-center text-sm pt-3">
                              <div> 13 hours</div>
                              <div> · </div>
                              <div> 32 lectures </div>
                            </div>
                            <div className="pt-1 flex items-center justify-between">
                              <div className="text-sm font-medium">
                                {" "}
                                John Michael{" "}
                              </div>
                              <div className="text-lg font-semibold">
                                {" "}
                                $14.99{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="course-intro.html" className="uk-link-reset">
                        <div className="card uk-transition-toggle">
                          <div className="card-media h-40">
                            <div className="card-media-overly" />
                            <img
                              src="../assets/images/courses/img-2.jpg"
                              alt=""
                              className
                            />
                            <span className="icon-play" />
                          </div>
                          <div className="card-body p-4">
                            <div className="font-semibold line-clamp-2">
                              Learn Angular Fundamentals From beginning to
                              advance{" "}
                            </div>
                            <div className="flex space-x-2 items-center text-sm pt-3">
                              <div> 26 hours</div>
                              <div>·</div>
                              <div> 26 lectures </div>
                            </div>
                            <div className="pt-1 flex items-center justify-between">
                              <div className="text-sm font-medium">
                                {" "}
                                Stella Johnson{" "}
                              </div>
                              <div className="text-lg font-semibold">
                                {" "}
                                $18.99
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="course-intro.html" className="uk-link-reset">
                        <div className="card uk-transition-toggle">
                          <div className="card-media h-40">
                            <div className="card-media-overly" />
                            <img
                              src="../assets/images/courses/img-3.jpg"
                              alt=""
                              className
                            />
                            <span className="icon-play" />
                          </div>
                          <div className="card-body p-4">
                            <div className="font-semibold line-clamp-2">
                              Responsive Web Design Essentials HTML5 CSS3
                              Bootstrap{" "}
                            </div>
                            <div className="flex space-x-2 items-center text-sm pt-3">
                              <div> 18 hours</div>
                              <div>·</div>
                              <div> 42 lectures </div>
                            </div>
                            <div className="pt-1 flex items-center justify-between">
                              <div className="text-sm font-medium">
                                {" "}
                                Monroe Parker{" "}
                              </div>
                              <div className="text-lg font-semibold">
                                {" "}
                                $11.99{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="course-intro.html" className="uk-link-reset">
                        <div className="card uk-transition-toggle">
                          <div className="card-media h-40">
                            <div className="card-media-overly" />
                            <img
                              src="../assets/images/courses/img-1.jpg"
                              alt=""
                              className
                            />
                            <span className="icon-play" />
                          </div>
                          <div className="card-body p-4">
                            <div className="font-semibold line-clamp-2">
                              {" "}
                              Learn JavaScript and Express to become a
                              professional JavaScript developer.{" "}
                            </div>
                            <div className="flex space-x-2 items-center text-sm pt-3">
                              <div> 32 hours</div>
                              <div>·</div>
                              <div> lec 4 </div>
                            </div>
                            <div className="pt-1 flex items-center justify-between">
                              <div className="text-sm font-medium">
                                {" "}
                                Jesse Stevens{" "}
                              </div>
                              <div className="text-lg font-semibold">
                                {" "}
                                $29.99{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <a
                    className="absolute bg-white top-1/4 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                    href="#"
                    uk-slider-item="previous"
                  >
                    {" "}
                    <i className="icon-feather-chevron-left" />
                  </a>
                  <a
                    className="absolute bg-white top-1/4 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                    href="#"
                    uk-slider-item="next"
                  >
                    {" "}
                    <i className="icon-feather-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  books  */}
          <div className="sm:my-4 my-3 flex items-end justify-between pt-3">
            <h2 className="text-2xl font-semibold"> Latest Books </h2>
            <a href="#" className="text-blue-500 sm:block hidden">
              {" "}
              See all{" "}
            </a>
          </div>
          <div className="relative" uk-slider="finite: true">
            <div className="uk-slider-container px-1 py-3">
              <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid text-sm font-medium text-center">
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book4.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate">HTML Breaker</div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book5.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate"> CSS Master </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book1.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate"> Vue.js Basics </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book2.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate"> HTML5 &amp; CSS3 </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book3.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate"> Learn CSS </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book4.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate">HTML Breaker</div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <a href="book-description.html">
                      <img
                        src="../assets/images/book/book5.jpg"
                        alt=""
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 truncate"> CSS Master </div>
                    </a>
                  </div>
                </li>
              </ul>
              <a
                className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                href="#"
                uk-slider-item="previous"
              >
                {" "}
                <i className="icon-feather-chevron-left" />
              </a>
              <a
                className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                href="#"
                uk-slider-item="next"
              >
                {" "}
                <i className="icon-feather-chevron-right" />
              </a>
            </div>
          </div>
          {/*  episcodes  */}
          {/* this is user toggle media to remove unwanted class for small devices more check docs uikit on https://getuikit.com/docs/toggle. */}
          <div
            className="tube-card p-4 mt-3"
            uk-toggle="cls: tube-card p-4; mode: media; media: 640"
          >
            <h4 className="py-3 px-5 border-b font-semibold text-grey-700 -mx-4 -mt-3 mb-4">
              {" "}
              Latest Episodes{" "}
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
                        {" "}
                        The PHP Singleton class
                      </a>
                      <p className="text-sm pt-1">
                        {" "}
                        By <a href="#"> Stella Johnson</a>{" "}
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
                        {" "}
                        Larafel $ fliepond{" "}
                      </a>
                      <p href="episodes-watch.html" className="text-sm pt-1">
                        {" "}
                        By <a href="#"> Jesse Stevens </a>{" "}
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
                        {" "}
                        Creating a Laravel Package{" "}
                      </a>
                      <p className="text-sm pt-1">
                        {" "}
                        By <a href="#"> John Michael </a>{" "}
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
                        {" "}
                        Creating sticky in HTML{" "}
                      </a>
                      <p className="text-sm pt-1">
                        {" "}
                        By <a href="#"> Monroe Parker </a>{" "}
                      </p>
                    </div>
                  </li>
                </ul>
                <a
                  className="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                  href="#"
                  uk-slider-item="previous"
                >
                  {" "}
                  <ion-icon name="chevron-back-outline" />{" "}
                </a>
                <a
                  className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                  href="#"
                  uk-slider-item="next"
                >
                  {" "}
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="sidebar">
        <div className="sidebar_inner" data-simplebar>
          <ul className="side-colored">
            <li className="active">
              <a href="explore.html">
                <ion-icon
                  name="compass"
                  className="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500"
                ></ion-icon>
                <span> Explore</span>
              </a>
            </li>
            <li>
              <a href="courses.html">
                <ion-icon
                  name="play-circle"
                  className="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500"
                ></ion-icon>
                <span> Courses</span>
              </a>
            </li>
            <li>
              <a href="categories.html">
                <ion-icon
                  name="albums"
                  className="bg-gradient-to-br from-green-300 p-1 rounded-md side-icon text-opacity-80 text-white to-green-500"
                ></ion-icon>
                <span> Categories </span>
              </a>
            </li>
            <li>
              <a href="episodes.html">
                <ion-icon
                  name="film"
                  className="bg-gradient-to-br from-pink-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500"
                ></ion-icon>
                <span> Episodes </span>
              </a>
            </li>
            <li>
              <a href="books.html">
                <ion-icon
                  name="book"
                  className="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500"
                ></ion-icon>
                <span> Books </span>
              </a>
            </li>
            <li>
              <a href="blogs.html">
                <ion-icon
                  name="newspaper"
                  className="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500"
                ></ion-icon>
                <span> Articles</span>
              </a>
            </li>
          </ul>
          <ul className="side_links" data-sub-title="Pages">
            <li>
              <a href="page-pricing.html">
                {" "}
                <ion-icon name="card-outline" className="side-icon" /> Pricing
              </a>
            </li>
            <li>
              <a href="page-help.html">
                {" "}
                <ion-icon
                  name="information-circle-outline"
                  className="side-icon"
                />{" "}
                Help{" "}
              </a>
            </li>
            <li>
              <a href="page-faq.html">
                {" "}
                <ion-icon
                  name="albums-outline"
                  className="side-icon"
                /> Faq{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <ion-icon
                  name="albums-outline"
                  className="side-icon"
                /> Forum <span className="soon">soon</span>{" "}
              </a>
            </li>
            <li>
              <a href="page-term.html">
                {" "}
                <ion-icon
                  name="document-outline"
                  className="side-icon"
                /> Term{" "}
              </a>
            </li>
            <li>
              <a href="page-privacy.html">
                {" "}
                <ion-icon
                  name="document-text-outline"
                  className="side-icon"
                />{" "}
                Privacy{" "}
              </a>
            </li>
            <li>
              <a href="page-setting.html">
                {" "}
                <ion-icon name="settings-outline" className="side-icon" />{" "}
                Setting{" "}
              </a>
            </li>
            <li>
              <a href="#"> Development</a>
              <ul>
                <li>
                  <a href="development-elements.html"> Elements</a>
                </li>
                <li>
                  <a href="development-components.html"> Compounents </a>
                </li>
                <li>
                  <a href="development-plugins.html"> Plugins </a>
                </li>
                <li>
                  <a href="development-icons.html"> Icons </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"> Authentication</a>
              <ul>
                <li>
                  <a href="form-login.html">form login </a>
                </li>
                <li>
                  <a href="form-register.html">form register</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="side_foot_links">
            <a href="#">About</a>
            <a href="#">Blog </a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Contact Us </a>
            <a href="#">Developer</a>
            <a href="#">Terms of service</a>
          </div>
        </div>
        <div
          className="side_overly"
          uk-toggle="target: #wrapper ; cls: is-collapse is-active"
        />
      </div>
    </div>
  );
}
