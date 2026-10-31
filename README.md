# NEONCORE — Gamer Sign-up Form

A responsive gamer sign-up form built with Angular, TypeScript, and SCSS. This project focuses on reusable components, form validation, password security feedback, and an interactive user experience.

## Preview

![NEONCORE Gamer Sign-up Form](./preview.png)

**Live Demo:** [View Live Site](YOUR_LIVE_SITE_URL)

**Frontend Mentor Challenge:** [View Challenge](YOUR_FRONTEND_MENTOR_CHALLENGE_URL)

## Features

- Responsive layout for different screen sizes.
- Reusable input components built with Angular.
- Reactive Forms for centralized form state management.
- Custom validators for form fields.
- Password visibility toggle.
- Password strength indicator.
- Terms and conditions acceptance.
- Field validation and error messages.
- Loading state with a simulated submission delay.
- Success screen after successful form submission.
- Reusable button and input components.

## Built With

- Angular
- TypeScript
- SCSS / Sass
- Angular Reactive Forms
- ControlValueAccessor
- Custom Angular Validators
- BEM methodology
- CSS Flexbox and Grid
- Responsive Web Design

## Form States

The application implements different interaction states:

1. **Initial State:** Empty registration form.
2. **Validation State:** Displays field errors when validation requirements are not met.
3. **Password Feedback:** Allows users to toggle password visibility and check password strength.
4. **Loading State:** Disables submission while displaying a simulated processing message.
5. **Success State:** Displays a confirmation message after successful submission.

## Accessibility

Accessibility considerations implemented and being refined include:

- Semantic HTML elements.
- Explicit labels for form inputs.
- Native form controls.
- Dynamic success announcements using `role="status"` and `aria-live`.
- Decorative images with empty alternative text.
- Validation feedback for form fields.

## What I Learned

This challenge helped me improve my Angular development skills, especially when building reusable form components with ControlValueAccessor.

I practiced centralizing form-control behavior, implementing custom validators, managing reactive form states, and creating reusable components without duplicating logic.

I also explored password strength feedback, conditional rendering, loading states, and success feedback.

Another important learning experience was understanding the importance of accessibility, particularly how labels, validation messages, ARIA attributes, and keyboard interactions improve the user experience.

Overall, this project strengthened my understanding of component architecture, clean code principles, and building maintainable interfaces with Angular.

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI (optional)

### Installation

Clone the repository:

```bash
git clone https://github.com/NAIREIS/frontend-mentor-gamer-sign-up-form.git
```

Navigate to the project directory:

```bash
cd frontend-mentor-gamer-sign-up-form
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npx ng serve
```

Open your browser at:

```text
http://localhost:4200/
```

## Author

**Naiane Reis**

- GitHub: [@NaianeReis27](https://github.com/NAIREIS)
- Frontend Mentor: [Your Frontend Mentor Profile](YOUR_FRONTEND_MENTOR_PROFILE_URL)