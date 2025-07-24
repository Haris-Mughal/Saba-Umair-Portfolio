import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Eye } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const portfolioItems = [
    {
      title: "E-commerce SEO Blog Series",
      category: "SEO Blog Writing",
      description: "A comprehensive 10-part blog series for an online fashion retailer that increased organic traffic by 150% and generated 200+ qualified leads.",
      preview: "Discover the latest fashion trends that are taking 2024 by storm. From sustainable fashion to bold color palettes, we explore how modern consumers are reshaping the industry...",
      tags: ["SEO", "E-commerce", "Fashion", "Content Strategy"],
      stats: { views: "15K+", engagement: "8.5%", date: "Nov 2024" },
      link: "#"
    },
    {
      title: "SaaS Company Website Copy",
      category: "Website Copywriting",
      description: "Complete website redesign copy for a B2B software company, resulting in 40% increase in demo requests and improved user engagement.",
      preview: "Transform your business operations with our cutting-edge automation platform. Streamline workflows, reduce manual tasks, and scale your operations effortlessly...",
      tags: ["SaaS", "B2B", "Conversion", "UX Writing"],
      stats: { views: "8K+", engagement: "12.3%", date: "Oct 2024" },
      link: "#"
    },
    {
      title: "Health & Wellness Email Campaign",
      category: "Email Marketing",
      description: "6-month email marketing campaign for a wellness brand that achieved 45% open rate and 18% click-through rate, exceeding industry averages.",
      preview: "Your journey to wellness starts with small, consistent steps. This week, we're sharing 5 simple habits that can transform your daily routine and boost your energy levels...",
      tags: ["Email Marketing", "Wellness", "Health", "Automation"],
      stats: { views: "25K+", engagement: "18.2%", date: "Sep 2024" },
      link: "#"
    },
    {
      title: "Tech Startup Product Descriptions",
      category: "E-commerce Copy",
      description: "Product description optimization for a tech accessories brand, leading to 35% increase in conversion rates and reduced cart abandonment.",
      preview: "Experience crystal-clear audio with our premium wireless earbuds. Featuring advanced noise cancellation technology and 24-hour battery life...",
      tags: ["Product Copy", "Tech", "E-commerce", "Conversion"],
      stats: { views: "12K+", engagement: "22.1%", date: "Aug 2024" },
      link: "#"
    },
    {
      title: "Travel Blog Content Strategy",
      category: "Content Strategy",
      description: "Complete content strategy and blog writing for a travel agency, increasing website traffic by 200% and booking inquiries by 85%.",
      preview: "Discover hidden gems in Southeast Asia that most tourists never find. From secret beaches in Thailand to underground caves in Vietnam...",
      tags: ["Travel", "Content Strategy", "SEO", "Tourism"],
      stats: { views: "30K+", engagement: "15.7%", date: "Jul 2024" },
      link: "#"
    },
    {
      title: "Financial Services White Papers",
      category: "Technical Writing",
      description: "Research-heavy white papers and guides for a fintech company, establishing thought leadership and generating 500+ qualified leads.",
      preview: "The future of digital banking lies in personalized financial experiences. Our latest research reveals how AI and machine learning are transforming...",
      tags: ["Fintech", "White Paper", "Research", "B2B"],
      stats: { views: "18K+", engagement: "28.4%", date: "Jun 2024" },
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
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
              My Latest Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Portfolio Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore some of my recent projects and see how strategic content 
              has helped businesses achieve their goals and drive measurable results.
            </motion.p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card className="h-full bg-card shadow-card hover:shadow-floating transition-all duration-300 group border-0 gradient-card overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                          {item.category}
                        </Badge>
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Preview */}
                    <div className="px-6 pb-4">
                      <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <p className="text-muted-foreground text-sm italic leading-relaxed">
                          "{item.preview}"
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats & Footer */}
                    <div className="border-t border-border bg-muted/20 px-6 py-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{item.stats.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{item.stats.date}</span>
                          </div>
                        </div>
                        <div className="text-primary font-medium">
                          {item.stats.engagement} CTR
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More Work CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;