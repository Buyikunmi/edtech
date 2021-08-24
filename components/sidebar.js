import Link from "next/link";

export default function SideBar() {
  const navLinks = [
    { title: "Explore", url: "/explore", iconName: "compass" },
    { title: "Courses", url: "/courses", iconName: "play-circle" },
    { title: "Categories", url: "/categories", iconName: "albums" },
    { title: "episodes", url: "/episodes", iconName: "film" },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_inner" data-simplebar>
          <ul className="side-colored">
            {navLinks.map(({ iconName, title, url }, index) => (
              <li key={index}>
                <Link href={url}>
                  <a>
                    <ion-icon name={iconName} className="side-icon"></ion-icon>
                    <span>{title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="side_links" data-sub-title="Pages">
            <li>
              <a href="page-pricing.html">
                <ion-icon name="card-outline" className="side-icon" /> Pricing
              </a>
            </li>
            <li>
              <a href="page-help.html">
                <ion-icon
                  name="information-circle-outline"
                  className="side-icon"
                />
                Help
              </a>
            </li>
            <li>
              <a href="page-faq.html">
                <ion-icon name="albums-outline" className="side-icon" /> Faq
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="albums-outline" className="side-icon" /> Forum{" "}
                <span className="soon">soon</span>
              </a>
            </li>
            <li>
              <a href="page-term.html">
                <ion-icon name="document-outline" className="side-icon" />
                Term
              </a>
            </li>
            <li>
              <a href="page-privacy.html">
                <ion-icon name="document-text-outline" className="side-icon" />
                Privacy
              </a>
            </li>
            <li>
              <a href="page-setting.html">
                <ion-icon name="settings-outline" className="side-icon" />
                Setting
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
                  <Link href="/user/login">
                    <a href="/user/login">form login </a>
                  </Link>
                </li>
                <li>
                  <Link href="/user/register">
                    <a href="/user/register">form register</a>
                  </Link>
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
      {/* video demo model */}
      <div id="trailer-modal" uk-modal>
        <div className="uk-modal-dialog shadow-lg rounded-md">
          <button
            className="uk-modal-close-default m-2.5"
            type="button"
            uk-close
          />
          <div className="uk-modal-header  rounded-t-md">
            <h4 className="text-lg font-semibold mb-2"> Trailer video </h4>
          </div>
          <div className="embed-video">
            <iframe
              src="../../embed/nOCXXHGMezU.html"
              className="w-full"
              uk-video="automute: true"
              frameBorder={0}
              allowFullScreen
              uk-responsive
            />
          </div>
          <div className="uk-modal-body">
            <h3 className="text-lg font-semibold mb-2">
              Build Responsive Websites
            </h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
