import axios from "axios";

const client = axios.create({
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_OPEN_AI_API,
    },
});
export const titleFromAI = async (prompt) => {
    const DEFAULT_PARAMS = {
        "model": "text-davinci-003",
        "prompt": `너는 유명한 어린이를 위한 이야기책 작가야. 아래 내용을 잘 상상해서 반복되는 의성어를 넣은 이야기책 제목을 써줘. 단 사람 이름은 반드시 빼줘.\\n${prompt}`,
        "temperature": 0,
        "max_tokens": 60,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }
    return client.post('https://api.openai.com/v1/completions', DEFAULT_PARAMS).then((res) => {
        res.data.choices[0].text = res.data.choices[0].text.replace(/\/n\/n/g, "").replace(/['"]+/g, "")
        return res.data.choices[0].text.trim();
    })
}
export const descriptionFromAI = async (string) => {
    const DEFAULT_PARAMS = {
        "model": "text-davinci-003",
        "prompt": `한국어로 번역해줘\\n${string}`,
        "temperature": 0,
        "max_tokens": 60,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }
    return client.post('https://api.openai.com/v1/completions', DEFAULT_PARAMS).then((res) => {
        res.data.choices[0].text = res.data.choices[0].text.replace(/\/n\/n/g, "")
        return res.data.choices[0].text.trim();
    })
}
