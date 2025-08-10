# Js Joy Family Daycare Website

A modern, responsive React-based website for Joy Family Daycare, featuring beautiful design, comprehensive information about programs and services, and easy navigation for parents.

## 🚀 Live Website

- **Development**: https://7837e9d0526242d88952e7b4be382382-0b851ece2f91412d93652352b.fly.dev/
- **Production**: (To be deployed via GitHub Pages)

---

## 📁 Project Structure

```
js-joy-haven/
├── client/                          # Frontend React application
│   ├── components/                  # Reusable React components
│   │   ├── ui/                     # UI library components (buttons, cards, etc.)
│   │   │   ├── button.jsx          # Styled button component
│   │   │   ├── card.jsx            # Card layout component
│   │   │   ├── toast.jsx           # Notification toasts
│   │   │   └── ...                 # Other UI components
│   │   └── Layout.jsx              # Main layout with header/footer
│   ├── pages/                      # Website pages
│   │   ├── Index.jsx               # Homepage (/)
│   │   ├── About.jsx               # About Us page (/about)
│   │   ├── Programs.jsx            # Programs page (/programs)
│   │   ├── Admissions.jsx          # For Parents page (/admissions)
│   │   ├── Gallery.jsx             # Photo Gallery (/gallery)
│   │   └── NotFound.jsx            # 404 error page
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions
│   ├── App.jsx                     # Main application component
│   └── global.css                  # Global styles
├── server/                         # Backend server (Express.js)
├── public/                         # Static assets
│   ├── placeholder.svg             # Placeholder images
│   └── robots.txt                  # SEO file
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

---

## 🎯 How to Update Page Content

### 🏠 **Homepage Content** → `client/pages/Index.jsx`

**What's on this page:**

- Hero section with main message
- Feature cards (Safe & Nurturing, Small Groups, etc.)
- Program overview section
- Testimonials
- Call-to-action sections

**To modify:**

1. Open `client/pages/Index.jsx`
2. Look for these sections:
   - **Hero text**: Lines ~40-60 (main headline and description)
   - **Features**: Lines ~80-120 (the 4 main feature cards)
   - **Programs overview**: Lines ~200-300
   - **Testimonials**: Lines ~400-500

**Example - Changing the main headline:**

```jsx
// Find this section around line 45:
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
  Welcome to Js Joy Family // ← Change this text
</h1>
```

### 👥 **About Us Page** → `client/pages/About.jsx`

**What's on this page:**

- Hero section with statistics
- Our story/mission section
- Core values
- Team member profiles

**To modify:**

1. Open `client/pages/About.jsx`
2. Key sections:
   - **Statistics**: Lines ~160-200 (15+ Years, 200+ Families, etc.)
   - **Our story**: Lines ~210-240 (journey and mission text)
   - **Core values**: Lines ~290-330 (Love & Care, Safety First, etc.)
   - **Team profiles**: Lines ~350-450 (staff information)

**Example - Updating statistics:**

```jsx
// Find around line 180:
<div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
<div className="text-sm text-gray-600">Years Experience</div>  // ← Change these
```

### 📚 **Programs Page** → `client/pages/Programs.jsx`

**What's on this page:**

- Program overview
- Detailed curriculum for Infants (6-12mo), Toddlers (1-2yr), Beginners (3-4yr)
- Daily schedules
- Learning activities

**To modify:**

1. Open `client/pages/Programs.jsx`
2. Key sections:
   - **Program descriptions**: Lines ~100-200 (age group overviews)
   - **Daily schedules**: Lines ~300-400 (time-based activities)
   - **Learning activities**: Lines ~500-600 (curriculum details)

### 👨‍👩‍👧‍👦 **For Parents Page** → `client/pages/Admissions.jsx`

**What's on this page:**

- Tuition information and pricing
- Calendar and operating hours
- Family communication systems

**To modify:**

1. Open `client/pages/Admissions.jsx`
2. Key sections:
   - **Tuition rates**: Lines ~50-150 (pricing tables)
   - **Calendar info**: Lines ~200-300 (schedules and holidays)
   - **Communication**: Lines ~400-500 (parent portal, updates)

**Example - Updating tuition rates:**

```jsx
// Find the tuitionRates array around line 80:
{
  program: "Infant Care",
  ageRange: "6-12 months",
  fullTime: "$1,400",  // ← Change prices here
  partTime: "$850",
  // ...
}
```

### 📸 **Gallery Page** → `client/pages/Gallery.jsx`

**What's on this page:**

- Photo categories and filters
- Image grid with descriptions
- Interactive lightbox

**To modify:**

1. Open `client/pages/Gallery.jsx`
2. Key sections:
   - **Categories**: Lines ~30-50 (photo filter categories)
   - **Images**: Lines ~60-150 (photo data with descriptions)

---

## 🛠 **Global Elements** → `client/components/Layout.jsx`

**This file controls elements that appear on every page:**

### Navigation Menu

- **Location**: Lines ~11-18
- **Current pages**: Home, About Us, Programs, For Parents, Gallery

**To add/remove pages:**

```jsx
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "New Page", href: "/new-page" }, // ← Add new page here
  // ...
];
```

### Contact Information

- **Phone number**: Line ~200 (footer contact section)
- **Email**: Line ~207
- **Address**: Lines ~214-216
- **Hours**: Lines ~222-224

### Footer Content

- **Business description**: Lines ~150-152
- **Credentials**: Lines ~155-172 (State Licensed, Flexible Hours, etc.)

---

## 🎨 **Styling and Colors**

The website uses a consistent color scheme:

- **Primary**: Orange (`orange-500`, `orange-600`)
- **Secondary**: Pink (`pink-500`, `pink-600`)
- **Accent**: Purple (`purple-500`, `purple-600`)
- **Background**: Gradient combinations

**To change colors globally**, search for color classes like:

- `bg-orange-500` → Background colors
- `text-orange-600` → Text colors
- `from-orange-500 to-pink-500` → Gradient backgrounds

---

## 🔗 **Important Links**

### Contact Form

All "Contact Us" and "Schedule a Visit" buttons link to:
**Google Form**: `https://forms.gle/krsWqr5g7Ch8YWpAA`

**To change this URL:**

1. Search for `forms.gle/krsWqr5g7Ch8YWpAA` across all files
2. Replace with your new Google Form URL

### Phone Number

**Current**: `(555) 123-4567`
**To change**: Search for this number across all files and replace

---

## 🚀 **Development Commands**

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Opens at http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 **Testing**

This project includes comprehensive testing setup with Vitest. For detailed testing instructions, see **[TESTING.md](./TESTING.md)**.

### Quick Testing Commands

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type checking
npm run typecheck
```

### Local Testing Quick Start

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Open browser**: http://localhost:8080
4. **Run tests**: `npm test`

For comprehensive testing procedures, browser compatibility testing, API testing, and troubleshooting, see the complete **[Testing Guide](./TESTING.md)**.

---

## 📱 **Content Update Checklist**

When updating content, consider updating these related items:

### Business Information Changes

- [ ] Phone number in Layout.jsx (header & footer)
- [ ] Address in Layout.jsx (footer)
- [ ] Email in Layout.jsx (footer)
- [ ] Hours in Layout.jsx (footer)
- [ ] Business name/logo if needed

### Program Information Changes

- [ ] Age ranges in Programs.jsx
- [ ] Tuition rates in Admissions.jsx
- [ ] Daily schedules in Programs.jsx
- [ ] Capacity/enrollment info across pages

### Staff Changes

- [ ] Team profiles in About.jsx
- [ ] Credentials and experience
- [ ] Photos (when available)

---

## 🔧 **Common Modifications**

### Adding a New Page

1. Create new file: `client/pages/NewPage.jsx`
2. Add route in `client/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add to navigation in `client/components/Layout.jsx`

### Changing Images

1. Add new images to `public/` folder
2. Update image paths in page files
3. Current placeholder: `"/placeholder.svg"`

### Updating Contact Form

Replace all instances of the Google Form URL:

```bash
# Search for current form URL
grep -r "forms.gle/krsWqr5g7Ch8YWpAA" client/
```

---

## 💡 **Tips for Non-Technical Users**

1. **Text changes** are usually in quotation marks: `"Text to change"`
2. **Numbers** (prices, phone, etc.) are easy to spot and change
3. **Be careful with** brackets `{ }`, commas `,`, and quotes `"`
4. **Test changes** by running `npm run dev` and checking the website
5. **Keep backups** of working files before major changes

---

## 📞 **Need Help?**

- **File not working?** Check for missing commas or quotes
- **Page not showing?** Make sure the route is added in `App.jsx`
- **Styling broken?** Check that CSS class names are spelled correctly

For technical support, refer to the development team or create an issue in the repository.

---

_Last updated: January 2024_
