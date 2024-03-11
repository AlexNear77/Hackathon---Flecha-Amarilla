const OpenAI = require('openai');
const openai = new OpenAI({apiKey: 'apy Key'}); // pegala direcamente o crea una env de entorno en tu compu

async function callOpenAI(prompt) {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: 100,
            temperature: 0.5,
            top_p: 1
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error al llamar a la API de OpenAI:", error);
    }
}

async function exerciceController(req, res) {
    try {
        const prompt = 'Dame unicamente el resultado del siguiente codigo:' + req.body.prompt;
        const response = await callOpenAI(prompt);
        res.json({ response });
    } catch (error) {
        console.error("Error en el controlador de /exercice:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = exerciceController;