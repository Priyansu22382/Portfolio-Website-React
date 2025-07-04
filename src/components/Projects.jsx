import { ArrowRight, ExternalLink, GithubIcon } from 'lucide-react'
import React from 'react'
const projects = [
    {
        id : 1,
        title : "Apni Rasoi Page",
        description : "A beautiful Resturant Page App using HTML, CSS, Javascript.",
        image : "/ResturantApsniRasoi.png",
        tags : ["HTML", "CSS", "Javascript"],
        demoUrl : "https://priyansu22382.github.io/Resturant_Frontend_UI/",
        gitUrl : "https://github.com/Priyansu22382/Resturant_Frontend_UI"
    },
    {
        id : 2,
        title : "My Old Portfolio Webite",
        description : "A beautiful Portfolio Web App using HTML, CSS, Javascript.",
        image : '/Portfolio.png',
        tags : ["HTML", "CSS", "Javascript"],
        demoUrl : "https://portfolio-website-priyanshus-projects-d73f6a02.vercel.app/",
        gitUrl : "https://github.com/Priyansu22382/Portfolio-Website"
    },
    {
        id: 3,
        title: "Study Sync Website",
        description: "A beautiful Study Sync Page App using HTML, CSS, Javascript.",
        image: "/StudySync.png",
        tags: ["HTML", "CSS", "Javascript"],
        demoUrl: "https://priyansu22382.github.io/StudyPointProject/",
        gitUrl: "https://github.com/Priyansu22382/StudyPointProject"
    },
    {
        id: 4,
        title: "Zoo Management System",
        description: "The Zoo Management System is designed to streamline operations in a zoo...",
        image: "/zooManagement.png",
        tags: ["Java", "OOPS"],
        demoUrl: "https://github.com/Priyansu22382/Zoo-Topia",
        gitUrl: "https://github.com/Priyansu22382/Zoo-Topia"
    }
]
const Projects = () => {
  return (
    <section id="projects" className='py-24 px-4 relative '>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Featured <span className='text-primary'> Projects </span> </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>Here are some of my recent projects. Each Project was carefully crafted with attention to detail, performance, and user experience. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,key) => (
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        </div>    
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4 '>
                                {project.tags.map((tag) => (
                                    <span className='px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground'>
                                      {tag}  
                                    </span>
                                ))}
                            </div>    
                        </div>  
                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3> 
                        <p className='text-muted-foreground text-sm mb-4 '>{project.description}</p> 
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a href={project.demoUrl} target='_blank'>
                                    <ExternalLink/>
                                </a> 
                                <a href={project.gitUrl}>
                                    <GithubIcon/>
                                </a>    
                            </div>    
                        </div>    
                    </div>
                ))}
            </div>
            <div className='text-center mt-12'>
                <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href="https://github.com/Priyansu22382" target="_blank">
                    Check My GitHub <ArrowRight/>
                </a>
            </div>
        </div>

    </section>
  )
}

export default Projects