import Link from 'next/link';
import { mainFont } from '../styles/fonts.json';


const btn = (props) => (
    <div> 
        <Link href={ props.href }>
            <a>
                <button className="btn"><h2 className='txt'><img src={ props.icon }/>{ props.label }</h2></button>
            </a>
        </Link>
        <style jsx>{`
            .btn {
                background-color: ${ props.color };
                font-family: ${ mainFont };
                color: #FFFFFF;
                border: 1px solid #FFFFFF;
                opacity: 1;
                transition: 0.3s;
            }

            .btn:hover {
                opacity: 0.5;
            }

            .txt {
                padding-left: 20px;
                padding-right: 20px;
            }
        `}</style>
    </div>
);

export default btn;
