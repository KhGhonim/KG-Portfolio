import Services from "../Services";

export async function generateMetadata({ params }) {
  const id = params.service;
  return {
    title: id,
  };
}

export default function page({ params }) {
  const service = params.service;

  return (
    <div>
      <Services service={service} />
    </div>
  );
}
