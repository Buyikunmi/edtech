import nextNprogress from "next-nprogress";

export default function Header() {
  return (
    <>
      <nextNprogress />
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
                      <h4>Learn Angular Beginner to Advanced Fundamentals</h4>
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
                      <h4>Become a Web Developer from Scratch to Advanced</h4>
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
                      <h4>Ultimate Web Developer Course for Beginners 2020</h4>
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
                      <h4>The Complete JavaScript From beginning to advance</h4>
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
                      <h4>Become a Web Developer from Scratch to Advanced</h4>
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
                    Total : <strong> $ 320</strong>
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
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <p>
                          <strong>Adrian Mohani</strong> Like Your Comment On
                          Course
                          <span className="text-link">
                            Javascript Introduction
                          </span>
                        </p>
                        <span className="time-ago"> 2 hours ago </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
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
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> John menathon </strong>
                        <span className="time"> 6:43 PM</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        <img
                          src="../assets/images/avatars/avatar-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Zara Ali </strong>
                        <span className="time">12:43 PM</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        <img
                          src="../assets/images/avatars/avatar-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Mohamed Ali </strong>
                        <span className="time"> Wed</span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        <img
                          src="../assets/images/avatars/avatar-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> John menathon </strong>
                        <span className="time"> Sun </span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        <img
                          src="../assets/images/avatars/avatar-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Zara Ali </strong>
                        <span className="time"> Fri </span>
                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="drop_avatar">
                        <img
                          src="../assets/images/avatars/avatar-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="drop_content">
                        <strong> Mohamed Ali </strong>
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
                      <ion-icon name="rocket-outline" className="is-icon" />
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
    </>
  );
}
