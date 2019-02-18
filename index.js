import Header from '../components/header.js';
import Intro from '../components/intro.js';
import Info from '../components/info.js';
import Competition from '../components/competition.js';
import Contact from '../components/contact.js';
import Faqs from '../components/faqs.js';
import { backgroundColor } from '../styles/colors.json';



export default () => (
    <html>
        <body>
        <Header/>
        <Intro/>
        <Info/>
        <Competition/>
        <Contact/>
        <Faqs/>
        </body>
        <style jsx global>{`
            html {
                background:${backgroundColor};
            }
        `}</style>
    </html>
);