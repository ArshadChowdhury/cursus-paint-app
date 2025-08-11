import Card from "./Card";

export default function TestimonialSection() {
  return (
    <section className="bg-gray-900 px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                What our customers thought?
              </h3>
              <p className="text-gray-600 mb-4">
                "This platform has transformed how we handle our business
                operations. The interface is intuitive and the support team is
                exceptional."
              </p>
              <div className="text-sm text-gray-500">
                <strong>John Doe</strong> - CEO, TechCorp
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
