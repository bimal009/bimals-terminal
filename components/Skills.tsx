import { Code2, Database, Terminal, Cpu, FileCode2, Server, GitBranch, Cloud, Package, Webhook, Layers } from 'lucide-react';

export default function Skills() {
    const skills = {
        frontend: [
            { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
            { name: "TypeScript", icon: <FileCode2 className="w-5 h-5" /> },
            { name: "React", icon: <Cpu className="w-5 h-5" /> },
            { name: "Next.js", icon: <Layers className="w-5 h-5" /> },
            { name: "HTML5/CSS3", icon: <Webhook className="w-5 h-5" /> },
            { name: "Tailwind CSS", icon: <Package className="w-5 h-5" /> }
        ],
        backend: [
            { name: "Node.js", icon: <Terminal className="w-5 h-5" /> },
            { name: "Express", icon: <Server className="w-5 h-5" /> },
            { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
            { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
            { name: "Prisma", icon: <Database className="w-5 h-5" /> },
            { name: "Drizzle", icon: <Database className="w-5 h-5" /> },
            { name: "REST API", icon: <Webhook className="w-5 h-5" /> },
        ],
        tools: [
            { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
            { name: "Docker", icon: <Package className="w-5 h-5" /> },
            { name: "AWS", icon: <Cloud className="w-5 h-5" /> },

        ]
    };

    return (
        <section id="skills" className="py-20 bg-[#252526]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-sm font-mono text-gray-400">{'// Technical Proficiency'}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Skills & Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend Skills */}
                    <div className="bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg p-6">
                        <div className="flex items-center mb-6">
                            <Code2 className="h-6 w-6 text-blue-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Frontend</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {skills.frontend.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-300">
                                    {skill.icon}
                                    <span className="text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg p-6">
                        <div className="flex items-center mb-6">
                            <Server className="h-6 w-6 text-green-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Backend</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {skills.backend.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-300">
                                    {skill.icon}
                                    <span className="text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className="bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg p-6">
                        <div className="flex items-center mb-6">
                            <Package className="h-6 w-6 text-purple-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Tools & DevOps</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {skills.tools.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-300">
                                    {skill.icon}
                                    <span className="text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Code snippet */}
                <div className="mt-16 bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg overflow-hidden">
                    <div className="flex items-center p-2 bg-[#252526]">
                        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                        <div className="ml-2 text-xs text-gray-400">skills.js</div>
                    </div>

                    <div className="p-4 overflow-x-auto">
                        <pre className="text-sm">
                            <code>
                                <span className="theme-token-keyword">const</span> <span className="theme-token-variable">mySkills</span> <span className="theme-token-operator">=</span> <span className="theme-token-punctuation">{'{'}</span>{'\n'}
                                {'  '}<span className="theme-token-property">languages</span><span className="theme-token-punctuation">:</span> <span className="theme-token-punctuation">[</span><span className="theme-token-string">&apos;JavaScript&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;TypeScript&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;HTML&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;CSS&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Python&apos;</span><span className="theme-token-punctuation">],</span>{'\n'}
                                {'  '}<span className="theme-token-property">frameworks</span><span className="theme-token-punctuation">:</span> <span className="theme-token-punctuation">[</span><span className="theme-token-string">&apos;React&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Next.js&apos;</span><span className="theme-token-punctuation">,</span>  <span className="theme-token-string">&apos;Express&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;TailwindCSS&apos;</span><span className="theme-token-punctuation">],</span>{'\n'}
                                {'  '}<span className="theme-token-property">databases</span><span className="theme-token-punctuation">:</span> <span className="theme-token-punctuation">[</span><span className="theme-token-string">&apos;MongoDB&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;PostgreSQL&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;MySQL&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Redis&apos;</span><span className="theme-token-punctuation">],</span>{'\n'}
                                {'  '}<span className="theme-token-property">tools</span><span className="theme-token-punctuation">:</span> <span className="theme-token-punctuation">[</span><span className="theme-token-string">&apos;Git&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Docker&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Webpack&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;VS Code&apos;</span><span className="theme-token-punctuation">],</span>{'\n'}
                                {'  '}<span className="theme-token-property">cloud</span><span className="theme-token-punctuation">:</span> <span className="theme-token-punctuation">[</span><span className="theme-token-string">&apos;AWS&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Vercel&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Netlify&apos;</span><span className="theme-token-punctuation">,</span> <span className="theme-token-string">&apos;Heroku&apos;</span><span className="theme-token-punctuation">],</span>{'\n'}
                                <span className="theme-token-punctuation">{'}'}</span><span className="theme-token-punctuation">;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}