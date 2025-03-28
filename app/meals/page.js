import Link from 'next/link'

import styles from '@/styles/meals-page.module.css'
import MealsGrid from '@/components/meals-grid'
import { getMeals } from '@/lib/meals'
// import { getMeals } from '@/lib/meals'

export default async function Meals() {
    // const meals = await getMeals();
    const meals = await getMeals()
    return(
        <>
            <header className={styles.header}>
                <h1>
                    Delicious Meal created{' '}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>choose your favorite receipe and cook it yourself. It is easy and fun!</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">
                        share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}