# Cv Builder Web
> Welcome to my React CV Builder project! I built this single-page web that updates in real-time when a user types. It features a side by side split that lets you watch your changes update immediately on a  preview sheet and on the other side you can edit your data.This web is written using JavaScript and Reactnas a framework , handles complex nested data flows, and uses robust global state tracking with zero external database dependencies.


## Key Features

- **Side by Side split**: Has Editing mode on the left and Preview mode on the right. The preview mode has an A4 preview.

- **Isolated Scroll Bar** : Both the left editor side and the right document preview side panel scroll completely independently. So that it is possiblen to ctype into the form sections at the bottom without having to also scroll down to empty page on the cv preview.

- **View Full Cv Preview toggle** :  With a click on the button, the edit mode will completely get out of sight and the preview area expands to fill the screen on the center.

- **Load sample data toggle** : Reloads the sample data fully.

- **Clear All field toggle** : This will clear the sample data making the cv preview empty.

## Tech Stack

- **HTML & Standard CSS**
- **React** (as a framework)
- **Vanilla JavaScript**
- **Vite** (as a local compiler and bundler)
- **GitHub** (for version control)

## Getting Started Locally

Follow these steps to set up and run the project on your local server:

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.


### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahlet-1/Cv-Builder-Web.git
   cd Cv-Builder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```


