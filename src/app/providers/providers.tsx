import React, { PropsWithChildren } from "react";
import { QueryProvider } from "./query";
import { RecoilProvider } from "./recoil";
/**
 * @package
 */
export const Providers = ({ children }: PropsWithChildren) => (
  <RecoilProvider>
    <QueryProvider>{children}</QueryProvider>
  </RecoilProvider>
);
