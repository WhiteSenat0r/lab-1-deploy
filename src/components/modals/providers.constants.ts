/**
 * Constants for LLM provider configurations
 */

export interface Provider {
  id: string;
  name: string;
  icon: string;
}

export const LLM_PROVIDERS: Provider[] = [
  { id: 'anthropic', name: 'Anthropic', icon: 'A' },
  { id: 'google', name: 'Google', icon: 'G' },
  { id: 'openai', name: 'Open AI', icon: 'O' },
  { id: 'microsoft', name: 'Microsoft', icon: 'M' },
  { id: 'aws-bedrock', name: 'AWS Bedrock', icon: 'AWS' },
];
