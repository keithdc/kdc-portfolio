/**
 * @file App.tsx — Root providers and lazy-loaded routes
 * @shared
 * @dependencies @mui/material, react-router-dom, theme, color-mode
 */
import { useMemo, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import getTheme from "./theme";
import { ColorModeProvider, useColorMode } from "./shared/hooks/use-color-mode";

const TechLeadPage = lazy(
  () => import("./features/portfolio/pages/tech-lead-page"),
);
const FullStackPage = lazy(
  () => import("./features/portfolio/pages/full-stack-page"),
);

/** Loading fallback for lazy routes. */
function PageLoader(): React.JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

/** Blank root — profiles are only reachable via hardcoded URLs. */
function RootBlank(): React.JSX.Element {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Typography color="text.secondary" variant="body2">
        Nothing here.
      </Typography>
    </Box>
  );
}

/** Inner component that consumes color mode and applies the correct theme. */
function AppContent(): React.JSX.Element {
  const { mode } = useColorMode();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<RootBlank />} />
            <Route path="/tech-lead" element={<TechLeadPage />} />
            <Route path="/full-stack" element={<FullStackPage />} />
            <Route path="/mobile" element={<Navigate to="/full-stack" replace />} />
            <Route path="*" element={<RootBlank />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

/** Root component that wraps the app with color mode context. */
function App(): React.JSX.Element {
  return (
    <ColorModeProvider>
      <AppContent />
    </ColorModeProvider>
  );
}

export default App;
