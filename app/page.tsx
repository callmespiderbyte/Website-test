import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-400">
      <div className="w-full max-w-md px-4 py-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-white">
          Sign up to my newsletter
        </h1>
        <div className="relative">
          <Input
            className="w-full pl-4 pr-12 py-2 text-lg bg-white rounded-full"
            placeholder="Email"
            type="email"
          />
          <div className="absolute inset-y-1 right-1 flex items-center">
            <button className="p-1 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}