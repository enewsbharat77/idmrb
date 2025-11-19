# Top Stories Component - Setup Guide

## ✅ Component Successfully Created!

### Files Created:
1. **Component**: `src/components/TopStories.jsx`
2. **Story Page**: `src/app/stories/[slug]/page.js`
3. **Home Page**: Updated to include Top Stories

### How to Add Images:

1. Add your story images to: `public/stories/`
   - Example: `public/stories/story1.jpg`

2. The component will automatically display them

### How to Add More Stories:

#### In `src/components/TopStories.jsx`:
```javascript
const stories = [
  {
    id: 1,
    title: "Your Story Title",
    image: "/stories/story1.jpg",
    slug: "your-story-slug"
  },
  {
    id: 2,
    title: "Another Story",
    image: "/stories/story2.jpg",
    slug: "another-story-slug"
  }
];
```

#### In `src/app/stories/[slug]/page.js`:
```javascript
const storiesData = {
  "your-story-slug": {
    title: "Your Story Title",
    image: "/stories/story1.jpg",
    date: "2025",
    content: `Your full story content here...`
  }
};
```

### Features:
- ✅ Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
- ✅ Hover effects with scale and shadow
- ✅ Click to view full story
- ✅ Back button on story page
- ✅ Clean, modern design

### To Run:
```bash
cd idmrb
npm run dev
```

Visit: http://localhost:3000
