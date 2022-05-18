module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorAppointment: {
          primary: "rgba(15, 207, 236, 1)",
          secondary: "rgba(25, 211, 174, 1)",
          accent: "rgba(58, 66, 86, 1)",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
