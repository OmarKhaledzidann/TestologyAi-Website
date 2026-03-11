import { useBlocker } from "@tanstack/react-router";

/**
 * Blocks in-app navigation with a resolver (proceed/reset).
 * The browser's native beforeunload alert is disabled —
 * we rely on the custom modal only.
 *
 * Returns the blocker state so the caller can render a custom modal.
 */
export function useExitConfirmation(enabled: boolean) {
  return useBlocker({
    shouldBlockFn: () => enabled,
    enableBeforeUnload: false,
    withResolver: true,
  });
}
