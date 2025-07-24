import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    'SEO Writing', 'Content Strategy', 'Blog Writing', 'Copywriting',
    'Technical Writing', 'Social Media', 'Email Marketing', 'Creative Writing',
    'Editing & Proofreading', 'Research', 'WordPress', 'Analytics'
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Award, label: 'Projects Completed', value: '100+' },
    { icon: TrendingUp, label: 'Years Experience', value: '3+' },
    { icon: CheckCircle, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-medium text-lg mb-4"
            >
              Get to Know Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              About Me
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Crafting Words That Make an Impact
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a passionate freelance content writer with over 3 years of experience, 
                  I specialize in creating compelling, SEO-optimized content that drives results. 
                  My expertise spans across various industries, allowing me to adapt my writing 
                  style to meet diverse client needs.
                </p>
                
                <p>
                  From engaging blog posts that boost organic traffic to persuasive website copy 
                  that converts visitors into customers, I understand the power of well-crafted words. 
                  My approach combines creativity with data-driven insights to ensure every piece 
                  of content serves its intended purpose.
                </p>
                
                <p>
                  I believe in building long-term relationships with my clients by delivering 
                  high-quality work on time, every time. Whether you need technical documentation, 
                  creative storytelling, or strategic content planning, I'm here to help your 
                  brand find its voice and achieve its goals.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Core Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    >
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="bg-card shadow-card rounded-2xl p-6 text-center hover:shadow-floating transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;