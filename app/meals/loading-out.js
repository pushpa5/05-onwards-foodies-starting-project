import styles from '@/styles/loading.module.css'

export default function MealsLoading() {
    return(
        <p className={styles.loading}>fetching the meals data...</p>
    )
}