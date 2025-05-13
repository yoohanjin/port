import Image from 'next/image'
import React from 'react'

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">안녕하세요!</h1>
          <p className="text-2xl">웹 개발자 포트폴리오에 오신 것을 환영합니다</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              저는 창의적이고 열정적인 웹 개발자입니다. 사용자 경험을 중요시하며,
              최신 기술 트렌드를 따라가며 지속적으로 성장하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Git', 'Tailwind CSS'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">프로젝트 {project}</h3>
                  <p className="text-gray-600">프로젝트 설명이 들어갈 자리입니다.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <span className="font-semibold">Email:</span>
                <a href="mailto:hanjin3029@gmail.com" className="text-blue-600 hover:underline">
                  hanjin3029@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="font-semibold">GitHub:</span>
                <a href="https://github.com/yoohanjin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/yoohanjin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 