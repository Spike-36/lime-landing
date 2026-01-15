import AppDemo from "@/components/app-demo/AppDemo";

export default function DemoSection() {
  return (
    <section className="px-6 pt-10 pb-16">
      {/* Text intro */}
      <div className="max-w-3xl mx-auto mb-14">
        {/* Section lead */}
        <p className="text-lg font-medium text-gray-900 mb-3">
          See how YumWords helps you choose
        </p>

        {/* Body */}
        <p className="text-lg text-gray-800 leading-relaxed">
          Browse a focused selection of local food and drink,
          and tap any item for quick clarity.
        </p>
      </div>

      {/* Demo */}
      <AppDemo />
    </section>
  );
}
