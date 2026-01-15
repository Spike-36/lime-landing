import AppDemo from "@/components/app-demo/AppDemo";

export default function DemoSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        {/* Section lead — quiet anchor */}
        <p className="text-lg font-medium text-gray-900 mb-4">
          See how YumWords helps you choose
        </p>

        {/* Body text */}
        <p className="text-lg text-gray-800">
          Browse a focused selection of local food and drink,
          and tap any item for quick clarity.
        </p>
      </div>

      <AppDemo />
    </section>
  );
}
