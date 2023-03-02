import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/pricing/index.jsx</code>
        </p>
      </div>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
