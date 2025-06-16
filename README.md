# MaxWealth PS - Financial Planning for Home Buying

MaxWealth PS is a modern, responsive web application designed to assist users with financial planning, specifically tailored for the journey of buying a home. It leverages Next.js, React, Tailwind CSS, ShadCN UI components, and Genkit for AI-powered features.

## Key Features

*   **Responsive Design**: Optimized for various screen sizes (desktop, tablet, mobile).
*   **Light/Dark Mode**: User-selectable theme preference.
*   **Comprehensive Homepage**:
    *   **Hero Section**: Engaging introduction with direct access to an AI Chatbot.
    *   **About Us**: Information about MaxWealth PS, its mission, vision, values, and team.
    *   **Financial Insights**: Carousel showcasing latest articles and vlogs with filtering and sorting capabilities.
    *   **Financial Tools & AI Insights**:
        *   Interactive Calculators: Mortgage Payment, Home Affordability, Closing Costs.
        *   AI Document Analyzer: Upload financial PDFs for AI-powered summaries.
        *   Personalized Financial Plan AI: Get a basic financial plan based on user input.
        *   AI Market Trend Summarizer: Simulated real estate market trend summaries.
    *   **Home Buying Readiness Quiz**: AI-powered quiz to assess preparedness.
    *   **Testimonials**: Client success stories in a carousel format, with placeholders for dynamic Google/Trustpilot review widgets.
    *   **Partners**: Showcase of trusted partner organizations.
    *   **FAQ**: Accordion-style frequently asked questions.
    *   **Booking Section**: Call-to-action to book appointments (directs to contact form, placeholder for calendar embed).
    *   **Contact Form & Information**: Easy ways to get in touch, including office details and a map placeholder.
*   **Detailed Insights Pages**: Individual pages for each blog post or vlog with rich content display.
*   **All Insights Page**: A dedicated page to browse all articles and vlogs with advanced filtering and sorting.
*   **Interactive Home Buying Roadmap**: Step-by-step guide to the home buying process, with progress saved locally in the browser.
*   **AI Chatbot**: Globally accessible widget for instant financial advice related to home buying.
*   **Custom 404 Page**: User-friendly page for handling non-existent routes.
*   **Smooth Animations & Transitions**: Enhancing user experience.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **UI Library**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**:
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [ShadCN UI](https://ui.shadcn.com/) (Reusable components)
*   **AI Integration**: [Genkit (by Google)](https://firebase.google.com/docs/genkit)
    *   Utilizes Google's Gemini models.
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **State Management**: React Context, `useState`, `useEffect` (primarily local component state).
*   **Linting/Formatting**: ESLint, Prettier (implicitly, through Next.js setup).

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18.x or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation


1.  **Clone the repository**:
    ```bash
    git clone https://your-repository-url.git
    cd your-project-directory
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables**:
    *   Create a `.env` file in the root of the project by copying from `.env.example` (if one exists, otherwise create it).
    *   This file is used for any API keys or environment-specific configurations. For Genkit to work with Google AI, you would typically need to set up `GOOGLE_API_KEY`.
    *   Currently, the `.env` file in this project is minimal.

    Example `.env` content:
    ```
    # For Genkit with Google AI (Gemini) - obtain from Google AI Studio or Google Cloud
    # GOOGLE_API_KEY=your_google_api_key_here
    ```
    *Note: For local Genkit development, ensure your environment is authenticated if the key isn't directly in `.env` (e.g., via `gcloud auth application-default login`).*

### Running the Development Servers

You need to run two development servers concurrently: one for the Next.js frontend and one for the Genkit AI flows.

1.  **Run the Next.js development server**:
    ```bash
    npm run dev
    ```
    This will typically start the Next.js app on `http://localhost:9002`.

2.  **Run the Genkit development server**:
    Open a new terminal window/tab and run:
    ```bash
    npm run genkit:dev
    # or for auto-reloading on changes to AI flows:
    npm run genkit:watch
    ```
    This starts the Genkit development UI (usually on `http://localhost:4000`) and makes the AI flows available for the Next.js app to call.

## Project Structure

*   `src/app/`: Contains the core application routes and layouts (using Next.js App Router).
    *   `layout.tsx`: Root layout for the application.
    *   `page.tsx`: Homepage.
    *   `globals.css`: Global styles and Tailwind CSS theme customizations.
    *   `insights/`: Pages related to financial insights and articles.
    *   `not-found.tsx`: Custom 404 page.
*   `src/components/`: Reusable UI components.
    *   `ui/`: ShadCN UI components.
    *   `layout/`: Layout components like Navbar, Footer, etc.
    *   `sections/`: Components for different sections of the homepage (Hero, About, etc.).
    *   `calculators/`: Individual calculator components.
*   `src/ai/`: Genkit AI integration.
    *   `genkit.ts`: Genkit global instance initialization.
    *   `flows/`: Defines the various Genkit flows (e.g., `financial-advisor-chatbot.ts`, `document-analyzer-flow.ts`).
    *   `dev.ts`: Entry point for the Genkit development server.
*   `src/lib/`: Utility functions, data, and Firebase configuration.
    *   `data.ts`: Static data for testimonials, partners, articles, FAQs.
    *   `utils.ts`: Utility functions (e.g., `cn` for Tailwind class merging).
    *   `firebase.ts`: Firebase app initialization (currently minimal).
*   `src/hooks/`: Custom React hooks (e.g., `useToast`, `useScrollSpy`, `useMobile`).
*   `public/`: Static assets (images, fonts if self-hosted).
*   `apphosting.yaml`: Configuration for Firebase App Hosting.
*   `next.config.ts`: Next.js configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `components.json`: ShadCN UI configuration.

## AI Features (Genkit)

The application uses Genkit to power its AI features. The flows are defined in `src/ai/flows/`.

Key flows include:
*   `financialAdvisorChatbot`: Powers the live chat widget.
*   `documentAnalyzerFlow`: Analyzes uploaded PDF documents.
*   `personalizedFinancialPlanFlow`: Generates basic financial plans.
*   `marketTrendSummarizerFlow`: Provides simulated market trend summaries.
*   `homeReadinessQuizFlow`: Assesses home buying readiness based on quiz inputs.

To work with these flows locally, ensure the Genkit development server is running (`npm run genkit:watch`).

## Styling

*   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
*   **ShadCN UI**: Pre-built, accessible, and customizable React components.
*   **Theme**: Color palette and typographic styles are defined as CSS variables in `src/app/globals.css` and leveraged by Tailwind and ShadCN components.

## Deployment

*   The project includes an `apphosting.yaml` file, suggesting deployment via **Firebase App Hosting**.
*   To build the application for production:
    ```bash
    npm run build
    ```
*   Follow Firebase App Hosting documentation for deployment steps.

## Customization

*   **Content**: Most static content (testimonials, articles, FAQs, partner logos) can be updated in `src/lib/data.ts`. Remember to replace placeholder images.
*   **Theme**: Modify colors and fonts in `src/app/globals.css` and `tailwind.config.ts`.
*   **Placeholder Images**: Update `https://placehold.co/...` image URLs throughout the components with your actual images. Utilize the `data-ai-hint` attribute to guide future AI-powered image replacement if desired.
*   **Review Widgets**: The Testimonials section has placeholders for Google Reviews and Trustpilot. You will need to obtain the embed codes from your respective business accounts on these platforms and paste them into `src/components/sections/testimonials-section.tsx`.
*   **Calendar Embed**: The Booking section has a placeholder for a live calendar embed. Replace this with your scheduling tool's embed code in `src/components/sections/booking-section.tsx`.
*   **Firebase Configuration**: If you plan to use other Firebase services (like Firestore, Storage beyond App Hosting), update the configuration in `src/lib/firebase.ts` with your actual Firebase project details.

## Future Enhancements (Ideas)

*   **User Accounts**: Re-integrate authentication for personalized dashboards and saved progress.
*   **Database Integration**: Store user data, roadmap progress, and potentially form submissions.
*   **Dynamic Content Management**: Integrate a headless CMS for managing articles and other content.
*   **Advanced AI Features**:
    *   Deeper personalization in financial plans.
    *   AI-driven suggestions within the roadmap.
    *   Data sharing between calculators and AI tools.

---

This README provides a good starting point for understanding and working with the MaxWealth PS website.
