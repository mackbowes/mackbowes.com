import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import styles from './nav.module.css';

function Nav() {
  return (
      <header className={styles.nav}>
      <MediaQuery minWidth={801}>
      <Navbar>
        <NavItem href="/read-n-respond" text="Blog"></NavItem>
        <NavItem href="/resume" text="Resume"></NavItem>
        <NavItem href="/Portfolio" text="Portfolio"></NavItem>
      </Navbar>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
      <Navbar>
        <NavItem href="#" text="Menu">
          <DropdownMenu>
          </DropdownMenu>
        </NavItem>
      </Navbar>
      </MediaQuery>
      </header>
  )
}

function Navbar(props) {
  return(
    <nav className={styles.navBar} id="top">
      <div>
        <h1 className={styles.title}>
        <a href="/">mackbowes.com</a>
        </h1>
      </div>
        <div className={styles.navBarNav}>
          {props.children}
        </div>
    </nav>
  )
}

function DropdownMenu(props) {

  function DropdownItem(props) {
    return(
      <a href={props.href} className={styles.menuItem}>
        {props.children}
      </a>
    )
  }

  return(
    <div className={styles.dropdown}>
      <DropdownItem>
        <NavItem href="/read-n-respond" text="Blog"></NavItem>
      </DropdownItem>
      <DropdownItem>
        <NavItem href="/resume" text="Resume"></NavItem>
      </DropdownItem>
      <DropdownItem>
        <NavItem href="/Portfolio" text="Portfolio"></NavItem>
      </DropdownItem>
    </div>
  )

}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return(
    <div className={styles.navItem}>
      <a href={props.href} className={styles.navItemChild} onClick={() => setOpen(!open)}>
        {props.text}
      </a>
      {open && props.children}
    </div>
  )
}


export default Nav