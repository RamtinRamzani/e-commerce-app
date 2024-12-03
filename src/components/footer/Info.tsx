import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-semibold text-neutral-06">Info</h2>

      <div className="flex flex-col gap-4">
        <Link to="/">Shipping Policy</Link>
        <Link to="/">Return & Refund</Link>
        <Link to="/">Support</Link>
        <Link to="/">FAQs</Link>
      </div>
    </div>
  );
}
