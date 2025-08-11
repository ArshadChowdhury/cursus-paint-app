import Button from "./Button";
import Card from "./Card";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Feature One",
      description: "Description for feature one with detailed explanation.",
    },
    {
      id: 2,
      title: "Quick Setup",
      description: "Get started in minutes with our easy setup process.",
    },
    {
      id: 3,
      title: "Global Audience",
      description: "Reach customers worldwide with our platform.",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock support for all your needs.",
    },
  ];

  return (
    <section className="bg-gray-900 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cursus Integer Consequat Aliquam Tristique
            </h2>
            <p className="text-gray-300 mb-8">
              Discover the key features that make our platform stand out from
              the competition.
            </p>
            <Button>Learn More</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={
                  feature.id === 2 || feature.id === 3
                    ? "bg-amber-400 text-black"
                    : ""
                }
              >
                <div className="w-8 h-8 bg-amber-400 rounded-full mb-4 flex items-center justify-center text-black font-bold">
                  {feature.id}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
