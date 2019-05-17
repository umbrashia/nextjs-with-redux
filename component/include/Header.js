import React, { Component } from 'react';
import Link from 'next/link';
class Header extends Component {


    render() {
        return (<div>
            <Link href="/" >
            <a>Home Page </a>
            </Link>
            <Link href="/about" >
            <a> About Page</a>
            </Link>
            <hr/><br/>
        </div>
           
        );
    }

}

{/*  <header className="header_area sticky-header">
                <div class="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            <Link>
                                <a className="navbar-brand logo_h" ><img src="/static/img/logo.png" /></a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item"><Link><a className="nav-link" >Home</a></Link></li>
                                    <li className="nav-item submenu dropdown">
                                        <a  className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Shop</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" >Shop Category</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a  className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Blog</a>
                                        <ul class="dropdown-menu">
                                            <Link>
                                            <li className="nav-item"><a className="nav-link" >Blog</a></li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown active">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item active"><a className="nav-link" >Login</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link">Contact</a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                    <li className="nav-item"><a  className="cart"><span class="ti-bag"></span></a></li>
                                    <li className="nav-item">
                                        <button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between" >
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" className="btn"></button>
                            <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                        </form>
                    </div>
                </div>
            </header> */}
export default Header;