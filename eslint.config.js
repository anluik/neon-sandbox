//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

export default [
    ...tanstackConfig,
    {
        rules: {
            "import/no-cycle": "off",
            "import/order": "off",
            "sort-imports": "off",
            "@typescript-eslint/array-type": "off",
            "@typescript-eslint/require-await": "off",
            "pnpm/json-enforce-catalog": "off"
        }
    },
    {
        // Keep Tailwind class syntax canonical for Tailwind v4 so agent-written
        // code stays consistent. Only stylistic (autofixable) rules are enabled;
        // the correctness rules (no-unknown-classes / no-conflicting-classes) are
        // intentionally left off because they flag our plain-CSS design-system
        // classes (glow-dot, ghost-control, mono-label, exhibit-card).
        files: ["src/**/*.{ts,tsx}"],
        plugins: { "better-tailwindcss": betterTailwindcss },
        settings: {
            "better-tailwindcss": {
                // v4 resolves the theme from the CSS entry point.
                entryPoint: "src/styles.css"
            }
        },
        rules: {
            // Tailwind v4 wants the important marker as a suffix (`h-2.25!`).
            "better-tailwindcss/enforce-consistent-important-position": "warn",
            // Collapse arbitrary values onto the scale (`h-[9px]` -> `h-2.25`)
            // and prefer named utilities where they exist. logical: false keeps
            // physical properties (left/right) rather than rewriting to ms/me.
            "better-tailwindcss/enforce-canonical-classes": [
                "warn",
                { rootFontSize: 16, logical: false }
            ],
            "better-tailwindcss/no-duplicate-classes": "warn",
            "better-tailwindcss/no-unnecessary-whitespace": "warn"
        }
    },
    {
        ignores: ["eslint.config.js", "prettier.config.js"]
    }
];
