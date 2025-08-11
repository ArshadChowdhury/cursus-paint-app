import Button from "./Button";
import { Star } from "lucide-react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-amber-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Cursus Integer Consequat Tristique.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Started <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg">
                <Play size={20} /> Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-amber-400 rounded-full mb-4 flex items-center justify-center">
                <Star className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Featured Service</h3>
              <p className="text-gray-600">
                Professional design solutions for your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
