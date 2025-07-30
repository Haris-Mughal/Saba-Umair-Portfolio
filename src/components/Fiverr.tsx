import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Fiverr = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fiverr" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Hire Me on Fiverr
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Prefer working through Fiverr? You can view Saba Umair's services, ratings, and gigs on her official Fiverr profile. Feel confident with a secure, trusted freelancing platform.
            </p>
          </motion.div>

          {/* Fiverr Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 backdrop-blur-sm"
          >
            {/* Fiverr Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-[#1dbf73] text-white px-6 py-3 rounded-full font-semibold text-lg mb-8 shadow-lg"
            >
              <Star className="w-5 h-5 fill-current" />
              <span>Top Rated Seller</span>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-[#1dbf73] hover:bg-[#19a463] text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://www.fiverr.com/sabaumair2613', '_blank')}
              >
                Visit My Fiverr Profile
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-[#1dbf73] text-[#1dbf73]" />
                <span>5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1dbf73]"></div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1dbf73]"></div>
                <span>Money-Back Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fiverr;