import { Link } from "react-router-dom";

import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  TwitterIcon,
} from "../../../components/Icons";

function Footer() {
  return (
    <div className="w-full max-w-screen-2xl text-white bg-black">
      <div className="grid grid-cols-2 gap-8 px-8 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 className="mb-5 text-lg font-bold">HELP & INFORMATION</h2>
          <ul className="text-lg text-gray-500">
            <li className="ct-footer-links">
              <Link to="">Help</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Track order</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Delivery & returns</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Site map</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-lg font-bold">ABOUT 2DAYOUTFIT</h2>
          <ul className="text-lg text-gray-500">
            <li className="ct-footer-links">
              <Link to="">About us</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Careers</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Corporate responsibility</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-lg font-bold">LEGAL</h2>
          <ul className="text-lg text-gray-500">
            <li className="ct-footer-links">
              <Link to="">Privacy Policy</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Licensing</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Terms & Conditions</Link>
            </li>
            <li className="ct-footer-links">
              <Link to="">Site map</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-lg font-bold">FOLLOW US ON</h2>
          <div>
            <ul className="flex">
              <li className="mb-4 pr-4">
                <Link to="https://www.facebook.com/minh.quaan.12/">
                  <FacebookIcon />
                </Link>
              </li>
              <li className="mb-4 pr-4">
                <Link to="https://github.com/MinhQuan124">
                  <GithubIcon />
                </Link>
              </li>
              <li className="mb-4 pr-4">
                <Link to="">
                  <DiscordIcon />
                </Link>
              </li>
              <li className="mb-4 pr-4">
                <Link to="">
                  <TwitterIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2">
        <p className="text-sm text-center py-3">
          © 2025 2DAYOUTFIT. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
