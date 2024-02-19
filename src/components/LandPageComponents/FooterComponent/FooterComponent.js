import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../SvgComponents/LogoSvg/LogoSvg';
import InstagramSvg from '../SvgComponents/InstagramSvg/InstagramSvg';
import TwitterSvg from '../SvgComponents/TwitterSvg/TwitterSvg';
import GithubSvg from '../SvgComponents/GithubSvg/GithubSvg';
import LinkedinSvg from '../SvgComponents/LinkedinSvg/LinkedinSvg';

function FooterComponent() {
  return (
    <footer className="">
      <div className="container-footer-1 flex-start">
        <div className="container-footer-1-item flex-start flex-no-center">
          <div className="mt-3" />
          <div className="mt-1">
            <LogoSvg />
          </div>
          <div className="flex-start mt-1 ">
            <Link to="/">
              <InstagramSvg className="mr-1" />
            </Link>
            <Link to="/">
              <TwitterSvg className="mr-1" />
            </Link>
            <Link to="/">
              <GithubSvg className="mr-1" />
            </Link>
            <Link to="/">
              <LinkedinSvg className="mr-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-footer-mobile overflow-hidden">
        <div>
          <LogoSvg />
        </div>
        <div className="flex-start">
          <div className="flex-start container-footer-mobile-social ">
            <Link to="/" className="mr-1" aria-label="Link Instagram">
              <InstagramSvg className="mr-1" />
            </Link>
            <Link to="/" className="mr-1" aria-label="Link Twitter/X">
              <TwitterSvg className="mr-1" />
            </Link>
            <Link to="/" className="mr-1" aria-label="Link GitHub">
              <GithubSvg className="mr-1" />
            </Link>
            <Link to="/" className="mr-1" aria-label="Link Linkedin">
              <LinkedinSvg className="mr-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-footer-2 flex-start">
        <div className="container-footer-2-item flex-column">
          <div className="">
            <h1 id="title-footer" className="mt-2 text-center">
              LITERIUM
            </h1>
          </div>
          <div className="flex-between">
            <div className="mt-4">
              <h3 className="mg-3">
                <Link to="/">Sobre</Link>
              </h3>
              <h3 className="mg-3">
                <Link to="/">Landing Page</Link>
              </h3>
              <h3 className="mg-3">
                <Link to="/home">Home</Link>
              </h3>
            </div>
            <div className="mt-4">
              <h3 className="mg-3">
                <Link to="/">Sobre</Link>
              </h3>
              <h3 className="mg-3">
                <Link to="/">Landing Page</Link>
              </h3>
              <h3 className="mg-3">
                <Link to="/">Home</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
