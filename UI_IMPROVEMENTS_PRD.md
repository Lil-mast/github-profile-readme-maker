# GPRM UI Improvements - Product Requirements Document

## Project Overview
**GPRM (GitHub Profile ReadMe Maker)** - A Next.js web application for creating GitHub profile READMEs with a multi-step form interface.

---

## Proposed UI Changes

### 1. **Modern Gradient Background**
**Current:** Solid dark background (`rgb(24 24 27)`)
**Proposed:** Add a subtle animated gradient mesh background
- Implement a CSS-based animated gradient with green/blue/purple tones
- Keep it subtle to maintain readability
- Add floating particle/gradient orb effects
- **Files to modify:** `styles/globals.css`

### 2. **Enhanced Navigation Bar**
**Current:** Simple logo + support button
**Proposed:** Full navigation with smooth scroll links
- Add navigation links: Home, Features, FAQ, GitHub
- Add scroll-based background blur/opacity change
- Sticky positioning with enhanced shadow on scroll
- Mobile hamburger menu for responsive design
- **Files to modify:** `components/NavBar.js`

### 3. **Hero Section Improvements**
**Current:** Simple text input with arrow button
**Proposed:** Modern, centered hero with enhanced typography
- Add typing animation for the headline text
- Improve input field with icon and better focus states
- Add a subtle glow effect around the input on focus
- Add a "Get Started" CTA button with pulsing animation
- **Files to modify:** `components/slides/HomePage.js`, `components/elements/AnimatedText.js`

### 4. **Scroll-Triggered Animations**
**Current:** No entrance animations
**Proposed:** Fade-in and slide-up animations on scroll
- Use Intersection Observer for performance
- Add staggered animation for feature cards
- Add slide-in animations for section headings
- **Files to modify:** Create `components/elements/ScrollAnimation.js`, update `components/home-components/Features.js`

### 5. **Feature Cards Redesign**
**Current:** Simple icon + text layout
**Proposed:** Modern card design with hover effects
- Add card backgrounds with glassmorphism effect
- Implement hover lift and glow effects
- Add gradient borders on hover
- Improve icon container styling
- **Files to modify:** `components/home-components/Features.js`

### 6. **Progress Stepper for Form**
**Current:** Simple pagination dots
**Proposed:** Visual step indicator with labels
- Add numbered steps with labels (About → Stats → Tech Stack → Socials → Extras)
- Show completed steps with checkmarks
- Add connector lines between steps
- Clickable steps to navigate back
- **Files to modify:** `components/elements/Pagination.js`, all slides in `components/slides/`

### 7. **Form Input Enhancements**
**Current:** Basic bordered inputs
**Proposed:** Modern floating label inputs
- Add floating labels that animate on focus
- Add input icons for better UX
- Improve focus states with glowing borders
- Add validation indicators (checkmark/X)
- **Files to modify:** `components/slides/*.js`, `components/elements/textinput/*.js`

### 8. **Button Component System**
**Current:** Inconsistent button styles across components
**Proposed:** Unified button design system
- Create primary, secondary, and ghost button variants
- Add loading state with spinner animation
- Implement ripple click effect
- Consistent sizing and spacing
- **Files to modify:** `components/elements/buttons/*.js`

### 9. **Footer Redesign**
**Current:** Basic social links + email
**Proposed:** Multi-column footer with more content
- Add links sections: Product, Resources, Legal
- Add newsletter subscription input
- Improve social icons with hover animations
- Add "Back to Top" floating button enhancement
- **Files to modify:** `components/elements/Footer.js`

### 10. **Loading States & Transitions**
**Current:** Instant transitions between slides
**Proposed:** Smooth transitions with loading indicators
- Add page transition animations between form steps
- Implement skeleton loading for async operations
- Add progress bar during README generation
- **Files to modify:** `components/slides/*.js`, `components/elements/`

### 11. **Toast Notification System**
**Current:** Basic error toast
**Proposed:** Comprehensive toast system
- Add success, error, info, and warning variants
- Implement auto-dismiss with progress bar
- Stack multiple toasts
- Smooth enter/exit animations
- **Files to modify:** `components/elements/toaster/*.js`

### 12. **Mobile Responsiveness Improvements**
**Current:** Basic responsive design
**Proposed:** Mobile-first polish
- Improve touch targets (minimum 44px)
- Add swipe gestures for form navigation
- Optimize typography scaling
- Fix horizontal overflow issues
- **Files to modify:** All component files with responsive classes

---

## Implementation Priority

### Phase 1 (High Impact, Low Effort)
1. Modern Gradient Background
2. Feature Cards Redesign
3. Button Component System
4. Scroll-Triggered Animations

### Phase 2 (Medium Impact, Medium Effort)
5. Hero Section Improvements
6. Enhanced Navigation Bar
7. Toast Notification System

### Phase 3 (High Impact, High Effort)
8. Progress Stepper for Form
9. Form Input Enhancements
10. Loading States & Transitions
11. Footer Redesign
12. Mobile Responsiveness Improvements

---

## Technical Notes

- **Framework:** Next.js with React
- **Styling:** Tailwind CSS
- **State Management:** MobX
- **Icons:** Heroicons
- **Animation:** CSS animations + Framer Motion (if needed)

## Design System Colors (Current)
- Primary: `green-300`, `green-200`
- Background: `zinc-900` / `rgb(24 24 27)`
- Text: `green-200`, `gray-500`
- Accents: `blue-500`, `violet-500`, `rose-500`
