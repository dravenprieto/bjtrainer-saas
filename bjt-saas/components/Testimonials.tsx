import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const testimonials = [
  {
    name: 'John Doe',
    comment: 'This trainer helped me improve my game significantly!',
  },
  {
    name: 'Jane Smith',
    comment: 'I love the interactive features and real-time feedback.',
  },
  {
    name: 'Mike Johnson',
    comment: 'The best blackjack training platform I\'ve ever used.',
  },
]

export function Testimonials() {
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>&ldquo;{testimonial.comment}&rdquo;</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}