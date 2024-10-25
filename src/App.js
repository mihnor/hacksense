import React from 'react';
import './App.css';

// No topo do arquivo App.js
import gammaImage from './images/gamma.jpg';
import runwayImage from './images/runway.jpg';
import websimImage from './images/websim.jpg';
import chatgptImage from './images/chatgpt.jpg';
import sunoImage from './images/suno.jpg';
import udioImage from './images/udio.jpg';
import elevenlabsImage from './images/elevenlabs.jpg';
import midjourneyImage from './images/midjourney.jpg';
import maritalkImage from './images/maritaca.jpg';
import soulmachinesImage from './images/soulmachines.jpg';
import soulmachines2Image from './images/soulmachines.jpg';
import chefImage from './images/chef.jpg';
import inclusaoImage from './images/inclusao.jpg';

export default function HackSense() {
  const sections = [
    {
      title: "Palavra",
      tools: [
        {
          id: 1,
          name: "MariTalk",
          description: "Chatbot em português desenvolvido pela Maritaca AI",
          link: "https://chat.maritaca.ai/",
          image: maritalkImage
        },
        {
          id: 2,
          name: "ChatGPT",
          description: "Modelo de linguagem conversacional da OpenAI",
          link: "https://chatgpt.com/",
          image: chatgptImage
        },
      ]
    },
    {
      title: "Imagens",
      tools: [
        {
          id: 3,
          name: "Dashboard - Runway",
          description: "Ferramenta de edição e criação de vídeos com IA",
          link: "https://app.runwayml.com/",
          image: runwayImage
        },
        {
          id: 4,
          name: "Midjourney",
          description: "Gerador de imagens com IA",
          link: "https://www.midjourney.com/",
          image: midjourneyImage
        },
      ]
    },
    {
      title: "Som",
      tools: [
        {
          id: 5,
          name: "ElevenLabs",
          description: "Ferramenta de síntese de voz e conversão de texto em fala",
          link: "https://elevenlabs.io/app/speech-synthesis/text-to-speech",
          image: elevenlabsImage
        },
        {
          id: 6,
          name: "Suno",
          description: "Plataforma de geração de música com IA",
          link: "https://suno.com/",
          image: sunoImage
        },
        {
          id: 7,
          name: "Udio | AI Music Generator",
          description: "Gerador de música com IA",
          link: "https://www.udio.com/home",
          image: udioImage
        },
      ]
    },
    {
      title: "Cotidiano",
      tools: [
        {
          id: 8,
          name: "websim.ai",
          description: "Plataforma de simulação web com IA",
          link: "https://websim.ai/",
          image: websimImage
        },
        {
          id: 9,
          name: "Gammas - Gamma",
          description: "Plataforma de criação de apresentações e documentos com IA",
          link: "https://gamma.app/",
          image: gammaImage
        },
        {
          id: 10,
          name: "Soul Machines",
          description: "Plataforma de assistentes virtuais com avatares digitais",
          link: "https://www.soulmachines.com/",
          image: soulmachinesImage
        },
      ]
    },
    {
      title: "Agentes",
      tools: [
        {
          id: 11,
          name: "Chef Visionário",
          description: "Assistente culinário interativo, que sugere receitas detalhadas e verifica disponibilidade de utensílios e ingredientes",
          link: "https://chatgpt.com/g/g-0XUDjKLrQ-chef-visionario",
          image: chefImage
        },
        {
          id: 12,
          name: "Descrição Visual Inclusiva",
          description: "Uma ferramenta que visa ajudar a gerar descrição de imagens, variando a resposta pelo público alvo",
          link: "https://chatgpt.com/g/g-lwR79aa9n-descricao-visual-inclusiva",
          image: inclusaoImage
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">HACKSENSE</h1>
      
      {sections.map((section, index) => (
  <div key={index} className="mb-12">
    <h2 className="text-2xl font-bold text-blue-400 mb-6">{section.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {section.tools.map((tool) => (
        <a  // <- Esta tag estava faltando
          key={tool.id}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"
        >
          <div className="relative">
            <img
              src={tool.image}
              alt={tool.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-300">{tool.description}</p>
              <div className="mt-4 text-blue-400 hover:text-blue-300">
                Acessar ferramenta →
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
))}
    </div>
  );
}