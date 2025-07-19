import { Suspense, type JSX } from "react";
import Loader from "../../../components/Loader/Loader";

const LazyWrapper = ({ children }: { children: JSX.Element }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default LazyWrapper;
