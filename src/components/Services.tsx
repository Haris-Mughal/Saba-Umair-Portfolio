import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Globe, 
  ShoppingBag, 
  MessageCircle, 
  BookOpen, 
  Megaphone, 
  Mail, 
  FileText, 
  Edit3 
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Search,
      title: "SEO Blog Posts",
      description: "Research-driven, keyword-optimized blog posts that rank high on search engines and engage readers.",
      features: ["Keyword research", "SEO optimization", "Engaging content", "Analytics tracking"]
    },
    {
      icon: Globe,
      title: "Website Copy",
      description: "Compelling website content including home, about, services, and contact pages that convert visitors.",
      features: ["Homepage copy", "About pages", "Service descriptions", "Contact forms"]
    },
    {
      icon: ShoppingBag,
      title: "Product Descriptions",
      description: "Persuasive product descriptions that highlight benefits and drive sales for e-commerce businesses.",
      features: ["Feature highlights", "Benefit-focused", "SEO-friendly", "Conversion-optimized"]
    },
    {
      icon: MessageCircle,
      title: "Social Media Captions",
      description: "Engaging social media content that builds brand awareness and drives audience engagement.",
      features: ["Platform-specific", "Hashtag research", "Brand voice", "Call-to-actions"]
    },
    {
      icon: BookOpen,
      title: "Creative Writing",
      description: "Original stories, poems, and creative content that captivates readers and showcases creativity.",
      features: ["Short stories", "Poetry", "Creative essays", "Character development"]
    },
    {
      icon: Megaphone,
      title: "Copywriting",
      description: "High-converting sales pages, ad copy, and marketing materials that drive action and results.",
      features: ["Sales pages", "Ad copy", "Landing pages", "CTAs"]
    },
    {
      icon: Mail,
      title: "Email Newsletters",
      description: "Engaging email campaigns that nurture leads, retain customers, and drive conversions.",
      features: ["Newsletter design", "Automation", "Segmentation", "A/B testing"]
    },
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Clear, comprehensive how-to guides, user manuals, and technical documentation.",
      features: ["User guides", "How-to articles", "Documentation", "Process guides"]
    },
    {
      icon: Edit3,
      title: "Editing & Proofreading",
      description: "Professional editing and proofreading services to polish your content to perfection.",
      features: ["Copy editing", "Proofreading", "Style guide", "Quality assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-medium text-lg mb-4"
            >
              What I Offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              My Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              From SEO-optimized blog posts to compelling website copy, I offer comprehensive 
              content writing services to help your business succeed online.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card className="h-full bg-card shadow-card hover:shadow-floating transition-all duration-300 group border-0 gradient-card">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Ready to Transform Your Content?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss your content needs and create a strategy that drives results. 
                Contact me today for a free consultation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg shadow-card hover:shadow-floating transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;