import { systemPrompt, inputUnderstandingPrompt, stateTrackerPrompt, taskPlannerPrompt, outputGeneratorPrompt } from "./prompt";


export async function askOpenAI(userInput: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const messages = [
    {
      role: "system",
      content: systemPrompt,
    },
    {
      role: "user",
      content: inputUnderstandingPrompt + "\n\n" + userInput,
    },
    {
      role: "assistant",
      content: stateTrackerPrompt,
    },
    {
      role: "assistant",
      content: taskPlannerPrompt,
    },
    {
      role: "assistant",
      content: outputGeneratorPrompt,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o", // or "gpt-3.5-turbo"
      messages,
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
