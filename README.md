# Diobu Connect

Diobu Connect is a modern web application built with Next.js, designed to foster community connection and engagement within the Diobu area. It serves as a central hub for events, blog posts, galleries, and information, aiming to empower the community through shared experiences and stories.

## Features

*   **Responsive Navigation:** A dynamic top navigation bar that adapts to different screen sizes, including a floating navigation for improved user experience on scroll.
*   **Themed Layout:** Utilizes a theme context for consistent styling and potential future theme switching.
*   **Rich Content Sections:**
    *   **Header:** Engaging introductory section.
    *   **Featured:** Highlights key content or initiatives.
    *   **Boxes Section:** Visually appealing display of information categories.
    *   **Blog Section:** Showcases recent articles and stories.
    *   **Priorities Section:** Details the project's core focus areas and impact.
    *   **Testimonies Section:** Shares community feedback and success stories.
*   **Dedicated Pages:**
    *   Events, Blog, Gallery, About, and Contact pages for comprehensive information.
    *   Dynamic routing for individual blog posts and events.
*   **Interactive UI:** Leverages `framer-motion` for smooth animations and transitions.
*   **Modern Styling:** Built with Tailwind CSS for a utility-first approach to styling.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **State Management:** React Context API

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have Node.js (v18 or higher) and npm/yarn/pnpm/bun installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/diobu-connect.git
    cd diobu-connect
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The page will automatically reload as you make changes.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

This will create an optimized build in the `.next` directory.

### Running in Production Mode

To start the application in production mode after building, run:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Project Structure

The project follows the Next.js App Router structure:

```
.
├── public/                 # Static assets (images, fonts)
├── src/
│   ├── app/                # Main application routes and layout
│   │   ├── (pages)/        # Grouped pages (home, about, contact, etc.)
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable UI components (Button, Footer, TopNav)
│   ├── context/            # React Context providers (ThemeContext)
│   ├── data/               # Placeholder for data files
│   ├── helpers/            # Utility functions
│   ├── HOC/                # Higher-Order Components
│   └── lib/                # Library utilities
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── ...                     # Other configuration files (.eslintrc.json, next.config.mjs)
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
