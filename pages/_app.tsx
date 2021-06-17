import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BreakpointProvider } from "@w11r/use-breakpoint";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  );
}
export default MyApp;
