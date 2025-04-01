import Image from "next/image";

import styles from '@/styles/meal-detail.module.css'
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const meal = getMeal(params.meal)
    if (!meal) {
        notFound()
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}

export default function MealDetails({ params }) {
    const meal = getMeal(params.meal)
    if (!meal) {
        notFound()
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')
    return <>
        <header className={styles.header}>
            <div className={styles.image}>
                <Image src={meal.image} alt="" fill />
            </div>
            <div className={styles.headerText}>
                <h1>{meal.title}</h1>
                <p className={styles.creator}>By{' '}
                    <a href={`mailto: ${meal.email}`} className="">{meal.creator}</a>
                </p>
                <p className={styles.summary}>{meal.summary}</p>
            </div>
        </header>
        <main >
            <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        </main>
    </>
}