import { STORE } from "../data/store";

export default function SafetyCard() {
  return (
    <section className="safety-card">
      <img
        src="/banners/safety.svg"
        alt={`${STORE.name} Safe: Your safety, our priority. We make sure that your package is safe at every point of contact.`}
        loading="lazy"
      />
    </section>
  );
}
