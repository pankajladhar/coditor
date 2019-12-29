module.exports = {
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)"
        },
        indigo: {
          900: "var(--indigo-900)"
        },
        brand: {
          google: "#ea4335",
          facebook: "#3b5998",
          twitter: "#1da1f2",
          github: "#4078c0"
        }
      }
    },

    fontFamily: {
      display: ["Yantramanav"],
      headline: ["Raleway"],
      quote: ["Bad Script"]
    }
  },
  variants: {
    backgroundColor: ["hover", "focus", "active", "active-hover"],
    textColor: [
      "hover",
      "focus",
      "active",
      "group-hover",
      "active",
      "active-hover"
    ]
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant("active", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.active .${e(`active${separator}${className}`)}`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("active-hover", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `active-hover${separator}${className}`
          )}:hover , .active:hover .${e(
            `active-hover${separator}${className}`
          )}`;
        });
      });
    }
  ]
};
