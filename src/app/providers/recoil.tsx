import React, { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
/**
 * @package
 */
export const RecoilProvider = ({ children }: PropsWithChildren) => (
  <RecoilRoot>{children}</RecoilRoot>
);
