import AppDemo from "@/components/app-demo/AppDemo";

export default function DemoSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          See how YumWords helps you choose
        </h2>
        <p className="text-lg text-gray-800">
          Browse a focused selection of local food and drink,
          and tap any item for quick clarity.
        </p>
      </div>

      <AppDemo />
    </section>
  );
}
