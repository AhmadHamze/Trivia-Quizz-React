// A function that shuffles an array randomly
export function shuffleArray(array: any[]) {
    return [...array].sort(() => Math.random() - 0.5);
}