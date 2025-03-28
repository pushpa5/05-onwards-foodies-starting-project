import Link from 'next/link'
import Image from 'next/image'

import MainHeaderBackground from './main-header-background'
import logo from '@/assets/logo.png'
import styles from '@/styles/main-header.module.css'

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
                        <li><Link href="/meals">Browse Meal</Link></li>
                        <li><Link href="/community">Foodie community</Link></li>
                    </ul>
                </nav>
            </header>
        </>)
}