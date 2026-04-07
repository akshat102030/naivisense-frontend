import PropTypes from 'prop-types'
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts'

export function SessionBarChart({ data }) {
  return (
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="var(--text3)" tick={{ fontSize: 10 }} />
          <YAxis stroke="var(--text3)" tick={{ fontSize: 10 }} />
          <Tooltip
            contentStyle={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text)',
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="speech" stackId="a" fill="var(--gold)" radius={[2, 2, 0, 0]} />
          <Bar dataKey="ot" stackId="a" fill="var(--cyan)" radius={[2, 2, 0, 0]} />
          <Bar dataKey="social" stackId="a" fill="var(--violet)" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

SessionBarChart.propTypes = {
  data: PropTypes.array,
}

