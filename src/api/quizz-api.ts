// This url has a category attribute
// 'https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple'

export async function getQuizzData() {
    const url = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
