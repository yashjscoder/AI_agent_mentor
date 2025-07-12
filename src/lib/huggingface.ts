import { InferenceClient } from "@huggingface/inference";


const client = new InferenceClient(import.meta.env.VITE_HUGGINGFACE_API_KEY);

export async function askHuggingFaceChat(prompt: string): Promise<string> {
  try {
    const response = await client.chatCompletion({
      provider: "fireworks-ai", // use this provider for llama 3.1 8B instruct
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    // Return the assistant's reply
    return response.choices[0]?.message?.content ?? "⚠️ No response from model.";
  } catch (error) {
    console.error("Hugging Face Chat API error:", error);
    throw error;
  }
}
