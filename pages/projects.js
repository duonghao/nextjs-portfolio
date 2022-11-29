import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { projects } from "../constants";

export default function Projects() {
    return (
        <Layout>
            <nav>
                <Navbar></Navbar>
            </nav>
            <header className='pr-[20%]'>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Rhoncus aenean vel elit scelerisque mauris pellentesque. 
                </p>
            </header>
            <ul className='grid grid-cols-3 gap-4'>
                {projects.map((project, index) => (
                    <li className='border p-8 rounded-2xl'
                        key={project.id}
                    >
                        <div className='border rounded-full w-12 h-12 mb-8'>Image</div>
                        <h2 className='text-lg font-semibold mb-4'>
                            {project.title}
                        </h2>
                        <p className='text-md font-thin mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Rhoncus aenean vel elit scelerisque mauris pellentesque. 
                        </p>
                        <a href="#">
                            github.com
                        </a>
                    </li>
                ))}
            </ul>
            <footer>
                <Footer></Footer>
            </footer>
        </Layout>
    )
}