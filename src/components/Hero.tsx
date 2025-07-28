import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
      <section
          id="hero"
          className="min-h-screen flex items-center relative overflow-hidden"
      >
          <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 gradient-hero"></div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="max-w-4xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <motion.div
                          initial={{
                              opacity: 0,
                              x: -50,
                          }}
                          animate={{
                              opacity: 1,
                              x: 0,
                          }}
                          transition={{
                              duration: 0.8,
                          }}
                          className="text-center lg:text-left"
                      >
                          <motion.p
                              initial={{
                                  opacity: 0,
                                  y: 20,
                              }}
                              animate={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{
                                  delay: 0.2,
                                  duration: 0.6,
                              }}
                              className="text-primary font-medium text-lg mb-4"
                          >
                              Hello, I'm
                          </motion.p>

                          <motion.h1
                              initial={{
                                  opacity: 0,
                                  y: 30,
                              }}
                              animate={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{
                                  delay: 0.3,
                                  duration: 0.8,
                              }}
                              className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                          >
                              Saba Umair
                          </motion.h1>

                          <motion.div
                              initial={{
                                  opacity: 0,
                                  y: 20,
                              }}
                              animate={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{
                                  delay: 0.4,
                                  duration: 0.6,
                              }}
                              className="mb-8"
                          >
                              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-2">
                                  Freelance Content Writer
                              </h2>
                              <h3 className="text-lg lg:text-xl font-medium text-[#3c83f6]">
                                  SEO Blog Specialist | Words that Work
                              </h3>
                          </motion.div>

                          <motion.p
                              initial={{
                                  opacity: 0,
                                  y: 20,
                              }}
                              animate={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{
                                  delay: 0.5,
                                  duration: 0.6,
                              }}
                              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                          >
                              Transforming ideas into compelling content that
                              drives engagement, boosts SEO rankings, and
                              converts readers into customers.
                          </motion.p>

                          <motion.div
                              initial={{
                                  opacity: 0,
                                  y: 20,
                              }}
                              animate={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{
                                  delay: 0.6,
                                  duration: 0.6,
                              }}
                              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                          >
                              <Button
                                  onClick={() => scrollToSection("contact")}
                                  size="lg"
                                  className="text-primary-foreground shadow-card group bg-[5#f8fafc] bg-[#3c83f6]"
                              >
                                  Hire Me
                                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>

                              <Button
                                  onClick={() => scrollToSection("portfolio")}
                                  variant="outline"
                                  size="lg"
                                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              >
                                  View My Work
                                  <Download className="ml-2 h-4 w-4" />
                              </Button>
                          </motion.div>
                      </motion.div>

                      {/* Right Content - Floating Elements */}
                      <motion.div
                          initial={{
                              opacity: 0,
                              x: 50,
                          }}
                          animate={{
                              opacity: 1,
                              x: 0,
                          }}
                          transition={{
                              delay: 0.7,
                              duration: 0.8,
                          }}
                          className="hidden lg:flex justify-center items-center relative"
                      >
                          <div className="relative">
                              {/* Main Card */}
                              <motion.div
                                  animate={{
                                      y: [0, -10, 0],
                                  }}
                                  transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                  }}
                                  className="bg-card shadow-floating rounded-2xl p-8 max-w-sm"
                              >
                                  <div className="text-center">
                                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                              <img
                                                  src="/su-logo.png"
                                                  alt="Saba Umair Logo"
                                                  className="h-16 w-16 object-cover"
                                              />
                                      </div>
                                      <h3 className="font-heading text-xl font-semibold mb-2">
                                          Content Strategy
                                      </h3>
                                      <p className="text-muted-foreground text-sm">
                                          Crafting words that resonate with your
                                          audience and drive meaningful
                                          engagement.
                                      </p>
                                  </div>
                              </motion.div>

                              {/* Floating Stats */}
                              <motion.div
                                  animate={{
                                      y: [0, 10, 0],
                                  }}
                                  transition={{
                                      duration: 2.5,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: 0.5,
                                  }}
                                  className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-card"
                              >
                                  100+ Projects
                              </motion.div>

                              <motion.div
                                  animate={{
                                      y: [0, -8, 0],
                                  }}
                                  transition={{
                                      duration: 3.5,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: 1,
                                  }}
                                  className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-card"
                              >
                                  SEO Expert
                              </motion.div>
                          </div>
                      </motion.div>
                  </div>
              </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
              initial={{
                  opacity: 0,
              }}
              animate={{
                  opacity: 1,
              }}
              transition={{
                  delay: 1.2,
                  duration: 0.6,
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => scrollToSection("about")}
          >
              <motion.div
                  animate={{
                      y: [0, 10, 0],
                  }}
                  transition={{
                      duration: 1.5,
                      repeat: Infinity,
                  }}
                  className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
              >
                  <motion.div
                      animate={{
                          y: [0, 12, 0],
                      }}
                      transition={{
                          duration: 1.5,
                          repeat: Infinity,
                      }}
                      className="w-1 h-3 bg-primary rounded-full mt-2"
                  />
              </motion.div>
          </motion.div>
      </section>
  );
};
export default Hero;