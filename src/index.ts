// src/index.ts
import { generateContent } from './agents/contentGenerator';
import { generateImage } from './agents/imageGenerator';
import { schedulePost } from './agents/postScheduler';

const run = async () => {
  console.log('🤖 DevSync AI Agent Started');

  const content = await generateContent();
  console.log('📝 Generated content:', content);

  const imagePath = await generateImage();
  console.log('🖼️ Image generated at:', imagePath);

  await schedulePost({
    image: "",
    caption: "",
    hashtags: "",
  });

  console.log('✅ Post scheduled on all platforms!');
};

run();