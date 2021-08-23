export default function Categories() {
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
                      onClick={
                        console.log("Night mode feature is not available yet")
                        /*  UIkit.notification({
                        message:
                          "Hmm...  <strong> Night mode </strong> feature is not available yet. ",
                        pos: "bottom-right", 
                      }) */
                      }
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
          <div className="text-2xl font-semibold mb-3 text-black">
            {" "}
            Browse categories{" "}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-3">
            <a
              href="#"
              className="rounded-md overflow-hidden relative w-full lg:h-56 h-40"
            >
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
            </a>
            <a
              href="#"
              className="rounded-md overflow-hidden relative w-full lg:h-56 h-40"
            >
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
            </a>
            <a
              href="#"
              className="rounded-md overflow-hidden relative w-full lg:h-56 h-40"
            >
              <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
              <img
                src="../assets/images/category/it-and-software.jpg"
                className="absolute w-full h-full object-cover"
                alt=""
              />
              <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                {" "}
                it-and-software{" "}
              </div>
            </a>
            <a
              href="#"
              className="rounded-md overflow-hidden relative w-full lg:h-full h-40 lg:row-span-2"
            >
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
            </a>
            <a
              href="#"
              className="rounded-md overflow-hidden relative w-full lg:h-56 h-40 lg:col-span-2"
            >
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
            </a>
            <a
              href="#"
              className="rounded-md overflow-hidden relative w-full lg:h-56 h-40"
            >
              <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
              <img
                src="../assets/images/category/photography.jpg"
                className="absolute w-full h-full object-cover"
                alt=""
              />
              <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                photography{" "}
              </div>
            </a>
          </div>
          <div className="md:p-7 p-5 bg-white rounded-md shadow lg:mt-10 mt-6">
            <h3 className="md:text-2xl text-xl mt-4 mb-1 font-bold">
              {" "}
              Featured topics{" "}
            </h3>
            <p className="mb-8"> Choose Your Favorite Topic</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2 -m-3">
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="logo-angular"
                    className="text-3xl text-white from-red-600 to-red-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Web Development</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 12 Courses </div>
                      <div>·</div>
                      <div> 156 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="briefcase"
                    className="text-3xl text-white from-blue-600 to-blue-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {" "}
                      Financial Analysis
                    </h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 16 Courses </div>
                      <div>·</div>
                      <div> 523 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="color-wand"
                    className="text-3xl text-white from-purple-600 to-purple-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Graphic Design</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 23 Courses </div>
                      <div>·</div>
                      <div> 356 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="shield-checkmark"
                    className="text-3xl text-white from-yellow-600 to-yellow-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Ethical Hacking</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 12 Courses </div>
                      <div>·</div>
                      <div> 256 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="leaf"
                    className="text-3xl text-white from-green-600 to-green-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Cyber Security</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 34 Courses </div>
                      <div>·</div>
                      <div> 420 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="logo-figma"
                    className="text-3xl text-white from-pink-600 to-pink-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Adobe Target</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 14 Courses </div>
                      <div>·</div>
                      <div> 259K Students</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 -m-3 mt-7">
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="briefcase"
                    className="text-3xl text-white from-blue-600 to-blue-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {" "}
                      Financial Analysis
                    </h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 16 Courses </div>
                      <div>·</div>
                      <div> 523 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="color-wand"
                    className="text-3xl text-white from-purple-600 to-purple-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Graphic Design</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 23 Courses </div>
                      <div>·</div>
                      <div> 356 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="shield-checkmark"
                    className="text-3xl text-white from-yellow-600 to-yellow-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Ethical Hacking</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 12 Courses </div>
                      <div>·</div>
                      <div> 256 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="logo-angular"
                    className="text-3xl text-white from-red-600 to-red-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Web Development</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 12 Courses </div>
                      <div>·</div>
                      <div> 156 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="leaf"
                    className="text-3xl text-white from-green-600 to-green-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Cyber Security</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 34 Courses </div>
                      <div>·</div>
                      <div> 420 Students</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                  <ion-icon
                    name="logo-figma"
                    className="text-3xl text-white from-pink-600 to-pink-400 bg-gradient-to-tl p-2 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg"> Adobe Target</h3>
                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                      <div> 14 Courses </div>
                      <div>·</div>
                      <div> 259K Students</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center mt-9">
              <a
                href="#"
                className="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm"
              >
                {" "}
                More Topics ..
              </a>
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
                <ion-icon name="compass" className="side-icon">
                  {" "}
                </ion-icon>
                <span> Explore</span>
              </a>
            </li>
            <li>
              <a href="courses.html">
                <ion-icon name="play-circle" className="side-icon">
                  {" "}
                </ion-icon>
                <span> Courses</span>
              </a>
            </li>
            <li className="active">
              <a href="categories.html">
                <ion-icon name="albums" className="side-icon">
                  {" "}
                </ion-icon>
                <span> Categories </span>
              </a>
            </li>
            <li>
              <a href="episodes.html">
                <ion-icon name="film" className="side-icon"></ion-icon>
                <span> Episodes </span>
              </a>
            </li>
            <li>
              <a href="books.html">
                <ion-icon name="book" className="side-icon">
                  {" "}
                </ion-icon>
                <span> Books </span>
              </a>
            </li>
            <li>
              <a href="blogs.html">
                <ion-icon name="newspaper" className="side-icon"></ion-icon>
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
