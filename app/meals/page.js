import Link from 'next/link'

import styles from '@/styles/meals-page.module.css'
import MealsGrid from '@/components/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'

async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export const metadata = {
    title: 'All foods',
    description: 'Delicious meals, shared by a food-loving community.',
  };

export default function MealsPage() {
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
                <Suspense fallback={<p className={styles.loading}>fetching the meals data...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}