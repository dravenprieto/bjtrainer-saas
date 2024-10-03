# Blackjack Trainer SaaS Platform - Product Requirements Document (PRD)

## Project Overview

The Blackjack Trainer SaaS platform will allow users to practice blackjack in an interactive way. The platform includes features such as subscription management, social login (via Supabase Auth), and secure payments (via Stripe).

We will build the platform using Next.js, shadcn/ui, TailwindCSS, Supabase, Lucid Icon, and Stripe.

## Goals

- Provide users with a seamless experience to practice blackjack and improve their skills.
- Implement robust authentication and subscription management.
- Ensure secure and reliable payments via Stripe.
- A clean and user-friendly design for easy navigation.

## Core Functionality

### 1. Home Page (app/page.tsx)

This page introduces users to the platform and sells the Blackjack Trainer SaaS. It includes the following sections:

- Hero Section: Clear messaging about the platform with a prominent "Get Started" button.
- Features Section: Highlight key features with icons (using Lucid Icon).
- Testimonials Section: Display user feedback.
- Strong Call to Action: Prompt users to sign up for the platform.
- Navbar and Footer: Navigation and footer with links to other sections of the site.

File Structure:

```
app/page.tsx
components/Navbar.tsx
components/Footer.tsx
components/Hero.tsx
components/Features.tsx
components/Testimonials.tsx
```

### 2. Login/Signup Page (app/login/page.tsx)

Users should be able to log in or sign up using:

- Email and Password
- Google Authentication
- Twitter Authentication
- Facebook Authentication

This will be implemented using Supabase Auth.

Supabase Auth Implementation Example:

```typescript
import { supabase } from '@/lib/supabase'

export async function signInWithEmail(email, password) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  })
  if (error) throw error
  return user
}
```

Response:
- Success: Returns the authenticated user object.
- Failure: Returns an error object with relevant details.

File Structure:

```
app/login/page.tsx
lib/supabase.ts
```

### 3. Profile Page (app/profile/page.tsx)

Users can manage their subscriptions through this page. It includes:

- Manage Subscription: View current subscription status.
- Cancel Subscription: Option to cancel the subscription.
- Update Payment Method: Integration with Stripe to update payment details.
- Billing History: Display a list of past payments.

Stripe Integration Example (Subscription Management):

```typescript
import { stripe } from '@/lib/stripe'

export async function createCheckoutSession(customerId) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer: customerId,
    mode: 'subscription',
    success_url: `${process.env.BASE_URL}/success`,
    cancel_url: `${process.env.BASE_URL}/cancel`
  })
  return session.url
}
```

Response:
- Success: Redirects to Stripe's hosted checkout page.
- Failure: Returns an error message.

File Structure:

```
app/profile/page.tsx
lib/supabase.ts
lib/stripe.ts
```

### 4. Pricing/Download Page (app/pricing/page.tsx)

The pricing page displays the different subscription tiers for the blackjack app. Once a user subscribes, they can download the app. The download button will only be visible to subscribed users.

- Pricing Table: Display different subscription options with action buttons.
- Stripe Payment: Users can select a plan and pay through Stripe.

Download Button Visibility (Subscription Check Example):

```typescript
import { supabase } from '@/lib/supabase'

export async function checkSubscription(userId) {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', userId)

  if (error) throw error

  return data && data.length > 0 && data[0].status === 'active'
}
```

Response:
- Returns true if the user has an active subscription.
- Otherwise, returns false.

File Structure:

```
app/pricing/page.tsx
components/PricingTable.tsx
components/DownloadButton.tsx
lib/supabase.ts
lib/stripe.ts
```

## File Structure Overview

Here is the proposed file structure for the project:

```
.
|-- README.md
|-- app
|   |-- favicon.ico
|   |-- fonts/
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx  # Home page
|   |-- login/
|       |-- page.tsx  # Login/signup page
|   |-- profile/
|       |-- page.tsx  # Profile page
|   |-- pricing/
|       |-- page.tsx  # Pricing and download page
|-- components/
|   |-- Navbar.tsx
|   |-- Footer.tsx
|   |-- Hero.tsx
|   |-- Features.tsx
|   |-- Testimonials.tsx
|   |-- PricingTable.tsx
|   |-- DownloadButton.tsx
|   |-- ui/  # shadcn/ui components
|-- lib/
|   |-- supabase.ts  # Supabase integration (auth, subscription management)
|   |-- stripe.ts  # Stripe integration
|   |-- utils.ts
|-- public/
|   |-- images/  # Static assets
|-- next-env.d.ts
|-- next.config.mjs
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- tailwind.config.ts
|-- tsconfig.json
```

## Technical Documentation

### Authentication

Authentication is handled via Supabase Auth, enabling the following methods:

- Email & Password
- Social Logins (Google, Twitter, Facebook)

```typescript
import { supabase } from '@/lib/supabase'

export async function signUpWithEmail(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) throw error
  return user
}
```

### Subscription Management

Subscription management is integrated with Stripe. Users can view, update, and cancel subscriptions from their profile page.

```typescript
import { stripe } from '@/lib/stripe'

export async function cancelSubscription(subscriptionId) {
  const deleted = await stripe.subscriptions.del(subscriptionId)
  return deleted
}
```

### Payment Processing

Payments are securely handled through Stripe's API. Ensure that all API keys and environment variables are properly set up.

```typescript
export async function createPaymentIntent(amount) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method_types: ['card']
  })
  return paymentIntent.client_secret
}
```

### UI Components

Using shadcn/ui for UI consistency and TailwindCSS for styling.

Example for a reusable Button component:

```tsx
export const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="bg-blue-500 text-white py-2 px-4 rounded">
    {children}
  </button>
)
```