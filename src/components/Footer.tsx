import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="text-secondary-foreground py-12 relative bg-[#3c83f6]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Saba Umair
                </h3>
                <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                  Freelance Content Writer specializing in SEO-optimized content 
                  that drives results and engages audiences.
                </p>
                <p className="text-sm text-secondary-foreground/60">
                  Words that work for your business.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[{
                  name: 'About Me',
                  id: 'about'
                }, {
                  name: 'Services',
                  id: 'services'
                }, {
                  name: 'Portfolio',
                  id: 'portfolio'
                }, {
                  name: 'Contact',
                  id: 'contact'
                }].map(link => <li key={link.name}>
                      <button onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }} className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200 text-sm">
                        {link.name}
                      </button>
                    </li>)}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-secondary-foreground/80">
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:sabaumair.writes@gmail.com" className="hover:text-secondary-foreground transition-colors duration-200">
                      sabaumair.writes@gmail.com
                    </a>
                  </p>
                  <p className="text-secondary-foreground/80">
                    <span className="font-medium">Phone:</span>{' '}
                    <a href="tel:+92123456789" className="hover:text-secondary-foreground transition-colors duration-200">
                      +92 123 456789
                    </a>
                  </p>
                  <p className="text-secondary-foreground/80">
                    <span className="font-medium">Location:</span> Available Worldwide
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-foreground/20 my-8"></div>

          {/* Bottom Footer */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/60 mb-4 md:mb-0">
              <span>© {currentYear} Saba Umair. Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for amazing clients worldwide.</span>
            </div>

            <div className="text-sm text-secondary-foreground/60">
              Professional • Reliable • Results-Driven
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button initial={{
      opacity: 0,
      scale: 0.8
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.6,
      delay: 0.4
    }} viewport={{
      once: true
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} onClick={scrollToTop} className="absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-card hover:shadow-floating transition-all duration-300 bg-[#fafafb] text-[#3c83f6]">
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>;
};
export default Footer;
