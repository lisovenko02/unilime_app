import MetricCard from '../components/MetricCard'
import {
  DollarSign,
  Users,
  Activity,
  ShoppingCart,
  MessageCircle,
  Ship,
} from 'lucide-react'

const metrics = [
  { icon: <Users />, label: 'Total Users', value: 1250 },
  { icon: <Activity />, label: 'Active Sessions', value: 320 },
  { icon: <DollarSign />, label: 'Revenue Today', value: 5230 },
  { icon: <ShoppingCart />, label: 'Orders Today', value: 87 },
  { icon: <MessageCircle />, label: 'New Messages', value: 122 },
  { icon: <Ship />, label: 'Ships', value: 32 },
]

const Overview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">Overview</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m, i) => (
          <MetricCard key={i} icon={m.icon} label={m.label} value={m.value} />
        ))}
      </div>
    </div>
  )
}

export default Overview
