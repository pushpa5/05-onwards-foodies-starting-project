'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

function isInvalidText(text) {
    return !text || text.trim() === ''
}

export const shareMeal = async (formData) => {
    const mealData = {
        title: formData.get('title'),
        image: formData.get('imagePcker'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (isInvalidText(mealData.title) ||
        isInvalidText(mealData.summary) ||
        isInvalidText(mealData.creator) ||
        isInvalidText(mealData.creator_email) ||
        isInvalidText(mealData.instructions) ||
        !mealData.creator_email.includes('@') ||
        !mealData.image || mealData.image.size === 0
    ) {
        throw new Error('invalid input entered')
    }

    await saveMeal(mealData)
    revalidatePath('/meals')
    redirect('/meals')
}