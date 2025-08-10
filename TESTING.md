# Testing Guide - Joy Family Daycare Website

A comprehensive guide for testing the Joy Family Daycare website on your local machine.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** (for cloning the repository) - [Download here](https://git-scm.com/)

### Verify Prerequisites

```bash
# Check Node.js version
node --version
# Should show v18.x.x or higher

# Check npm version
npm --version
# Should show 8.x.x or higher

# Check Git version
git --version
# Should show git version 2.x.x
```

---

## 📥 Setting Up the Project

### 1. Clone the Repository

```bash
# Clone the project
git clone <repository-url>

# Navigate to project directory
cd js-joy-family-daycare

# Or if you have the project files already:
cd path/to/your/project
```

### 2. Install Dependencies

```bash
# Install all required packages
npm install

# Alternative with yarn
yarn install
```

**Expected output**: You should see packages being installed, and it should complete without errors.

### 3. Environment Setup

The project should work out of the box without additional environment variables for local testing.

---

## 🧪 Running Tests

### Unit Tests with Vitest

The project is configured with Vitest for testing. Currently, no test files exist, but the framework is ready.

```bash
# Run all tests (once)
npm test

# Run tests in watch mode (continuous)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

**Note**: Since no test files exist yet, you'll see a message that no tests were found. This is expected.

### Creating Your First Test

Create a test file to verify the setup:

```bash
# Create a simple test file
mkdir -p client/__tests__
```

Example test file (`client/__tests__/example.test.js`):

```javascript
import { describe, it, expect } from 'vitest'

describe('Basic functionality', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })
})
```

---

## 🔧 Local Development Testing

### 1. Start Development Server

```bash
# Start the development server
npm run dev
```

**Expected output**:
```
VITE v6.x.x ready in Xxx ms

➜  Local:   http://localhost:8080/
➜  Network: http://[your-ip]:8080/
```

### 2. Access the Application

Open your web browser and navigate to:
- **Local**: http://localhost:8080/
- **Network**: Use the network URL if testing from other devices

### 3. Verify Core Functionality

#### ✅ Navigation Testing
- [ ] Click all navigation links (Home, About Us, Programs, For Parents, Gallery)
- [ ] Verify each page loads correctly
- [ ] Check that URLs change appropriately
- [ ] Test the mobile menu (resize browser or use mobile device)

#### ✅ Page Content Testing
- [ ] **Homepage**: Verify hero section, feature cards, and testimonials load
- [ ] **About Us**: Check statistics, story section, and team profiles
- [ ] **Programs**: Verify program cards and curriculum information
- [ ] **For Parents**: Check tuition tables and calendar information
- [ ] **Gallery**: Verify image categories and photo grid

#### ✅ Interactive Elements Testing
- [ ] Contact form links open correctly
- [ ] Phone number links work (should open phone app)
- [ ] External links open in new tabs
- [ ] Image galleries and modals function properly

#### ✅ Responsive Design Testing
Test the website at different screen sizes:
- [ ] **Desktop**: 1920x1080, 1366x768
- [ ] **Tablet**: 768x1024 (iPad)
- [ ] **Mobile**: 375x667 (iPhone), 360x640 (Android)

**How to test responsiveness**:
1. Use browser developer tools (F12)
2. Click the device toggle icon
3. Test different device presets
4. Verify layouts adapt properly

---

## 🌐 Cross-Browser Testing

Test the website in multiple browsers to ensure compatibility:

### Desktop Browsers
- [ ] **Chrome** (latest version)
- [ ] **Firefox** (latest version)
- [ ] **Safari** (macOS only)
- [ ] **Edge** (latest version)

### Mobile Browsers
- [ ] **Chrome Mobile** (Android)
- [ ] **Safari Mobile** (iOS)
- [ ] **Firefox Mobile**

---

## 🔍 API Testing

The project includes an Express server with API endpoints.

### Testing API Endpoints

While the development server is running, test these endpoints:

```bash
# Test ping endpoint
curl http://localhost:8080/api/ping

# Expected response: {"message":"pong"}

# Test demo endpoint
curl http://localhost:8080/api/demo

# Expected response: {"message":"Hello from the demo endpoint!"}
```

**Using browser**: Navigate directly to:
- http://localhost:8080/api/ping
- http://localhost:8080/api/demo

---

## 🎯 Performance Testing

### Lighthouse Testing

Use Chrome DevTools Lighthouse for performance analysis:

1. Open the website in Chrome
2. Press F12 to open DevTools
3. Go to "Lighthouse" tab
4. Click "Analyze page load"
5. Review scores for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Target scores**: Aim for 90+ in all categories.

### Manual Performance Checks

- [ ] Page load time under 3 seconds
- [ ] Images load progressively
- [ ] Smooth scrolling and animations
- [ ] No JavaScript errors in console

---

## 🚨 Troubleshooting

### Common Issues and Solutions

#### Development Server Won't Start

**Error**: `Port 8080 already in use`
```bash
# Kill process using port 8080
npx kill-port 8080

# Or use a different port
npm run dev -- --port 3000
```

#### Node.js Version Issues

**Error**: `Node.js version not supported`
```bash
# Check current version
node --version

# Install Node Version Manager (nvm)
# Then install and use Node 18+
nvm install 18
nvm use 18
```

#### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors

```bash
# Check for TypeScript errors
npm run typecheck

# Check for linting issues
npm run format.fix
```

### Getting Help

If you encounter issues:

1. **Check the console**: Look for error messages in browser DevTools
2. **Check terminal**: Look for errors in the development server output
3. **Clear cache**: Hard refresh (Ctrl+Shift+R) or clear browser cache
4. **Restart server**: Stop (Ctrl+C) and restart `npm run dev`

---

## 📋 Testing Checklist

Use this checklist for comprehensive testing:

### Pre-Testing Setup
- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server starts without errors
- [ ] Browser opens to localhost:8080

### Functional Testing
- [ ] All pages load successfully
- [ ] Navigation works correctly
- [ ] Contact forms/links function
- [ ] Images display properly
- [ ] Responsive design works
- [ ] API endpoints respond correctly

### Cross-Browser Testing
- [ ] Chrome desktop/mobile
- [ ] Firefox desktop/mobile
- [ ] Safari (if available)
- [ ] Edge

### Performance Testing
- [ ] Lighthouse scores 90+
- [ ] Page load under 3 seconds
- [ ] No console errors
- [ ] Smooth user interactions

### Final Checks
- [ ] All content displays correctly
- [ ] Contact information is accurate
- [ ] External links work
- [ ] No broken images or missing assets

---

## 🔄 Continuous Testing

### Automated Testing (Future Enhancement)

Consider adding these test types as the project grows:

- **Component Tests**: Test individual React components
- **Integration Tests**: Test component interactions
- **E2E Tests**: Full user journey testing with Playwright or Cypress
- **Visual Regression Tests**: Ensure UI doesn't break with changes

### Test Coverage Goals

- **Unit Tests**: 80%+ coverage for business logic
- **Integration Tests**: Cover all critical user paths
- **E2E Tests**: Cover main user journeys

---

## 📈 Production Testing

Before deploying to production:

### Build Testing
```bash
# Create production build
npm run build

# Test production build locally
npm start

# Verify at http://localhost:8080
```

### Production Checklist
- [ ] Build completes without errors
- [ ] Production site loads correctly
- [ ] All functionality works as expected
- [ ] Performance remains optimal
- [ ] Analytics and tracking work (if implemented)

---

_This testing guide ensures the Joy Family Daycare website functions perfectly across all devices and browsers. Update this document as new features and tests are added._
