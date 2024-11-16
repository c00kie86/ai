import fs from "fs/promises";
import url from "url";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";


// Load environment variables
dotenv.config();


// Settings
const dist = path.dirname(url.fileURLToPath(import.meta.url));
const dir = path.join(dist, "../public");
const prompt = "Keep above text structure and add semantic markup html to article such as header or section where each must contain figure, img src='image_placeholder.jpg' alt='title', figcaption (title), h1 or h2 (title), p (description). Use footer for last sentence";
const apiKey = process.env.OPENAI_API_KEY

console.log(typeof apiKey, apiKey)

// Initialization
const openai = new OpenAI({
  apiKey: apiKey,
});


async function transformTextToHTML(context, query) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: context },
        { role: "user", content: query }
      ],
      temperature: 1,
      max_tokens: 128,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
        "type": "json_object"
      },
    });
    return completion.choices[0].message;
  } catch (err) {
    console.error(err);
  }
}


async function createImage(query) {
  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: query,
    response_format: "b64_json",
    size: "256x256",
    style: "vivid",
    n: 1
  });
  console.log(image.data)
  return image.data;
}
// createImage('Sztuczna inteligencja: wpływ i wyzwania')

async function generateImages(input) {
  const output = [];

  for (const { alt } of input) {
    try {
      const imageData = await createImage(alt);
      output.push({ alt, imageData });
    } catch (err) {
      console.error(err);
    }
  }
  return output;
}


async function readFileAsync(input) {
  try {
    const output = await fs.readFile(input, "utf8");
    return output;
  } catch (err) {
    console.error(err);
  }
}


async function writeFileAsync(filepath, input) {
  try {
    await fs.writeFile(filepath, input, 'utf8');
    return;
  } catch (err) {
    console.error(err);
  }
}
// writeFileAsync(`${dir}/article.html`, "<html>" );


async function convertBase64toImage(filepath, input) {
  try {
    let buffer = Buffer.from(input.split(',')[1], 'base64');
    await writeFileAsync(filepath, buffer);
    return;
  } catch (err) {
    console.error(err);
  }
}
// convertBase64toImage(`${dir}/img/file.jpg`, "base64");


async function extractImgesAttributes(input) {
  try {
    let alt = /<img\s+[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/g;
    let output = [...input.matchAll(alt)].map(match => ({ alt: match[2] }));
    return output;
  } catch (err) {
    console.error(err);
  }
}

 
async function init() {
  try {
    const text = await readFileAsync(`${dir}/doc/article.txt`)
    const html = await transformTextToHTML(text, prompt);
    // await writeFileAsync(`${dir}/article.html`, html );
    console.log(html)
    return;
  } catch (err) {
    console.error(err);
  }
}

init();