import ImagePicker from '@/components/image-picker';
import MealFormSubmit from '@/components/meal-form-submit';
import { shareMeal } from '@/lib/action';
import styles from '@/styles/share.module.css';

export default function ShareMealPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Share your <span className={styles.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={styles.main}>
                <form className={styles.form} action={shareMeal}>
                    <div className={styles.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label='image pick' name="imagePcker" />
                    <p className={styles.actions}>
                        {/* <button type="submit">Share Meal</button> */}
                        <MealFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}