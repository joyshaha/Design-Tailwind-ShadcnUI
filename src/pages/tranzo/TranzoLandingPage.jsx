import React from 'react'
import { Button } from "@/components/ui/button";
import tranzoLogo from "@/assets/tranzo.png";
import { Badge } from "@/components/ui/badge";

function TranzoLandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[linear-gradient(to_bottom,white,#eef1ff)]">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2">
          <img src={tranzoLogo} alt="Tranzo Logo" className="w-48 h-20 object-contain" />
          {/* <div className="w-6 h-6 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-sm rotate-12" />
          <h1 className="text-2xl font-semibold text-gray-800">Tranzo</h1> */}
        </div>
        <p className="text-sm text-indigo-600 mt-2">
          AI-Powered Tax Refund Discovery for Canadians
        </p>
      </div>

      {/* Hero Section */}
      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Tranzo&apos;s AI will find{" "}
          <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            $200+
          </span>{" "}
          in hidden tax value — or you pay nothing.
        </h2>

        <p className="mt-5 text-gray-600 text-base md:text-lg">
          Using AI, Tranzo reviews your statements to find tax-saving
          opportunities you might miss on your own — long before you hit{" "}
          <span className="font-medium text-gray-800">“file.”</span>
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button className="bg-linear-to-l from-blue-500 to-indigo-500 text-white px-6 py-6 rounded-xl text-lg hover:opacity-90 transition cursor-pointer">
          Reserve Early Access — $1
        </Button>

        <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1">
          <span className="text-green-500">●</span>
          Limited to the first 100 Canadians{" "}
          <span className="ml-1">💰 If we find under $200, you pay $0</span>
        </p>
        <Badge variant="destructive">Default</Badge>
      </div>
    </div>
  )
}

export default TranzoLandingPage