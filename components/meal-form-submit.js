'use client'

const { useFormStatus } = require("react-dom")

function MealFormSubmit() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'submitting' : 'Share Meal'}
        </button>
    )
}

export default MealFormSubmit;