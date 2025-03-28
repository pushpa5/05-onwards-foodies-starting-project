import Link from 'next/link'
import Image from 'next/image'

import MainHeaderBackground from './main-header-background'
import logo from '@/assets/logo.png'
import styles from '@/styles/main-header.module.css'
import NavLink from './nav-link'

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logo} alt="logo image" priority />
                    Nextlevel food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li><NavLink href="/meals">Browse meal</NavLink></li>
                        <li><NavLink href="/community">Foodie community</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>)
}