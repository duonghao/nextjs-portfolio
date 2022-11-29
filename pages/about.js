import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
    return (
        <Layout>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='flex flex-wrap gap-16'>
                <section className='flex-1 flex flex-col gap-8'>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Rhoncus aenean vel elit scelerisque mauris pellentesque. 
                    </p>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Rhoncus aenean vel elit scelerisque mauris pellentesque. 
                    </p>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Rhoncus aenean vel elit scelerisque mauris pellentesque. 
                    </p>
                </section>
                <aside className='flex-1 flex flex-col gap-4'>
                    <div className='border w-[412px] h-[412px] rounded-xl'>Image</div>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a className='flex gap-4 items-center' href="https://stackoverflow.com/">
                                <FontAwesomeIcon icon={faLinkedin} size='2x'></FontAwesomeIcon>
                                <span>Follow on LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className='flex gap-4 items-center' href="https://stackoverflow.com/">
                                <FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon>
                                <span>Follow on Github</span>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        <footer>
            <Footer></Footer>
        </footer>
        </Layout>
    )
}