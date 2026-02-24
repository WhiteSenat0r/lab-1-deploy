# Beezi - LLM Provider Settings Prototype

A prototype settings page demonstrating LLM provider management interface with modal dialogs for connecting providers, managing subscriptions, and editing connections.

## Features

- **Sidebar Navigation**: Left sidebar with Beezi branding and 8 navigation items
- **Header**: Top header with page title, feedback button, notifications, and user avatar
- **Provider Connection Flow**: Two-step modal process for connecting LLM providers
- **Subscription Management**: Modal displaying Free, Pro, and Custom subscription tiers
- **Connection Management**: Edit and disconnect existing provider connections

## Tech Stack

- React 19 + TypeScript
- Vite 6.x
- TailwindCSS 4.x
- RadixUI (Dialog components)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx                      # Top header component
│   ├── Sidebar.tsx                     # Left navigation sidebar
│   └── modals/
│       ├── SelectProviderModal.tsx     # Step 1: Select LLM provider
│       ├── ConnectProviderModal.tsx    # Step 2: Enter API credentials
│       ├── SubscriptionModal.tsx       # Subscription tier selection
│       ├── EditConnectionModal.tsx     # Edit existing connection
│       ├── DisconnectModal.tsx         # Disconnect confirmation
│       ├── providers.constants.ts      # Provider configurations
│       └── subscription.constants.ts   # Subscription plan data
├── App.tsx                             # Main app with layout and state
├── index.css                           # Global styles + Tailwind
└── main.tsx                            # App entry point

```

## Modals Overview

### 1. Select LLM Provider (Step 1)
- Choose from Anthropic, Google, OpenAI, Microsoft, or AWS Bedrock
- Step indicator shows "Step 1 of 2"
- Clicking a provider advances to connection form

### 2. Connect LLM Provider (Step 2)
- Enter connection name (with info tooltip)
- Enter API key (with show/hide toggle)
- Back button returns to provider selection

### 3. Subscription Plans
- Three tiers: Free, Pro ($40/user/month), Custom
- Toggle between Monthly and Annual billing
- Feature lists with checkmarks
- Pro plan highlighted with purple border

### 4. Edit Connection
- Update connection name
- Change API key
- Pre-filled with existing values

### 5. Disconnect Provider
- Confirmation dialog
- Warning about stopping requests
- Destructive action (red button)

## State Management

All state is managed locally using React's `useState`:
- Modal open/close states
- Selected provider for connection flow
- Billing period toggle (subscription modal)
- Form inputs (connection name, API key)

No backend integration - this is a UI prototype only.

## Design Implementation

The prototype closely matches the provided Figma/design mockups:
- Color scheme: Gray backgrounds (#f9fafb), white cards, indigo primary (#6366f1)
- Typography: System font stack
- Spacing: Consistent padding and margins
- Components: RadixUI for accessible modals
- Responsive layout with full-height sidebar

## Browser Support

Modern browsers supporting ES2020:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Task Reference

**Task:** SCRUM-121
**Description:** Page prototype with sidebar, header, and LLM provider modals
