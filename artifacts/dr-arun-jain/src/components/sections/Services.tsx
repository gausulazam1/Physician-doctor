import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Syringe, ShieldCheck, Baby, HeartHandshake, Gauge, Weight, Pill } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: "Family Medicine",
      description: "General health consultations and holistic care for patients of all age groups.",
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Diabetes Management",
      description: "Expert diabetology, blood sugar control, HbA1c monitoring, and lifestyle guidance.",
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Acupuncture",
      description: "Traditional acupuncture therapy for chronic pain, stress relief, and wellness.",
      icon: <Syringe className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Preventive Care",
      description: "Health screenings, vaccinations, and proactive lifestyle counseling to prevent illness.",
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Child Health",
      description: "Pediatric consultations, immunity building, and child development tracking.",
      icon: <Baby className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Geriatric Care",
      description: "Specialized, compassionate care addressing the unique health needs of elderly patients.",
      icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Hypertension",
      description: "Blood pressure monitoring, medication management, and risk reduction strategies.",
      icon: <Gauge className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Weight Management",
      description: "Clinical obesity counseling, safe diet planning, and metabolic health.",
      icon: <Weight className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      title: "Thyroid Disorders",
      description: "Accurate diagnosis and ongoing management of hypothyroid and hyperthyroid conditions.",
      icon: <Pill className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base sm:text-lg mb-6"
          >
            Comprehensive healthcare services for the whole family
          </motion.p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:ring-2 hover:ring-primary/50 group bg-card">
                <CardHeader className="pb-2 sm:pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
