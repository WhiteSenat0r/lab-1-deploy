# Component Usage Guide

## Quick Start

To use the new Settings page and its components in your application:

### 1. Use the Complete Settings Page

```typescript
import { SettingsPage } from './pages/SettingsPage';

function App() {
  return <SettingsPage />;
}
```

### 2. Use Individual Components

```typescript
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SubscriptionBanner } from './components/SubscriptionBanner';
import { LLMProviders } from './components/LLMProviders';

function CustomLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <SubscriptionBanner />
          <LLMProviders />
        </main>
      </div>
    </div>
  );
}
```

## Component Details

### Sidebar
- **Location**: `src/components/Sidebar/`
- **Props**: None (currently stateless)
- **Features**:
  - Fixed width (256px / w-64)
  - Full height (h-screen)
  - Navigation items with active state
  - Logo and branding area

**Customization**:
To change the active menu item, edit the `menuItems` array in `Sidebar.tsx`:
```typescript
const menuItems: MenuItem[] = [
  { icon: Home, label: 'Dashboard', path: '/dashboard', active: true },
  // ... other items
];
```

### Header
- **Location**: `src/components/Header/`
- **Props**: None
- **Features**:
  - Page title
  - Search button
  - Notifications button
  - User avatar

**Customization**:
To change the page title, edit the h1 in `Header.tsx`:
```typescript
<h1 className="text-2xl font-semibold text-[#0F172A]">Your Title</h1>
```

### SubscriptionBanner
- **Location**: `src/components/SubscriptionBanner/`
- **Props**: None (currently uses mock data)
- **Features**:
  - Displays current plan
  - Upgrade call-to-action
  - Gradient background

**Future Enhancement**:
Add props to make it dynamic:
```typescript
interface SubscriptionBannerProps {
  currentPlan: string;
  description: string;
  onUpgrade: () => void;
}
```

### LLMProviders
- **Location**: `src/components/LLMProviders/`
- **Props**: None (currently uses mock data)
- **Features**:
  - Grid layout of provider cards
  - Connection status indicators
  - Add provider button

**Future Enhancement**:
Add props for dynamic providers:
```typescript
interface LLMProvidersProps {
  providers: Provider[];
  onAddProvider: () => void;
  onConfigureProvider: (id: string) => void;
}
```

## Styling with TailwindCSS

All components use TailwindCSS v4. Common utility classes used:

- **Layout**: `flex`, `grid`, `w-64`, `h-screen`, `gap-4`
- **Spacing**: `p-6`, `px-4`, `py-2`, `space-y-6`
- **Colors**: `bg-[#FAFAFA]`, `text-[#0F172A]`, `text-[#6366F1]`
- **Borders**: `border`, `border-gray-200`, `rounded-lg`
- **Hover**: `hover:bg-gray-100`, `hover:text-[#0F172A]`

To customize colors globally, edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      sidebar: {
        bg: '#FAFAFA',
        text: '#0F172A',
        active: '#6366F1',
      },
    },
  },
}
```

## Icons

Icons are provided by `lucide-react`. Available icons used:
- `Home`, `LayoutGrid`, `Database`, `Settings`, `FileText`
- `Bell`, `Search`
- `Crown`
- `Plus`, `CheckCircle2`

To use more icons:
```typescript
import { User, LogOut, ChevronDown } from 'lucide-react';

<User className="w-5 h-5" />
```

## Responsive Design

The components are responsive:
- Sidebar: Fixed width on desktop
- LLMProviders: `grid-cols-1 md:grid-cols-2` (1 column on mobile, 2 on tablet+)
- Header: Flexbox with responsive gaps

To add mobile menu toggle:
```typescript
const [sidebarOpen, setSidebarOpen] = useState(false);

// Show/hide sidebar based on state
<Sidebar className={sidebarOpen ? 'block' : 'hidden md:block'} />
```

## Next Steps

1. **Add Routing**: Integrate with React Router to make navigation functional
2. **Connect to API**: Replace mock data with real API calls
3. **Add State Management**: Use React Context or a state library for shared state
4. **Implement Authentication**: Add user authentication and profile management
5. **Add More RadixUI Components**: Dialog, Dropdown Menu, Toast notifications
