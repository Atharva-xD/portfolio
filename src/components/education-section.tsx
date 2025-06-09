import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    {
      degree: "Post Graduate Diploma in Management (PGDM)",
      institution: "SIES School of Business Studies, Nerul",
      period: "2023–2025",
      // cgpa: "N/A", // Not mentioned in the resume
      description: "Specializing in Finance to develop a deep understanding of financial modeling, equity research, and strategic decision-making.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "SIES College of Arts, Science and Commerce, Nerul, Navi Mumbai",
      period: "2020–2023",
      // cgpa: "N/A", // Not mentioned in the resume
      description: "Focused on core financial principles and commerce fundamentals under the University of Mumbai.",
    },
  ]

  const certifications = [
    {
      title: "NISM-Series-XV: Research Analyst Certification Examination",
      subtitle: "SEBI-Recognized Qualification",
      period: "Issued 2024",
      description: "Demonstrated ability in conducting equity research, financial analysis, and industry evaluation under SEBI guidelines.",
    },
    // {
    //   title: "NISM-Series-VIII: Equity Derivatives Certification Examination",
    //   subtitle: "SEBI-Regulated Derivatives Market Certification",
    //   period: "Issued 2024",
    //   description: "Certified understanding of equity derivative instruments, market operations, and regulatory requirements.",
    // },
    // {
    //   title: "Advanced Valuation and Financial Modelling",
    //   subtitle: "Specialized Finance Training",
    //   period: "Issued 2024",
    //   description: "Trained in financial modeling techniques including DCF, relative valuation, and scenario analysis using real-world cases.",
    // },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Education & Certification
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <GraduationCap className="mr-3 h-8 w-8 text-blue-400" />
              Academic Journey
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-blue-400 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          CGPA: {edu.cgpa}
                        </div> */}
                      </div>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <Award className="mr-3 h-8 w-8 text-purple-400" />
              Professional Certification
            </h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="group mb-8"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="mb-6">
                    <h4 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-purple-300 text-lg font-medium mb-3">{cert.subtitle}</p>
                    <div className="flex items-center text-purple-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                  <div className="mt-6">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30">
                      <Award className="h-4 w-4 mr-2 text-purple-400" />
                      <span className="text-purple-300 font-medium">Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
