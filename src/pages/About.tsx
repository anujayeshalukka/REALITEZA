import { motion } from 'framer-motion';
// import ClientSlider from '../components/ClientSlider';
import aboutImg from '../assets/aboutrealiteza.png';
const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-12 lg:pt-48 lg:pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 space-y-6">
              {/* <h2 className="mb-8 leading-tight">
                <span className="text-2xl md:text-4xl lg:text-5xl font-black block text-slate-900 tracking-tight">Company Overview</span>
              </h2> */}
              <p className="text-lg text-slate-600 leading-relaxed">
                REALITEZA (Limitted) incorporated with the desire to offer an incomparable service in our industry. As part of our vision, aiming to be known as a reputed firm offering Building Envelope Engineering Service across the world remotely-efficiently, we engaged to leverage the remote design support/engineering back office for fabrication companies and architects.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The founders decided to begin the REALITEZA for offering entire engineering service for a Project’s envelop system related scope instead of a specific element like (only) the alum & glazing façade. The entire process is led by enthusiastic and enterprising highly experienced façade experts. This ensures less effort for our clients who take over the entire envelope scope of a building and outsource the design & engineering part ranging from concept to as built stage.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 relative"
            >
              <img src={aboutImg} alt="Realiteza Company Overview" className="w-full h-auto rounded-2xl shadow-xl" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 "
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              We work hand in hand with our clients for producing the design & engineering submissions of various trade / disciplines in the contract like all kind of Aluminium & glazing façades and bespoke systems, Stone and metal cladding facades, Temporary wall, rainscreen & SFS system, Steel Roofing structure and roof cladding designs, and all types of stainless steel and metal works scenarios and canopies.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Mission & Vision - Simplified */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
              <p className="sm:text-xl text-lg leading-relaxed text-slate-600 font-medium border-l-4 border-primary pl-6">
                "To be the leader and our clients' most preferable choice in providing engineering design service."
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Our Vision</h2>
              <p className="sm:text-xl text-lg leading-relaxed text-slate-600 font-medium border-l-4 border-primary pl-6">
                "We are committed to maintaining high-quality drawing standards and high-end engineered building envelope solutions."
              </p>
            </motion.div>
          </div>
        </div>
      </section>


     

      {/* <ClientSlider /> */}
    </div>
  );
};

export default About;
