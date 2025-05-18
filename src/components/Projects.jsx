import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectsSection = styled.section`
  padding: 5rem 5%;
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechPill = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const projects = [
  {
    title: 'Chicken Disease Classification',
    description:
      'Deep learning and image processing pipeline to classify chicken diseases from images. Features model training, Docker-based deployment, and a React frontend for image uploads and predictions. Includes a demo video walkthrough.',
    tech: [
      'TensorFlow',
      'OpenCV',
      'Flask',
      'Docker',
      'React',
      'Python',
      'Node.js'
    ],
    github: 'https://github.com/your-username/chicken-disease-classification',
    live: 'https://drive.google.com/file/d/1-gFX4ktcMwhKXjTf7IiejRiU4ob3thY9/view?usp=sharing'
  },
  {
    title: 'Text Summarization Web App',
    description:
      'An NLP tool that generates concise versions of longer texts while preserving key information.',
    tech: ['NLP', 'Machine Learning', 'GitHub Actions', 'Python'],
    github: 'https://github.com/Shailly-450/Text-Summarizer',
    live: '#',
  },
  {
    title: 'Object Detection Webapp',
    description:
      'A YOLOS-based object detection web app with interactive image uploads and visualization.',
    tech: ['Computer Vision', 'YOLOS', 'Transformers', 'PyTorch', 'Gradio'],
    github: 'https://huggingface.co/spaces/Shailly29/BCCD_Object_Detection',
    live: 'https://huggingface.co/spaces/Shailly29/BCCD_Object_Detection',
  },
  {
    title: 'Smart ATS: Resume Evaluation Tool',
    description:
      'A web app using Streamlit and Google Generative AI to evaluate resumes against job descriptions.',
    tech: ['Streamlit', 'Google Generative AI', 'Data Visualization'],
    github: 'https://github.com/Shailly-450/Smart-ATS',
    live: '#',
  },
    {
    title: 'SHL Assessment Recommendation System',
    description:
      'A smart system that recommends SHL assessments based on natural language job descriptions. Uses Google Gemini API for query understanding, Streamlit for UI, and FastAPI for API access. Features web scraping, intelligent ranking, and dual deployment.',
    tech: [
      'Python',
      'Streamlit',
      'FastAPI',
      'Gemini API',
      'Web Scraping',
      'REST API'
    ],
    github: 'https://github.com/Shailly-450/SHL-assessment',
    live: 'https://assessment-recommender.streamlit.app',
  },
  {
    title: 'FAQ Chatbot',
    description:
      'A Flask-based FAQ chatbot using NLP techniques (tokenization, lemmatization, TF-IDF, cosine similarity) for intelligent question answering. Features a dynamic web UI, REST API, and is deployed on Render.',
    tech: [
      'Python',
      'Flask',
      'NLP',
      'TF-IDF',
      'Cosine Similarity',
      'HTML/CSS',
      'Render'
    ],
    github: 'https://github.com/Shailly-450/Chatbot',
    live: 'https://chatbot-mwee.onrender.com/',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'A web-based application that provides movie recommendations and sentiment analysis of reviews using Machine Learning. Features collaborative and content-based filtering, sentiment analysis, and an interactive UI.',
    tech: [
      'Python',
      'Flask',
      'Machine Learning',
      'Collaborative Filtering',
      'Content-Based Filtering',
      'Sentiment Analysis',
      'HTML/CSS',
      'JavaScript'
    ],
    github: 'https://github.com/Shailly-450/Movie-Recommendation',
    live: '#',
  },
  {
    title: 'News Wave',
    description:
      'A cross-platform Flutter news app providing up-to-date news from various sources. Features real-time updates, offline reading, personalized feeds, and a user-friendly interface. Tested on Android, iOS, macOS, and Chrome.',
    tech: [
      'Flutter',
      'Dart',
      'REST API',
      'Android',
      'iOS',
      'macOS',
      'Web'
    ],
    github: 'https://github.com/Shailly-450/NewsWave', // Add your GitHub repo link if available
    live: '#',   // Add a demo or store link if available
  },
]

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </ProjectTech>
              <ProjectLinks>
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  whileHover={{ x: 3 }}
                >
                  <FiGithub /> Code
                </ProjectLink>
                <ProjectLink
                  href={project.live}
                  target="_blank"
                  whileHover={{ x: 3 }}
                >
                  <FiExternalLink /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}