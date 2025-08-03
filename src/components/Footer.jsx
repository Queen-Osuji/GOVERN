import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-purple-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-20">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400 mb-4">
              VXP<span className="text-white">.</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Pioneering the digital frontier with cutting-edge AI solutions and premium digital services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[ 'About', 'Digital Shop'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-purple-400 transition-all cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div id="mc_embed_shell">
              <div id="mc_embed_signup">
              <form action="https://gmail.us20.list-manage.com/subscribe/post?u=eac40d3f212691cc35c33b745&amp;id=fa7ab41afe&amp;f_id=008b85e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                  <div id="mc_embed_signup_scroll">
                    <div className="w-full flex flex-col gap-2">
                      <input type="email" name="EMAIL" className="required email w-full bg-purple-900/30 border border-purple-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none" id="mce-EMAIL" required="" defaultValue="" />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <input type="text" name="b_eac40d3f212691cc35c33b745_fa7ab41afe" tabIndex="-1" defaultValue="" />
                    </div>
                    <div className="py-5">
                      <div className="flex">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer" value="Subscribe" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VXP & Verve. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms-and-conditions" className="underline text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Terms and Conditions</a> |
            <a href="/privacy-policy" className="underline ml-2  text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Privacy Policy</a>
            {/* <p className="underline ml-2 text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Cookie Policy</p> */}
          </div>
        </div>
            <p className="text-xs text-center mt-8 text-purple-400">Powered by VXP – Creating the Future with Intelligence™</p>
      </div>
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;