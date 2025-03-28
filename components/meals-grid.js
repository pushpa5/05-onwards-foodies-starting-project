import styles from '@/styles/meals-grid.module.css'
import MealItem from './meal-item'

export default function MealsGrid({meals}) {
    return (
        <ul className={styles.melas}>
            {meals.map((meal) => <li key={meal.id}>
                <MealItem {...meals} />
            </li>)
            }       
        </ul>
    )
}