// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CrazyAigc',
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '1. 文章精选',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				
				{
					label: '2. AI入门教程',
					items:[
						{label: '入门经典必读', slug: 'guides/essential_readings'}
					]
				},
				{
					label: '3. 提示词(Prompt)',
					items:[
						{label: '目录: OpenAI 官方指南', slug: 'prompt/openai'}
					]
				},
				{
					label: '4. 智能体(Agent)',
					items:[
						{label: '0.学习路径: 成为基于Agent的创造者', slug: 'agent/0' }
					]
				},
				{
					label: '5. AI绘画',
					items:[
						{label: '0. 入门看这里', slug: 'ai_picture/0' }
					]
				},
				{
					label: '6. AI视频',
					items:[
						{label: '0.教程', slug: 'ai_video/0' }
					]
				},
				{
					label: '7. AI音乐',
					items:[
						{label: '0.教程', slug: 'ai_music/0' }
					]
				},
			],
		}),
	],
});
