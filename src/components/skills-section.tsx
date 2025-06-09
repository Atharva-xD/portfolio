import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Server, Wrench, Cpu } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const skillCategories = [
    {
      icon: Code,
      title: "Finance & Research Tools",
      color: "from-blue-400 to-cyan-400",
      skills: ["Financial Modeling", "Valuation", "Equity Research", "Thematic Research"],
    },
    {
      icon: Server,
      title: "ERP & Accounting",
      color: "from-green-400 to-emerald-400",
      skills: ["SAP S/4HANA", "GL Reconciliation", "Budget Mapping"],
    },
    {
      icon: Database,
      title: "Data & Analysis",
      color: "from-purple-400 to-pink-400",
      skills: ["Microsoft Excel", "PowerPoint", "Balance Sheet Analysis"],
    },
    {
      icon: Wrench,
      title: "Certifications",
      color: "from-orange-400 to-red-400",
      skills: [
        "NISM XV: Research Analyst",
        "NISM VIII: Equity Derivatives",
        "Advanced Valuation & Modeling"
      ],
    },
    {
      icon: Cpu,
      title: "Soft Skills",
      color: "from-yellow-400 to-orange-400",
      skills: ["Critical Thinking", "Teamwork", "Problem Solving", "Leadership"],
    },
  ]  

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Finance is a dynamic world, and so is my learning path. I’m constantly enhancing my skills in financial modeling, research analytics, and valuation methodologies to stay ahead in the investment and finance domain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 }}
                      className="group/skill"
                    >
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition-all duration-200 group-hover/skill:bg-gray-700/50">
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-white">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI/ML concepts, cloud architectures,
              and emerging web technologies to stay at the forefront of innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
