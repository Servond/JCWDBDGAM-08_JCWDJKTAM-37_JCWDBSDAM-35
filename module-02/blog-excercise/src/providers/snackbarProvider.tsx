"use client";

import { SnackbarProvider } from "notistack";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={2}
      transitionDuration={200}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      {children}
    </SnackbarProvider>
  );
}
