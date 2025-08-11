import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-amber-400 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Cursus Integer consequat Tristique.
            </h2>
            <p className="text-black opacity-80 mb-8">
              Ready to get started? Join thousands of satisfied customers who
              trust our platform.
            </p>
            <Button variant="secondary" size="lg">
              Get Started Now <ArrowRight size={20} />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Real-time notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Team collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
