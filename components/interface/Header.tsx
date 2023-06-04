import Link from "next/link";
import Image from "next/image";

import 'bootstrap-icons/icons/0-circle.svg'

import logo from '../../lib/images/logow.png';
import banner from '../../lib/images/banner.jpeg';

export default function Header() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ borderBottom: '3px solid #b3d353' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image src={logo} height={45} alt="logo" style={{ borderRadius: '15px' }} /> Mercado do bem
                </a>
                <Link href="/acesso" className="btn btn-lg btn-light">
                    Acesso <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
        </nav>
        <div className="col-12">
            <Image src={banner} height={250} alt="logo" style={{ height: '250px', width: '100%' }} />
        </div>
    </>
    )
}
