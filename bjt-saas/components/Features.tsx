import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Zap, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    title: 'Interactive Training',
    description: 'Practice with our AI-powered dealer and receive instant feedback.',
    icon: Zap,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed statistics.',
    icon: TrendingUp,
  },
  {
    title: 'Secure Platform',
    description: 'Your data and payments are protected with industry-standard security.',
    icon: Shield,
  },
]

export function Features() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}