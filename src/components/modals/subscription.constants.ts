/**
 * Constants for subscription plans and features
 */

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number | string;
  period: string;
  description: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  highlighted?: boolean;
  features: string[];
  includesAllFrom?: string;
}

export const FREE_PLAN_FEATURES = [
  'Up to 5 users',
  '1 project / board',
  'Up to 2 repositories',
  'AI-powered PR comments\nup to 3 per task',
  '1 LLM connector\nno custom AI providers',
  'Smart Ticket System',
  'LLM health check',
  'Implementation Plan',
  'Admin-only access\nsingle role, no RBAC',
];

export const PRO_PLAN_FEATURES = [
  'Unlimited users',
  'Unlimited projects and repositories',
  'Unlimited AI-powered PR comments',
  'Custom AI providers & private LLMs',
  'Model Routing Optimizer',
  'Token Balancer',
  'Analytics for Managers',
  'Branch strategy setup',
  'Tech support',
  'RBAC & advanced access control',
];

export const CUSTOM_PLAN_FEATURES = [
  'Custom system deployment & configuration (self-hosted)',
  'Enterprise-grade security for self-hosted environments',
  'Team onboarding',
  'Priority support',
  'SAML/OIDC SSO',
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: '/ user / month',
    description: 'Explore AI workflows with basic setup.',
    buttonText: 'Current',
    buttonVariant: 'secondary',
    features: FREE_PLAN_FEATURES,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 40,
    period: '/ user / month',
    description: 'Run AI reliably across daily workflows.',
    buttonText: 'Upgrade',
    buttonVariant: 'primary',
    highlighted: true,
    features: PRO_PLAN_FEATURES,
    includesAllFrom: 'FREE',
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'Custom prise',
    period: '',
    description: 'Scale AI securely across teams.',
    buttonText: 'Contact us',
    buttonVariant: 'secondary',
    features: CUSTOM_PLAN_FEATURES,
    includesAllFrom: 'FREE AND PRO',
  },
];
