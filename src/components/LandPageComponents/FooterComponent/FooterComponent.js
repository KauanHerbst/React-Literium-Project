import React from 'react';
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
            <a href="/">
              <InstagramSvg className="mr-1" />
            </a>
            <a href="/">
              <TwitterSvg className="mr-1" />
            </a>
            <a href="/">
              <GithubSvg className="mr-1" />
            </a>
            <a href="/">
              <LinkedinSvg className="mr-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-footer-mobile overflow-hidden">
        <div>
          <LogoSvg />
        </div>
        <div className="flex-start">
          <div className="flex-start container-footer-mobile-social ">
            <a href="/" className="mr-1">
              <InstagramSvg className="mr-1" />
            </a>
            <a href="/" className="mr-1">
              <TwitterSvg className="mr-1" />
            </a>
            <a href="/" className="mr-1">
              <GithubSvg className="mr-1" />
            </a>
            <a href="/" className="mr-1">
              <LinkedinSvg className="mr-1" />
            </a>
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
                <a href="/">Sobre</a>
              </h3>
              <h3 className="mg-3">
                <a href="/">Home</a>
              </h3>
              <h3 className="mg-3">
                <a href="/">Contato</a>
              </h3>
            </div>
            <div className="mt-4">
              <h3 className="mg-3">
                <a href="/">Sobre</a>
              </h3>
              <h3 className="mg-3">
                <a href="/">Home</a>
              </h3>
              <h3 className="mg-3">
                <a href="/">Contato</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
