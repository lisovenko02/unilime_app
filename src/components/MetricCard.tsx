import type { ReactNode } from 'react'
import CountUp from 'react-countup'

type Props = {
  icon: ReactNode
  label: string
  value: string | number
}

/**
 *
 * A card component that displays a metric with an icon and animated number.
 * @param {ReactNode} icon - Icon to display.
 * @param {string} label - Descriptive label.
 * @param {string | number} value - The metric value to animate.
 */
export default function MetricCard({ icon, label, value }: Props) {
  return (
    <div className="bg-bg-darker text-text-light p-4 rounded-xl shadow flex items-center gap-4 border border-accent-dark">
      <div className="text-primary text-3xl">{icon}</div>
      <div>
        <p className="text-sm text-text-gray">{label}</p>

        <p className="text-xl font-semibold">
          <CountUp
            start={0}
            end={Number(value)}
            duration={2}
            separator=","
            className="inline"
          />
        </p>
      </div>
    </div>
  )
}
