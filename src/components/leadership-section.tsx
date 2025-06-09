import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Trophy, Lightbulb, Target } from "lucide-react"

export default function LeadershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: "Team Leader – SBI Life Ideation X 2024",
      organization: "SIES School of Business Studies",
      period: "Feb 2024",
      description:
        "Led a team to design India’s first gamified term life insurance product with the concept 'It Pays to Be Healthy'. The product encouraged healthy habits among users and combined finance with gamification.",
      achievements: [
        "Won 1st Runner-up (College Round)",
        "Secured ₹1,00,000 as prize",
        "Led product strategy and team coordination",
        "Received praise for innovation and impact",
      ],
      icon: Trophy,
      color: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
    },
    {
      title: "Finalist – Orion 2023 Case Competition",
      organization: "CRUX, XLRI Jamshedpur",
      period: "Oct 2023",
      description:
        "Selected as one of the Top 10 National Finalists (among 400+ teams) in a prestigious consulting case competition. Represented SIES by presenting innovative business solutions to real-world challenges.",
      achievements: [
        "Ranked Top 10 out of 400+ teams",
        "Competed against 180+ institutes",
        "Presented to leading industry experts",
        "Recognized for analytical thinking and teamwork",
      ],
      icon: Lightbulb,
      color: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-900/20 to-pink-900/20",
    },
  ]

  const leadershipQualities = [
    {
      icon: Target,
      title: "Finance-led Innovation",
      description: "Using creative thinking to design impactful financial products and solutions",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Leading diverse teams with clear vision and collective ownership",
    },
    {
      icon: Lightbulb,
      title: "Analytical Decision-Making",
      description: "Combining data insights with strategic thinking to solve business challenges",
    },
  ]  

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Leadership Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building teams, driving innovation, and creating impact through collaborative leadership
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${experience.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${experience.color} mr-6`}>
                        <experience.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                        <p className="text-gray-400 text-lg">{experience.organization}</p>
                        <span className="text-sm text-gray-500">{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{experience.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + achievementIndex * 0.1 }}
                          className="flex items-start p-3 bg-gray-900/50 rounded-lg border border-gray-800"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mr-3 mt-2 flex-shrink-0`}
                          />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">Leadership Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipQualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">
                    <quality.icon className="h-12 w-12 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mx-auto" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{quality.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {quality.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
