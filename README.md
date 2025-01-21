# YouTube Clone

Welcome to the YouTube Clone project! This is a ReactJS-based application that replicates some core features of YouTube, allowing users to explore videos, search content, and navigate seamlessly between video and channel pages.

## Features

- **Category-Based Video Browsing**:
  - The sidebar allows users to browse videos by category.
  - The app initializes with the "New" category, displaying fresh content by default.

- **Search Functionality**:
  - Use the search bar to find videos or channels.
  - The results include both video cards and channel cards.

- **Video and Channel Pages**:
  - Click on a video to view it on the dedicated video page, which also displays related videos.
  - Click on a channel card to visit the channel page, which shows channel details and its videos.

## Technologies Used

- **ReactJS**: Frontend framework for building the UI.
- **RapidAPI YouTube API**: To fetch video and channel data.
- **`he` npm package**: For decoding HTML entities (e.g., displaying HTML symbols).
- **React Router**: For seamless navigation between pages.
- **Material-UI (MUI)**: For responsive and modern UI components.
- **React Hooks**: For managing state and side effects.
- **Props**: For passing data between components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GReaper-DEV/youtube-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd youtube-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your RapidAPI key:
   ```env
   VITE_YOUTUBE_API_KEY=your_rapidapi_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```


## Demo

- **Homepage**: Browse videos by category from the sidebar.
- **Search Results**: Displays video and channel cards matching the search query.
- **Video Page**: Watch the selected video and explore related videos.
- **Channel Page**: View channel details and its videos.

## Acknowledgments

- [RapidAPI](https://rapidapi.com/) for the YouTube API.
- [Material-UI](https://mui.com/) for UI components.
- [he npm package](https://www.npmjs.com/package/he) for decoding HTML entities.
