export default function Episodes() {
  return (
    <div id="wrapper" className="is-verticle">
      {/*  Header  */}
      <header uk-sticky="true">
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
                    {" "}
                    Learn Angular Fundamentals From beginning to advance lavel
                  </h1>
                  <div className="flex space-x-2 items-center text-sm mt-2">
                    <p className="font-semibold md:block hidden">
                      {" "}
                      Denise Marie{" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
              {" "}
              <ion-icon name="star" className="mr-2" /> Graphic desginer{" "}
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
          {/*  Categories */}
          <div className="sm:my-6 my-3 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold"> Categories </h2>
              <p className="font-medium text-gray-500 leading-6">
                {" "}
                Find a topic by browsing top categories.{" "}
              </p>
            </div>
            <a href="#" className="text-blue-500 sm:block hidden">
              {" "}
              See all{" "}
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
                      {" "}
                      Design{" "}
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
                      {" "}
                      Marketing{" "}
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
                      {" "}
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
                      {" "}
                      Music{" "}
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
                      {" "}
                      Travel{" "}
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
                      {" "}
                      Development{" "}
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
              {" "}
              <i className="icon-feather-chevron-left" />
            </a>
            <a
              className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
              href="#"
              uk-slider-item="next"
            >
              {" "}
              <i className="icon-feather-chevron-right" />
            </a>
          </div>
          <div
            className="tube-card p-4 mt-3"
            uk-toggle="cls: tube-card p-4; mode: media; media: 640"
          >
            <h4 className="py-3 px-5 border-b font-semibold text-grey-700 -mx-4 -mt-3 mb-2">
              {" "}
              <ion-icon name="star" className="mr-2" /> Graphic desginer{" "}
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
                        By <a href="#"> Stella Johnson </a>{" "}
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
                      <p className="text-sm pt-1">
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
            <li>
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
            <li className="active">
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
