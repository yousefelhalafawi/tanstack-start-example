export function TanStackStartCLI() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-2xl font-mono text-sm text-gray-200">
        {/* Header (VS Code style) */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-gray-400">Terminal — TanStack Start</span>
        </div>

        {/* Terminal body */}
        <pre className="p-4 overflow-x-auto leading-relaxed">
          {`$ npm create @tanstack/start@latest



Use "tanstack create" or "npx @tanstack/cli create" instead.
See: https://tanstack.com/start/latest/docs/framework/react/quick-start

┌  Let's configure your TanStack Start application
│
◆  What would you like to name your project?
│
◆  Select toolchain
│  ● None
│  ○ Biome
│  ○ ESLint
│
◆  Select deployment adapter
 ○ Cloudflare  
 ○ Netlify 
 ● Nitro (agnostic) 
 ○ Railway
◆  What add-ons would you like for your project?
 ◻ Neon (Add the Neon database to your application.) 
 ◻ WorkOS 
 ◻ Clerk 
 ◻ Convex 
 ◻ Sentry 
 ◻ Prisma 
 ◻ Strapi 
 ◻ AI 
 ◻ Compiler 
 ◻ DB 
 ◻ Drizzle 
 ◻ Form 
 ◻ MCP 
 ◻ oRPC 
 ◻ Paraglide (i18n) 
 ◻ Shadcn 
 ◻ T3Env 
 ◻ Table 
 ◻ tRPC 
 ◻ Better Auth 
 ◻ Store 
 ◻ Storybook 
 ◻ Apollo Client 
 ◻ Query
│
◆  Would you like to use Tailwind CSS?
│  ● Yes
│
◇  Initialized git repository
◇  Installed dependencies
│

│
└  Your TanStack Start app is ready!

$ cd test-tanstack-start
$ npm run dev
`}
        </pre>
      </div>
    </div>
  );
}
